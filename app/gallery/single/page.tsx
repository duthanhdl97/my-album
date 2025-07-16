'use client';

import GalleryImageCard from '~/components/elements/GalleryImageCard';

const Single = () => {
  const images = Array.from({ length: 7 }, (_, i) => `/images/img_${i + 1}.jpg`);
  const imageTitles = ['Portrait', 'Architecture', 'Nature', 'Food', 'Travel', 'Art', 'Sports'];

  const handleClick = () => {
    return;
  };

  return (
    <main className="pt-20">
      <div className="mb-10">
        <h2 className="text-white text-6xl text-center">Portrait Gallery</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-7">
        {images.map((src, index) => (
          <GalleryImageCard
            key={index}
            src={src}
            showMoreButton={false}
            title={imageTitles[index]}
            priority={index < 3}
            onClick={handleClick}
          />
        ))}
      </div>
    </main>
  );
};

export default Single;
