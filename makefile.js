import path from 'path';
import {execSync} from 'child_process';
import * as fs from 'fs';
import semver from 'semver';

/**
 * Gets a path to an executable in node_modules/.bin
 *
 * @param {string} command The executable name.
 * @returns {string} The executable path.
 */
function getBinFile(command) {
  return path.join('node_modules', '.bin', command);
}

const args = process.argv.slice(2);
const targets = {};
const version = process.env.npm_package_version;

targets.doc = () => {
  const o = execSync(`${getBinFile('jsdoc')} -c jsdoc.conf.json -d ` +
  `jsdocs/v${version}`);
  console.log(o.toString());
  const data = `<script>window.location.replace("./v${version}/");</script>`;
  fs.writeFileSync('jsdocs/index.html', data);
};

/**
 * Increments the npm version based on the history of commits since the last
 * version tag.
 * This is run before tagging a new release.
 * The rules are as follows:
 *  If a commit in range contains #major, the major version will be incremented.
 *  Else if a commit contains #minor, the minor version will be incremented.
 *  Else, the patch version will be incremented.
 *
 * @returns {string} The new version.
 * @private
 */
function bumpVersion() {
  execSync(`git fetch -t`);
  const tagsStr = execSync(`git tag -l`).toString();
  const tags = tagsStr.trim().split('\n');
  let lastVersion = null;
  let lastTag = null;
  for (let i = tags.length; i >= 0; i--) {
    const iVer = semver.valid(tags[i]);
    if (iVer != null && (lastVersion == null || semver.gt(iVer, lastVersion))) {
      lastVersion = iVer;
      lastTag = tags[i];
    }
  }
  if (lastVersion == null) {
    console.log('No tags found, no need to bump version.');
    return version;
  }
  if (semver.gt(lastVersion, version)) {
    throw new Error(`Current version '${version}' should not be less than ` +
    `last version '${lastVersion}'`);
  }

  // Fetch commits since last tag
  const tagDate = execSync(`git log -1 --format=%ai ${lastTag}`);
  console.log(`Last tagged version: ${lastVersion}, date: ${tagDate}`);
  execSync(`git fetch --shallow-since="${tagDate}"`);

  const log = execSync(`git log ${lastTag}..HEAD`).toString();
  /** @type {semver.ReleaseType} */
  let type;
  if (/#major\b/.test(log)) type = 'major';
  else if (/#minor\b/.test(log)) type = 'minor';
  else type = 'patch';
  const newVersion = semver.inc(lastVersion, type);
  console.log(`Incrementing last tagged version by '${type}'. New minimum ` +
    `version is ${newVersion}.`);
  if (semver.gt(newVersion, version)) {
    execSync(`npm version ${type}`);
  } else {
    console.log(`Current version ${version} is greater or equal.`);
  }
  return newVersion;
};

targets.tag = () => {
  try {
    const headVersion = execSync(`git describe HEAD --exact-match --tags`)
    .toString();
    if (headVersion.startsWith('v')) {
      console.log('Already tagged.');
      return;
    }
  } catch (e) {
    console.log('Tagging new version.');
  }
  bumpVersion();
  execSync(`git push`);
  execSync(`git push --tags`);
};

if (args.length === 0) throw new Error('No target specified');

// Run the target
targets[args[0]]();
