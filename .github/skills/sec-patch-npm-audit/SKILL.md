---
name: sec-patch-npm-audit
description: Safely auto-patch local npm vulnerabilities and stage the changes with a pre-written commit message template. Trigger when asked to audit, patch dependencies, or fix CVEs.
metadata:
  internal: true
---

# NPM Audit Patcher

## Context

Applies clean, non-breaking dependency updates locally, updates node_modules, and stages the changes.

## Steps

1. Run `node ./.github/skills/sec-patch-npm-audit/scripts/audit.helper.mts` to get the fixable payload summary.
2. If `changes` is empty, halt and report that no safe patches exist.
3. Print the list of planned upgrades (`changes` and `advisories` arrays) clearly to the developer console with advisories[].name, advisories[].severity, advisories[].title and advisories[].url.
4. Run `npm audit fix`.
5. Stage all changes by running `git add package.json package-lock.json`.
6. Output the pre-formatted commit message block below to the developer console so they can review and commit it manually.

## Pre-Formatted Commit Message

fix(deps): security patch updates

- [advisories[].name] [From Version] -> [To Version]
  - [advisories[].id] - [advisories[].short]
