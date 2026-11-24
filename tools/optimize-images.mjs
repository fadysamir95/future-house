#!/usr/bin/env node
/* Copies the USED images from images/social_media_images/ (originals are only
 * read, never modified) into the website asset folders as optimised WebP:
 *
 *   images/<folder>/<seo-name>-640.webp    cards / grids
 *   images/<folder>/<seo-name>-1080.webp   full size (poster text stays readable)
 *
 * No dependencies: the WebP encoder is the browser's canvas, so this needs
 * Microsoft Edge or Google Chrome installed (it is a build-time helper only).
 * Writes tools/media-manifest.json with the final pixel sizes, which
 * tools/build.mjs reads to emit width/height attributes (no layout shift).
 *
 *   node tools/optimize-images.mjs
 */
import http from 'node:http';
import { spawn } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { USED } from './media.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'images/social_media_images');
if (!existsSync(SRC)) { console.error("The original library images/social_media_images/ was deleted at the client's request (2026-11-24). To re-export or re-inventory images, restore the JPEGs into that folder (re-download them from the official social channels); the optimised site copies in images/<folder>/ are unaffected."); process.exit(1); }
const WIDTHS = [640, 1080];
const QUALITY = 0.86;
const BROWSERS = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'];
const browser = BROWSERS.find(existsSync);
if (!browser) throw new Error('Edge or Chrome is required for WebP encoding.');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// tiny static server for the source folder (read-only)
const server = http.createServer((q, r) => {
	const f = join(SRC, decodeURIComponent(q.url.slice(1)));
	if (q.url === '/') { r.writeHead(200, { 'content-type': 'text/html' }); return r.end('<canvas id=c></canvas>'); }
	if (!f.startsWith(SRC) || !existsSync(f)) { r.writeHead(404); return r.end(); }
	r.writeHead(200, { 'content-type': 'image/jpeg' }); r.end(readFileSync(f));
}).listen(0);
const port = server.address().port;

const profile = join(ROOT, '.tmp-edge-profile');
const proc = spawn(browser, ['--headless=new', '--disable-gpu', '--remote-debugging-port=9340', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
let targets;
for (let i = 0; i < 60; i++) { try { targets = await (await fetch('http://127.0.0.1:9340/json')).json(); if (targets.find((t) => t.type === 'page')) break; } catch {} await sleep(250); }
const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
await send('Page.enable'); await send('Runtime.enable');
await send('Page.navigate', { url: `http://localhost:${port}/` }); await sleep(800);

const encode = async (file, width) => {
	const expr = `(async () => {
	  const img = new Image(); img.src = '/${file}'; await img.decode();
	  const w = Math.min(${width}, img.naturalWidth), h = Math.round(img.naturalHeight * w / img.naturalWidth);
	  let src = img, sw = img.naturalWidth, sh = img.naturalHeight;
	  while (sw / 2 > w) { const c = document.createElement('canvas'); c.width = Math.round(sw / 2); c.height = Math.round(sh / 2); const x = c.getContext('2d'); x.imageSmoothingQuality = 'high'; x.drawImage(src, 0, 0, c.width, c.height); src = c; sw = c.width; sh = c.height; }
	  const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d'); x.imageSmoothingQuality = 'high'; x.drawImage(src, 0, 0, w, h);
	  return { w, h, data: c.toDataURL('image/webp', ${QUALITY}).split(',')[1] };
	})()`;
	const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
	if (r.result.exceptionDetails) throw new Error(`${file}: ${JSON.stringify(r.result.exceptionDetails)}`);
	return r.result.result.value;
};

const manifest = {};
let totalBytes = 0;
for (const u of USED) {
	if (!existsSync(join(SRC, u.file))) throw new Error(`Missing source image: ${u.file}`);
	mkdirSync(join(ROOT, 'images', u.folder), { recursive: true });
	manifest[u.newName] = { folder: u.folder, source: u.file, sizes: {} };
	for (const width of WIDTHS) {
		const { w, h, data } = await encode(u.file, width);
		const buf = Buffer.from(data, 'base64');
		writeFileSync(join(ROOT, 'images', u.folder, `${u.newName}-${width}.webp`), buf);
		manifest[u.newName].sizes[width] = { w, h, bytes: buf.length };
		totalBytes += buf.length;
	}
	console.log(u.file.padEnd(11), '->', `${u.folder}/${u.newName}`, `${manifest[u.newName].sizes[1080].w}x${manifest[u.newName].sizes[1080].h}`, `${Math.round(manifest[u.newName].sizes[1080].bytes / 1024)} KB`);
}
writeFileSync(join(ROOT, 'tools/media-manifest.json'), JSON.stringify(manifest, null, 1));
console.log(`\n${USED.length} images, ${USED.length * WIDTHS.length} files, ${(totalBytes / 1048576).toFixed(1)} MB total`);
ws.close(); proc.kill(); server.close();
await sleep(500);
try { (await import('node:fs')).rmSync(profile, { recursive: true, force: true }); } catch {}
