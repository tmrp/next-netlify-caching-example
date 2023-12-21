import type { Context, Config } from '@netlify/edge-functions';

export const config: Config = {
  cache: 'manual',
  excludedPath: ['/_next/*', '/.netlify/functions/*'],
  path: '/*',
};

export default async function EdgeCacheControl(
  request: Request,
  context: Context
) {
  const response = await context.next();

  response.headers.set('Content-Type', 'text/html');

  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

  response.headers.set(
    'Netlify-CDN-Cache-Control',
    'public, max-age=31536000, must-revalidate'
  );

  response.headers.set('Netlify-Cache-Tag', 'images,cache-tag-api-demo');

  return response;
}
