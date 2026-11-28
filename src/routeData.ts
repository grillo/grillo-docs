import {defineRouteMiddleware} from '@astrojs/starlight/route-data';
import {markdownPath, pageDescription} from './markdown';

// Pages are written as page.html, and Astro 7 reports that file in the URL Starlight builds the canonical from.
const withoutHtml = (url: string) => url.replace(/(?:\/index)?\.html$/, '');

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  if (route.entry.data.template === 'splash') return;

  const description = pageDescription(route.entry);
  for (const tag of route.head) {
    const attrs = tag.attrs;
    if (!attrs) continue;
    if (description && (attrs.name === 'description' || attrs.property === 'og:description')) attrs.content = description;
    if (attrs.rel === 'canonical' && typeof attrs.href === 'string') attrs.href = withoutHtml(attrs.href);
    if (attrs.property === 'og:url' && typeof attrs.content === 'string') attrs.content = withoutHtml(attrs.content);
  }
  route.head.push({tag: 'link', attrs: {rel: 'alternate', type: 'text/markdown', href: markdownPath(route.id)}});
});
