// Every page is also published as plain Markdown, at its URL plus .md (the home page at /index.md).
export const markdownPath = (id: string) => `/${id === '' ? 'index' : id}.md`;
