import { purgeCache } from '@netlify/functions';

export default async function PurgeCache(request: Request) {
  const cacheTag = request.headers.get('Netlify-Cache-Tag');
  const tags = cacheTag ? [cacheTag] : undefined;

  console.log(`Purging tags: ${tags}`);

  await purgeCache({
    tags,
  });
}
