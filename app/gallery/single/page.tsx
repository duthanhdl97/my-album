'use client';

import { useState, useRef } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import GalleryImageCard from '~/components/elements/GalleryImageCard';
import { CloseIcon, FaChevronLeft, FaChevronRight } from '~/components/elements/Icons';

interface GalleryImage extends ReactImageGalleryItem {
  title: string;
}

const Single = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const galleryRef = useRef<ImageGallery>(null);

  const imageTitles: string[] = [
    'Bãi tắm Lương Ngọc Quyến',
    'Đảo Cô Tô',
    'Tuần Châu',
    'Vịnh Hạ Long',
    'Đảo Cát Bà',
    'Bãi Cháy',
    'Vịnh Bái Tử Long',
  ];

  const images: GalleryImage[] = Array.from({ length: 63 }, (_, i) => ({
    original: `/images/album1/img_${i + 1}.webp`,
    thumbnail: `/images/album1/img_${i + 1}.webp`,
    title: imageTitles[i % imageTitles.length],
  }));

  const handleClick = (index: number): void => {
    setInitialIndex(index);
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = (): void => {
    setIsGalleryOpen(false);
  };

  const renderLeftNav = (onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean): React.ReactNode => (
    <button
      type="button"
      className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-4 z-50 p-2 rounded-full text-white hover:bg-black"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous image"
    >
      <FaChevronLeft />
    </button>
  );

  const renderRightNav = (onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean): React.ReactNode => (
    <button
      type="button"
      className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-4 z-50 p-2 rounded-full text-white hover:bg-black"
      disabled={disabled}
      onClick={onClick}
      aria-label="Next image"
    >
      <FaChevronRight />
    </button>
  );

  const renderCustomControls = (): React.ReactNode => (
    <div className="absolute top-1 left-10 z-100 transform -translate-x-1/2 text-gray-400 px-4 py-1 rounded-md text-sm">
      {currentIndex + 1} / {images.length}
    </div>
  );

  return (
    <main className="pt-20">
      {isGalleryOpen ? (
        <div className="fixed bottom-0 inset-0 bg-black z-50 flex flex-col group">
          <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,.45)] h-10 flex items-center shadow-md animate-slideDown opacity-1 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex justify-between items-center h-full">
              <button
                onClick={handleCloseGallery}
                className="cursor-pointer absolute top-2 right-4 z-50"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>
            </div>
          </nav>

          <ImageGallery
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
            onSlide={(index: number) => setCurrentIndex(index)}
            ref={galleryRef}
            items={images}
            startIndex={initialIndex}
            additionalClass="custom-gallery"
            showThumbnails={true}
            showNav={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets={false}
            showIndex={false}
            slideOnThumbnailOver={false}
            useBrowserFullscreen={false}
            renderCustomControls={renderCustomControls}
          />
        </div>
      ) : (
        <>
          <div className="mb-10">
            <h2 className="text-white text-6xl text-center">Portrait Gallery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-7">
            {images.map((image, index) => (
              <GalleryImageCard
                key={index}
                src={image.original}
                showMoreButton={false}
                title={image.title}
                priority={index < 3}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Single;
