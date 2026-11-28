import type {CollectionEntry} from 'astro:content';

// Every page is also published as plain Markdown, at its URL plus .md (the home page at /index.md).
export const markdownPath = (id: string) => `/${id === '' ? 'index' : id}.md`;

const NOT_PROSE = /^(import |#|:::|<|```|\||[-*] |\d+\. |!\[)/;

// As Docusaurus did: a page without a `description` is described by its first paragraph.
export function pageDescription(entry: CollectionEntry<'docs'>): string | undefined {
  if (entry.data.description) return entry.data.description;
  const paragraph = (entry.body ?? '')
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !NOT_PROSE.test(block));
  return paragraph
    ?.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/(\*\*|__|`)/g, '')
    .replace(/\s+/g, ' ');
}
