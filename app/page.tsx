import GalleryImageCard from '~/components/elements/GalleryImageCard';

const Home = () => {
  const images = Array.from({ length: 7 }, (_, i) => `/images/img_${i + 1}.jpg`);
  const imageTitles = [
    'Portrait',
    'Architecture',
    'Nature',
    'Food',
    'Travel',
    'Art',
    'Sports'
  ];

  return (
    <main>
      <section aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Image Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {images.map((src, index) => (
            <GalleryImageCard
              key={index}
              src={src}
              title={imageTitles[index]}
              priority={index < 3}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
