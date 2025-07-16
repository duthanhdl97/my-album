'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

interface GalleryImageProps {
  src: string | StaticImageData;
  title: string;
  showMoreButton?: boolean;
  priority?: boolean;
  morePhotosHref?: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  onClick?: () => void;
}

const GalleryImageCard: React.FC<GalleryImageProps> = ({
  src,
  title,
  showMoreButton = true,
  priority = false,
  morePhotosHref = '/gallery/single',
  className,
  imageClassName,
  overlayClassName,
  contentClassName,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <figure
      className={clsx('relative aspect-square overflow-hidden shadow-lg group', onClick && 'cursor-pointer', className)}
      onClick={handleClick}
    >
      <Image
        src={src}
        alt={title || ''}
        fill
        priority={priority}
        sizes="(max-width: 448px) 100vw, (max-width: 768px) 50vw, 33vw"
        className={clsx(
          'object-cover grayscale transition-all duration-500 group-hover:scale-102 group-hover:grayscale-0',
          imageClassName,
        )}
      />

      <div
        className={clsx(
          'absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40',
          overlayClassName,
        )}
        aria-hidden="true"
      />

      {showMoreButton && (
        <div
          className={clsx(
            'absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4',
            contentClassName,
          )}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{title}</h2>
          <Link
            href={morePhotosHref}
            className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors duration-200 uppercase text-xs tracking-widest rounded"
            aria-label={`View more ${title} photos`}
            onClick={(e) => e.stopPropagation()}
          >
            More Photos
          </Link>
        </div>
      )}
    </figure>
  );
};

export default GalleryImageCard;
