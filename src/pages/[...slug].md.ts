import type {APIRoute, GetStaticPaths} from 'astro';
import {getCollection, type CollectionEntry} from 'astro:content';

export const getStaticPaths = (async () => {
  const docs = await getCollection('docs');
  return docs.map((entry) => ({params: {slug: entry.id || 'index'}, props: {entry}}));
}) satisfies GetStaticPaths;

export const pageMarkdown = (entry: CollectionEntry<'docs'>) =>
  `# ${entry.data.title}\n\n${(entry.body ?? '').trim()}\n`;

export const GET: APIRoute<{entry: CollectionEntry<'docs'>}> = ({props}) =>
  new Response(pageMarkdown(props.entry), {headers: {'Content-Type': 'text/markdown; charset=utf-8'}});
