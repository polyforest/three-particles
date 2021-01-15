import path from 'path';
import {exec} from 'child_process';

'use strict';

console.log(process.env.npm_package_version);

/**
 * Gets a path to an executable in node_modules/.bin
 * @param {string} command The executable name.
 * @return {string} The executable path.
 */
function getBinFile(command) {
  return path.join('node_modules', '.bin', command);
}

/**
 * Executes a command with logging.
 * @param {string} command
 */
function cmd(command) {
  console.log(command);
  exec(command,
    (error, stdout, stderr) => {
      if (error) {
        console.error(error, stderr);
        return;
      }
      if (stdout.length > 0) {
        console.log(stdout);
      }
    });
}

const args = process.argv.slice(2);

const targets = {};
const version = process.env.npm_package_version;

targets.doc = () => {
  cmd(`${getBinFile('jsdoc')} -c jsdoc.conf.json -d jsdocs/v${version}`);
};

if (args.length === 0) throw new Error('No target specified');

// Run the target
targets[args[0]]();

