'use client';

import { useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import GalleryImageCard from '~/components/elements/GalleryImageCard';
import { CloseIcon, FaChevronLeft, FaChevronRight } from '~/components/elements/Icons';

const Single = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // 👈 Track index manually
  const galleryRef = useRef<any>(null);

  const imageTitles = [
    'Bãi tắm Lương Ngọc Quyến',
    'Đảo Cô Tô',
    'Tuần Châu',
    'Vịnh Hạ Long',
    'Đảo Cát Bà',
    'Bãi Cháy',
    'Vịnh Bái Tử Long',
  ];

  const images = Array.from({ length: 63 }, (_, i) => ({
    original: `/images/album1/img_${i + 1}.webp`,
    thumbnail: `/images/album1/img_${i + 1}.webp`,
    title: imageTitles[i % imageTitles.length],
  }));

  const handleClick = (index: number) => {
    setInitialIndex(index);
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <main className="pt-20">
      {isGalleryOpen ? (
        <div className="fixed bottom-0 inset-0 bg-black z-50 flex flex-col group">
          <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,.45)] h-10 flex items-center shadow-md animate-slideDown opacity-1 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex justify-between items-center h-full">
              <button onClick={handleCloseGallery} className="cursor-pointer absolute top-2 right-4 z-50">
                <CloseIcon />
              </button>
            </div>
          </nav>

          <ImageGallery
            renderLeftNav={(onClick, disabled) => (
              <button
                type="button"
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-4 z-50 p-2 rounded-full text-white hover:bg-black"
                disabled={disabled}
                onClick={onClick}
              >
                <FaChevronLeft />
              </button>
            )}
            renderRightNav={(onClick, disabled) => (
              <button
                type="button"
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-4 z-50 p-2 rounded-full text-white hover:bg-black"
                disabled={disabled}
                onClick={onClick}
              >
                <FaChevronRight />
              </button>
            )}
            onSlide={(index) => setCurrentIndex(index)}
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
            renderCustomControls={() => (
              <div className="absolute top-1 left-10 z-100 transform -translate-x-1/2 text-gray-400 px-4 py-1 rounded-md text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          />
        </div>
      ) : (
        <>
          <div className="mb-10">
            <h2 className="text-white text-6xl text-center">Portrait Gallery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-7">
            {images.map((src, index) => (
              <GalleryImageCard
                key={index}
                src={src.original}
                showMoreButton={false}
                title={imageTitles[index % imageTitles.length]}
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
