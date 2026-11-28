import type {APIRoute} from 'astro';
import {getCollection} from 'astro:content';
import {pageMarkdown} from './[...slug].md';

export const GET: APIRoute = async ({site}) => {
  const docs = (await getCollection('docs')).sort((a, b) => a.id.localeCompare(b.id));
  const pages = docs.map((d) => `<!-- ${site!.origin}/${d.id === 'index' ? '' : d.id} -->\n\n${pageMarkdown(d).trim()}`);
  return new Response(pages.join('\n\n---\n\n') + '\n');
};
