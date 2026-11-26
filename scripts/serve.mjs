#!/usr/bin/env node
/**
 * Minimal static server for previewing the production build.
 *
 * Behaves like GitHub Pages: unknown routes return build/404.html with status
 * 404. This avoids the English 404 page of the default `docusaurus serve`.
 *
 *   npm run serve [-- --port 3000] [-- --host localhost]
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD = path.join(ROOT, 'build');

const args = process.argv.slice(2);
const argValue = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const port = Number(argValue('--port', process.env.PORT || '3000'));
const host = argValue('--host', 'localhost');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json; charset=utf-8',
};

if (!fs.existsSync(BUILD)) {
  console.error('build/ does not exist. Run "npm run build" first.');
  process.exit(1);
}

function resolveFile(urlPath) {
  let pathname;
  try {
    pathname = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  } catch (error) {
    return null;
  }
  const relative = path.normalize(pathname).replace(/^([/\\]|\.\.[/\\])+/, '');
  let candidate = path.join(BUILD, relative);

  if (!candidate.startsWith(BUILD)) {
    return null;
  }
  if (pathname.endsWith('/')) {
    candidate = path.join(candidate, 'index.html');
  }
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }
  if (!path.extname(candidate)) {
    const withHtml = candidate + '.html';
    if (fs.existsSync(withHtml)) {
      return withHtml;
    }
  }
  const indexHtml = path.join(candidate, 'index.html');
  if (fs.existsSync(indexHtml)) {
    return indexHtml;
  }
  return null;
}

const server = http.createServer((request, response) => {
  const file = resolveFile(request.url || '/');
  if (file) {
    const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
    response.writeHead(200, {'Content-Type': type});
    fs.createReadStream(file).pipe(response);
    return;
  }

  const notFound = path.join(BUILD, '404.html');
  if (fs.existsSync(notFound)) {
    response.writeHead(404, {'Content-Type': MIME['.html']});
    fs.createReadStream(notFound).pipe(response);
    return;
  }
  response.writeHead(404, {'Content-Type': MIME['.txt']});
  response.end('Not found');
});

server.listen(port, host, () => {
  console.log('Serving build/ at http://' + host + ':' + port + '/ (404 -> build/404.html)');
});
