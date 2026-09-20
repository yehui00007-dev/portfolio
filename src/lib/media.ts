import fs from 'node:fs';
import path from 'node:path';

const VIDEO = /\.(mp4|webm|mov|m4v)$/i;

export const isRemote = (src: string) => /^https?:\/\//i.test(src);
export const isVideo = (src: string) => VIDEO.test(src.split('?')[0]);

/**
 * A local file counts only if it's really in /public.
 * So you can type the path now and drop the file in later:
 * until it exists, the component shows a labeled placeholder.
 */
export function hasFile(src?: string): src is string {
  if (!src) return false;
  if (isRemote(src)) return true;
  return fs.existsSync(path.join(process.cwd(), 'public', src));
}

/** "16:9" → "16 / 9" for CSS aspect-ratio. */
export function toRatio(ratio?: string) {
  if (!ratio) return undefined;
  const [w, h] = ratio.split(/[:/x]/).map((n) => n.trim());
  return h ? `${w} / ${h}` : ratio;
}
