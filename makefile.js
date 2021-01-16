import path from 'path';
import {exec} from 'child_process';
import * as fs from 'fs';

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

const emptyCallback = () => {
};

/**
 * Executes a command with logging.
 * @param {string} command
 * @param {function} onSuccess
 */
function cmd(command, onSuccess = emptyCallback) {
  console.log(command);
  exec(command,
    (error, stdout, stderr) => {
      if (error) console.error(error, stderr);
      if (stdout.length > 0) {
        console.log(stdout);
      }
      if (!error) onSuccess();
    });
}

const args = process.argv.slice(2);

const targets = {};
const version = process.env.npm_package_version;

targets.doc = () => {
  cmd(`${getBinFile('jsdoc')} -c jsdoc.conf.json -d jsdocs/v${version}`, () => {
    // RewriteRule ^subdirectory/(.*)$ /anotherdirectory/$1 [R=301,NC,L]
    const data = `RewriteRule ^latest/(.*)$ v${version}/$1 [R=301,NC,L]`;
    fs.writeFileSync('jsdocs/.htaccess', data);
  });
};

if (args.length === 0) throw new Error('No target specified');

// Run the target
targets[args[0]]();

