#!/usr/bin/env node
/**
 * Refresh the release data used by the website.
 *
 *   npm run sync:data
 *
 * Pulls the latest release, its changelog (English and Chinese), download
 * assets and repository statistics from GitHub, then writes:
 *
 *   src/data/releases.json
 *   src/data/contributors.json
 *   static/img/contributors/*.png   (only missing avatars)
 *
 * Requires network access to api.github.com and raw.githubusercontent.com.
 */

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO = 'FCL-Team/FoldCraftLauncher';
const API = 'https://api.github.com/repos/' + REPO;
const RAW = 'https://raw.githubusercontent.com/' + REPO + '/main';
const HEADERS = {
  'User-Agent': 'fcl-website-sync',
  Accept: 'application/vnd.github+json',
};

const ARCH_ORDER = ['arm64-v8a', 'all', 'armeabi-v7a', 'x86_64', 'x86'];

async function getJson(url) {
  const response = await fetch(url, {headers: HEADERS});
  if (!response.ok) {
    throw new Error('GitHub API returned ' + response.status + ' for ' + url);
  }
  return response.json();
}

async function getText(url) {
  const response = await fetch(url, {headers: HEADERS});
  if (!response.ok) {
    throw new Error('Request failed with ' + response.status + ' for ' + url);
  }
  return response.text();
}

function archOf(assetName) {
  const match = assetName.match(/FCL-release-[^-]+-(.+)\.apk$/);
  return match ? match[1] : 'unknown';
}

async function fetchAllReleases() {
  const releases = [];
  for (let page = 1; page <= 5; page += 1) {
    const batch = await getJson(
      API + '/releases?per_page=100&page=' + page,
    );
    releases.push(...batch);
    if (batch.length < 100) {
      break;
    }
  }
  return releases;
}

async function main() {
  console.log('Fetching repository information...');
  const repo = await getJson(API);

  console.log('Fetching releases...');
  const releases = await fetchAllReleases();

  console.log('Fetching version_map.json...');
  const versionMap = JSON.parse(await getText(RAW + '/version_map.json'));
  const current = Array.isArray(versionMap) ? versionMap[0] : versionMap;
  const latestRelease =
    releases.find((release) => release.tag_name === current.versionName) ||
    releases[0];

  const changelogFor = (lang) => {
    const entry = (current.description || []).find((item) => item.lang === lang);
    return entry ? entry.text : '';
  };

  const assets = (latestRelease.assets || [])
    .map((asset) => ({
      arch: archOf(asset.name),
      name: asset.name,
      size: asset.size,
      downloads: asset.download_count,
      url: asset.browser_download_url,
    }))
    .sort(
      (a, b) => ARCH_ORDER.indexOf(a.arch) - ARCH_ORDER.indexOf(b.arch),
    );

  let totalDownloads = 0;
  for (const release of releases) {
    for (const asset of release.assets || []) {
      totalDownloads += asset.download_count || 0;
    }
  }

  const releasesData = {
    generatedAt: new Date().toISOString(),
    source: 'https://github.com/' + REPO,
    stats: {
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      contributors: 0, // filled in below
      releases: releases.length,
      totalDownloads,
    },
    latest: {
      tag: current.versionName,
      versionName: current.versionName,
      versionCode: current.versionCode,
      date: current.date,
      publishedAt: latestRelease.published_at,
      releaseUrl: latestRelease.html_url,
      netdiskUrl: current.netdiskUrl || '',
      changelog: {en: changelogFor('en'), zh: changelogFor('zh_CN')},
      assets,
    },
    recent: releases
      .filter((release) => release.tag_name !== current.versionName)
      .slice(0, 6)
      .map((release) => ({
        tag: release.tag_name,
        publishedAt: release.published_at,
        url: release.html_url,
      })),
  };

  console.log('Fetching contributors...');
  const contributors = (
    await getJson(API + '/contributors?per_page=100')
  ).filter(
    (person) => person.type !== 'Bot' && !person.login.endsWith('[bot]'),
  );

  const avatarDir = path.join(ROOT, 'static', 'img', 'contributors');
  fs.mkdirSync(avatarDir, {recursive: true});
  for (const person of contributors) {
    const file = path.join(avatarDir, person.login + '.png');
    if (fs.existsSync(file)) {
      continue;
    }
    const response = await fetch(person.avatar_url + '&s=96', {
      headers: HEADERS,
    });
    if (response.ok) {
      fs.writeFileSync(file, Buffer.from(await response.arrayBuffer()));
    }
  }

  releasesData.stats.contributors = contributors.length;

  const contributorsData = contributors.map((person) => ({
    login: person.login,
    contributions: person.contributions,
    avatar: '/img/contributors/' + person.login + '.png',
    url: person.html_url,
  }));

  fs.writeFileSync(
    path.join(ROOT, 'src', 'data', 'releases.json'),
    JSON.stringify(releasesData, null, 2) + '\n',
  );
  fs.writeFileSync(
    path.join(ROOT, 'src', 'data', 'contributors.json'),
    JSON.stringify(contributorsData, null, 2) + '\n',
  );

  console.log(
    'Done. Latest release: ' + releasesData.latest.versionName +
      ', ' + contributors.length + ' contributors.',
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
