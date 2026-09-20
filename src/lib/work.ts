import { getCollection } from 'astro:content';

/** Case studies in homepage order. Drafts show in dev, never in the production build. */
export async function getWork() {
  const all = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}
