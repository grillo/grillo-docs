import {defineRouteMiddleware} from '@astrojs/starlight/route-data';
import {markdownPath} from './markdown';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  if (route.entry.data.template === 'splash' || context.url.pathname === '/404') return;
  route.head.push({tag: 'link', attrs: {rel: 'alternate', type: 'text/markdown', href: markdownPath(route.id)}});
});
