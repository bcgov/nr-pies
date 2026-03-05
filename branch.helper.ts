#!/usr/bin/env node

import { existsSync, lstatSync, readFileSync } from 'node:fs';
import { dirname, join, isAbsolute, parse, resolve } from 'node:path';

const validBranchRegex =
  /^(main|((bugfix|chore|ci|docs|feature|hotfix|perf|refactor|release|renovate|security|style|test)\/[a-z0-9]+([.-][a-z0-9]+)*))$/; // eslint-disable-line max-len

/**
 * Finds the actual git directory. Handles standard .git folders and worktree .git files.
 * @returns Current git directory.
 */
function getGitDir(): string {
  let currentDir = process.cwd();

  while (currentDir !== parse(currentDir).root) {
    const dotGitPath = join(currentDir, '.git');

    if (existsSync(dotGitPath)) {
      const stats = lstatSync(dotGitPath);
      if (stats.isFile()) {
        const content = readFileSync(dotGitPath, 'utf-8');
        const match = /^gitdir:\s+(.*)$/m.exec(content);
        if (match) {
          const gitDir = match[1].trim();
          // If worktree path is relative, resolve it relative to the .git file location
          return isAbsolute(gitDir) ? gitDir : resolve(currentDir, gitDir);
        }
      }
      return dotGitPath;
    }
    currentDir = dirname(currentDir);
  }

  process.stderr.write('Error: Not a git repository (no .git found up the tree).\n');
  process.exit(1);
}

/**
 * Reads the current branch name from the filesystem.
 * @returns Current branch name.
 */
function getCurrentBranch(): string {
  try {
    const gitDir = getGitDir();
    const headPath = join(gitDir, 'HEAD');

    if (!existsSync(headPath)) throw new Error(`HEAD not found at ${headPath}`);

    const headContent = readFileSync(headPath, 'utf-8').trim();
    if (headContent.startsWith('ref: ')) return headContent.replace('ref: refs/heads/', '');

    return headContent;
  } catch (error) {
    process.stderr.write(`Error reading branch: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exit(1);
  }
}

/**
 * Ensures the current branch name follows a naming convention and subsequent checks.
 * Exits with code 1 if the branch name is invalid.
 */
function main() {
  const branch = getCurrentBranch();

  if (validBranchRegex.test(branch)) {
    process.stdout.write(`Branch name '${branch}' is valid.\n`);
    process.exit(0);
  } else {
    process.stderr.write(`Error: Invalid branch name '${branch}'.\n`);
    process.stderr.write(`Branches must match: ${validBranchRegex.source}\n`);
    process.exit(1);
  }
}

main();
