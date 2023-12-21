import Image from 'next/image';

interface Props {
  imageSrc?: string;
  imageAlt?: string;
}

export const ImageCard = ({ imageAlt, imageSrc }: Props) => {
  return (
    <span className="w-full h-full overflow-hidden">
      <Image
        className="rounded-xl object-cover"
        src={imageSrc ?? ''}
        alt={imageAlt ?? ''}
        fill
      />
    </span>
  );
};
