// This script updates all path references to use the right directory
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const SPEC_DIR = 'spec';
const VERSIONS_FILE = 'versions.json';
const VERSIONED_DOCS_DIR = 'versioned_docs';

try {
  const versions = JSON.parse(readFileSync(VERSIONS_FILE, { encoding: 'utf-8' }));
  if (!Array.isArray(versions)) throw new Error(`File ${VERSIONS_FILE} is not a JSON array.`);

  versions.forEach((version: string) => {
    const working_dir = `${VERSIONED_DOCS_DIR}/version-${version}/${SPEC_DIR}`;

    if (!statSync(working_dir, { throwIfNoEntry: false })) {
      console.warn(`Version directory ${working_dir} does not exist.`);
    } else {
      const files = walk(working_dir);
      patch(files, '.mdx', '@site/docs/spec', `@site/${working_dir}`);
      patch(files, '.schema.json', 'docs/spec', `${working_dir}`);
    }
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}

//
// Task Functions
//

/**
 * @function patch
 * @description Patches a set of files matching a certain extension and pattern
 * @param {Array<string>} files The set of file paths
 * @param {string} ext The file extension to filter on
 * @param {string} from The pattern to look for
 * @param {string} to The pattern to replace with
 * @throws
 */
function patch(files: Array<string>, ext: string, from: string, to: string) {
  const schemas = files.filter((f) => f.endsWith(ext));

  schemas.forEach((file) => {
    const oldSchema = readFileSync(file, { encoding: 'utf-8' });
    if (oldSchema.match(from)) {
      const newSchema = oldSchema.replaceAll(from, to);
      writeFileSync(file, newSchema, { encoding: 'utf-8' });
      console.log(`Patched file ${file}`);
    }
  });
}

/**
 * @function walk
 * @description Recursively walks a directory and yields a set of files
 * @param {string} dir The directory to walk through
 * @returns {Array<string>} A complete set of file paths within the directory
 * @throws
 */
function walk(dir: string): Array<string> {
  const list = readdirSync(dir);

  let results = [];
  list.forEach((file) => {
    file = join(dir, file);
    const stat = statSync(file);

    if (stat && stat.isDirectory()) {
      results = [...results, ...walk(file)];
    } else {
      results.push(file);
    }
  });
  return results;
}
