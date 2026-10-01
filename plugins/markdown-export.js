const fs = require('node:fs/promises');
const path = require('node:path');

const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;

function markdownPath(permalink) {
  const trimmed = permalink.replace(/^\/|\/$/g, '');
  return trimmed ? `${trimmed}.md` : 'index.md';
}

module.exports = function markdownExport(context) {
  let allContent;

  return {
    name: 'markdown-export',
    allContentLoaded({allContent: loaded}) {
      allContent = loaded;
    },
    async postBuild({outDir}) {
      const {docs} = allContent['docusaurus-plugin-content-docs'].default.loadedVersions[0];
      const sorted = [...docs].sort((a, b) => a.permalink.localeCompare(b.permalink));
      const siteUrl = context.siteConfig.url;
      const entries = [];

      for (const doc of sorted) {
        const source = await fs.readFile(doc.source.replace('@site', context.siteDir), 'utf8');
        const body = source.replace(FRONTMATTER, '').trim();
        const target = path.join(outDir, markdownPath(doc.permalink));
        await fs.mkdir(path.dirname(target), {recursive: true});
        await fs.writeFile(target, `${body}\n`);
        entries.push({doc, body});
      }

      const index = entries
        .map(({doc}) => `- [${doc.title}](${siteUrl}/${markdownPath(doc.permalink)})${doc.description ? `: ${doc.description}` : ''}`)
        .join('\n');
      await fs.writeFile(
        path.join(outDir, 'llms.txt'),
        `# ${context.siteConfig.title}\n\n> ${context.siteConfig.tagline}\n\nEvery page is available as plain Markdown by appending .md to its URL. Full text of all pages: ${siteUrl}/llms-full.txt\n\n## Docs\n\n${index}\n`,
      );
      await fs.writeFile(
        path.join(outDir, 'llms-full.txt'),
        entries.map(({doc, body}) => `<!-- ${siteUrl}${doc.permalink} -->\n\n${body}`).join('\n\n---\n\n') + '\n',
      );
    },
  };
};
