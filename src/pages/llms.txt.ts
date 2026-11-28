import type {APIRoute} from 'astro';
import {getCollection} from 'astro:content';
import {markdownPath} from '../markdown';

export const GET: APIRoute = async ({site}) => {
  const base = site!.origin;
  const docs = (await getCollection('docs')).sort((a, b) => a.id.localeCompare(b.id));
  const index = docs.map((d) => `- [${d.data.title}](${base}${markdownPath(d.id)})${d.data.description ? `: ${d.data.description}` : ''}`);
  return new Response(
    `# Grillo Docs\n\n> Earthquake and landslide monitoring made simple\n\nEvery page is available as plain Markdown by appending .md to its URL. Full text of all pages: ${base}/llms-full.txt\n\n## Docs\n\n${index.join('\n')}\n`,
  );
};
