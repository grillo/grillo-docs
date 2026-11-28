import {defineRouteMiddleware} from '@astrojs/starlight/route-data';
import {markdownPath, pageDescription} from './markdown';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  if (route.entry.data.template === 'splash') return;

  const description = pageDescription(route.entry);
  if (description) {
    for (const tag of route.head) {
      if (tag.attrs?.name === 'description' || tag.attrs?.property === 'og:description') tag.attrs.content = description;
    }
  }
  route.head.push({tag: 'link', attrs: {rel: 'alternate', type: 'text/markdown', href: markdownPath(route.id)}});
});
