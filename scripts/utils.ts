import fs from 'node:fs'

/**
 * Check if the file exists.
 */
export function exists(path: string): boolean {
  try {
    fs.accessSync(path);
  } catch {
    return false;
  }
  return true;
}
