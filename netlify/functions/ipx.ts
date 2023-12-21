import { createIPXHandler } from '@netlify/ipx';

export const handler = createIPXHandler({
  maxAge: 31536000,
  remotePatterns: [
    {
      hostname: 'images.unsplash.com',
      protocol: 'https',
    },
  ],
});
