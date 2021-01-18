import path from 'path';
import {execSync} from 'child_process';
import * as fs from 'fs';
import semver from 'semver';

'use strict';

/**
 * Sets the git user.name to GITHUB_ACTOR.
 */
function setGitUser() {
  execSync(`git config user.name "GitHub Actions Bot"`);
  execSync(`git config user.email ` +
    `"41898282+github-actions[bot]@users.noreply.github.com"`);
}

/**
 * Gets a path to an executable in node_modules/.bin
 * @param {string} command The executable name.
 * @return {string} The executable path.
 */
function getBinFile(command) {
  return path.join('node_modules', '.bin', command);
}

const args = process.argv.slice(2);
const targets = {};
const version = process.env.npm_package_version;

targets.doc = () => {
  execSync(`${getBinFile('jsdoc')} -c jsdoc.conf.json -d jsdocs/v${version}`);
  const data = `<script>window.location.replace("./v${version}/");</script>`;
  fs.writeFileSync('jsdocs/index.html', data);
};

targets.bumpVersion = () => {
  setGitUser();
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
    return;
  }
  if (semver.gt(lastVersion, version)) {
    console.error(`Current version '${version}' should not be less than last ` +
      `version '${lastVersion}'`);
    process.exit(-1);
  }

  // Fetch commits since last tag
  const tagDate = execSync(`git log -1 --format=%ai ${lastTag}`);
  console.log(`Last tagged version: ${lastVersion}, date: ${tagDate}`);
  execSync(`git fetch --shallow-since="${tagDate}"`);

  const log = execSync(`git log ${lastTag}..HEAD`).toString();
  let type;
  if (/#major\b/.test(log)) type = 'major';
  else if (/#minor\b/.test(log)) type = 'minor';
  else type = 'patch';
  const newVersion = semver.inc(lastVersion, type);
  console.log(`Incrementing last tagged version by '${type}'. New minimum ` +
    `version is ${newVersion}.`);
  if (semver.gt(newVersion, version)) {
    const msg = `Bumping ${type} version. New version: ${newVersion}`;
    execSync(`npm version ${type} --git-tag-version=false`);
    execSync(`git add package.json package-lock.json`);
    if (process.env.CI) {
      console.log('Committing');
      execSync(`git commit -m "ci: ${msg}"`);
      execSync(`git push`);
    } else {
      console.log('Not a CI environment, not committing.');
    }
  } else {
    console.log(`Current version ${version} is greater or equal.`);
  }
};

targets.pushVersionTag = () => {
  setGitUser();
  execSync(`git tag v${version}`);
  execSync(`git push --tags`);
};

if (args.length === 0) throw new Error('No target specified');

// Run the target
targets[args[0]]();
