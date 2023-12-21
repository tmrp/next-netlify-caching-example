import { Random } from 'unsplash-js/dist/methods/photos/types';

import { ImageCard } from './image-card';

interface Props {
  images: undefined | Random[] | Random;
}

export const ImageGrid = ({ images }: Props) => {
  if (!Array.isArray(images)) {
    return null;
  }

  return (
    <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-full">
      {images.map((image) => (
        <li className="w-full h-60 relative" key={image.id}>
          <ImageCard
            imageAlt={image.alt_description ?? 'No description'}
            imageSrc={image.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};
