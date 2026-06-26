#!/usr/bin/env node

/// <reference types="node" />
import { exec } from 'node:child_process';

interface AuditData {
  change?: ChangeEntry[];
  audit?: {
    vulnerabilities?: Record<string, Vulnerability>;
  };
  unreviewedScripts?: Array<{ name: string }>;
}

interface ChangeEntry {
  from?: PackageVersion;
  to?: PackageVersion;
}

interface OutputPayload {
  changes: Array<{ name?: string; from?: string; to?: string }>;
  advisories: Array<{
    name: string;
    severity: string;
    id: string | null;
    title: string | null;
    short: string | null;
    url: string | null;
  }>;
  pendingScripts: string[];
}

interface PackageVersion {
  name?: string;
  version?: string;
}

interface Vulnerability {
  name: string;
  severity: string;
  fixAvailable: boolean | Record<string, unknown>;
  via?: Array<{ title?: string; url?: string }>;
}

/**
 * Strips package prefix and hyper-abbreviates long advisory titles.
 * Example: "form-data: CRLF injection in form-data via unescaped..." -> "CRLF injection"
 */
function abbreviateTitle(title: string | undefined, packageName: string): string | null {
  if (!title) return null;

  // Remove "pkg-name: " prefix if present
  const escapedPackageName = packageName.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
  let clean = title.replace(new RegExp(String.raw`^${escapedPackageName}:\s*`, 'i'), '').trim();

  // Truncate at common connectors to capture only the core issue phrase
  const splitMatch = clean.split(/\s+(via|in|through|allows|during|vulnerability)\s+/i);
  if (splitMatch[0]) {
    clean = splitMatch[0].trim();
  }

  return clean;
}

/**
 * Extracts the trailing GHSA ID from a GitHub advisory URL.
 * Example: "https://github.com/advisories/GHSA-hmw2-7cc7-3qxx" -> "GHSA-hmw2-7cc7-3qxx"
 */
function extractAdvisoryId(url: string | undefined): string | null {
  if (!url) return null;
  const matches = new RegExp(/GHSA-[a-z0-9-]+$/i).exec(url);
  return matches ? matches[0] : null;
}

const cmd = 'npm audit fix --dry-run --json';

exec(cmd, { maxBuffer: 10 * 1024 * 1024 }, (error: Error | null, stdout: string, _stderr: string): void => {
  if (error && !stdout) {
    console.error('Execution failed:', error);
    process.exit(1);
  }

  const jsonStartIndex = stdout.indexOf('{');
  if (jsonStartIndex === -1) {
    console.error('No valid JSON payload found in output.');
    process.exit(1);
  }

  const cleanJsonString = stdout.slice(jsonStartIndex);
  try {
    const rawData = JSON.parse(cleanJsonString) as AuditData;
    const payload: OutputPayload = {
      changes: (rawData.change || []).map((c) => ({
        name: c.to?.name,
        from: c.from?.version,
        to: c.to?.version
      })),
      advisories: Object.values(rawData.audit?.vulnerabilities || {})
        .filter((v): v is Vulnerability => {
          if (v.fixAvailable === true) return true;
          if (v.fixAvailable === false) return false;
          if (typeof v.fixAvailable !== 'object' || v.fixAvailable === null) return false;
          return (v.fixAvailable as { isSemVerMajor?: unknown }).isSemVerMajor === false;
        })
        .map((v) => ({
          name: v.name,
          severity: v.severity,
          id: extractAdvisoryId(v.via?.[0]?.url),
          title: v.via?.[0]?.title || null,
          short: abbreviateTitle(v.via?.[0]?.title, v.name),
          url: v.via?.[0]?.url || null
        })),
      pendingScripts: (rawData.unreviewedScripts || []).map((s) => s.name)
    };

    console.log(JSON.stringify(payload, null, 2));
  } catch (parseError) {
    console.error('Failed to parse clean JSON:', parseError);
    process.exit(1);
  }
});
