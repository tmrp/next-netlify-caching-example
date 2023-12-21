import { RevalidateCache } from '@/components/revalidate-cache';
import { ImageGrid } from '@/components/image-grid';
import { api } from '@/trpc/trpc-api';

async function getRandomImages() {
  const images = await api.unsplash.getRandomImages.query();

  return images;
}

export default async function Home() {
  const randomImages = await getRandomImages();

  const timeStamp = new Date().toUTCString();

  return (
    <main className="mx-auto px-2 pt-8 flex flex-col max-w-7xl">
      <div className="flex gap-8 flex-col">
        <div className="flex flex-col sm:flex-row gap-4 bg-gray-400 p-2 rounded-xl justify-between items-center">
          <span>This page was generated on: {timeStamp}</span>
          <RevalidateCache />
        </div>
        {randomImages && <ImageGrid images={randomImages} />}
      </div>
    </main>
  );
}
