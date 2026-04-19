import type { Metadata } from 'next';
import Image from 'next/image';
import Floaties from '@/components/Floaties';

export const metadata: Metadata = {
  title: 'Gallery | Photos of Indoor Activities, Outdoor Play, Sports Day & Annual Day',
  description: 'See Kidz Safari preschool Faridabad in action. Browse photos of indoor activities, outdoor play, sports day celebrations, and annual day performances. Real moments from our Greenfield Colony campus.',
  alternates: { canonical: 'https://kidzsafari.in/gallery' },
};

type Category = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  images: string[];
  bg: string;
  variant: 'toys' | 'books' | 'nature' | 'animals' | 'party';
};

const CATEGORIES: Category[] = [
  {
    id: 'indoor',
    title: 'Indoor Activities',
    emoji: '🎨',
    description: 'Painting, puppet shows, story time, building blocks, and a hundred quiet adventures.',
    images: [
      '/gallery/indoor/indoor-1.jpg',
      '/gallery/indoor/indoor-2.jpg',
      '/gallery/indoor/indoor-3.jpg',
      '/gallery/indoor/indoor-4.jpg',
      '/gallery/indoor/indoor-5.jpg',
      '/gallery/indoor/indoor-6.jpg',
    ],
    bg: 'bg-brand-cream',
    variant: 'toys',
  },
  {
    id: 'outdoor',
    title: 'Outdoor Activities',
    emoji: '🌳',
    description: 'Garden play, sandpits, nature walks, and the simple joy of muddy hands under the open sky.',
    images: [
      '/gallery/outdoor/outdoor1.jpeg',
      '/gallery/outdoor/outdoor2.jpeg',
      '/gallery/outdoor/outdoor3.jpeg',
      '/gallery/outdoor/outdoor4.jpeg',
      '/gallery/outdoor/outdoor5.jpeg',
      '/gallery/outdoor/outdoor6.jpeg',
    ],
    bg: 'bg-brand-green-soft',
    variant: 'nature',
  },
  {
    id: 'sports',
    title: 'Sports Days',
    emoji: '🏆',
    description: 'Tiny athletes, giant smiles, and proud parents cheering from the sidelines.',
    images: [
      '/gallery/sports/sports1.jpeg',
      '/gallery/sports/sports2.jpeg',
      '/gallery/sports/sports3.jpeg',
      '/gallery/sports/sports4.jpeg',
      '/gallery/sports/sports5.jpeg',
      '/gallery/sports/sports6.jpeg',
    ],
    bg: 'bg-brand-yellow-soft',
    variant: 'animals',
  },
  {
    id: 'annual',
    title: 'Annual Days',
    emoji: '🎭',
    description: 'Costumes, music, stage lights, and the moment your little one becomes the star of the show.',
    images: [
      '/gallery/annual/annual1.jpg',
      '/gallery/annual/annual2.jpg',
      '/gallery/annual/annual3.jpg',
      '/gallery/annual/annual4.jpg',
      '/gallery/annual/annual5.jpg',
      '/gallery/annual/annual6.jpg',
    ],
    bg: 'bg-brand-cream',
    variant: 'party',
  },
];

export default function GalleryPage() {
  return (
    <>
      <header className="bg-brand-green text-brand-cream px-[5%] py-20 text-center border-b-[6px] border-brand-yellow relative">
        <Floaties variant="party" />
        <div className="relative z-10">
          <h1 className="text-brand-yellow mb-4 text-5xl md:text-7xl">Our Gallery 📸</h1>
          <p className="text-xl max-w-2xl mx-auto">Little moments. Big memories. A peek into life at Kidz Safari.</p>
        </div>
      </header>

      {/* Quick category jump links */}
      <section className="bg-brand-cream border-b-4 border-dashed border-brand-green px-[5%] py-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="font-display text-base px-5 py-2 rounded-full bg-brand-yellow border-2 border-brand-green-deep text-brand-green-deep hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all"
              style={{ boxShadow: '3px 3px 0 #0F3D18' }}
            >
              {c.emoji} {c.title}
            </a>
          ))}
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`relative ${cat.bg} px-[5%] py-20 border-b-4 border-dashed border-brand-green scroll-mt-24`}
        >
          <Floaties variant={cat.variant} />
          <div className="relative z-10">
            <h2 className="section-title text-4xl md:text-5xl">
              {cat.emoji} {cat.title}
            </h2>
            <p className="section-sub">{cat.description}</p>
            <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cat.images.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${cat.title} at Kidz Safari`}
                  width={600}
                  height={600}
                  unoptimized={src.startsWith('http')}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="relative bg-brand-yellow text-center px-[5%] py-16 border-y-4 border-dashed border-brand-green">
        <Floaties variant="party" />
        <div className="relative z-10">
          <h2 className="mb-4">Want to see it in person? 👀</h2>
          <p className="text-xl mb-8">Photos can only show so much. Come visit our little safari.</p>
          <a href="/contact" className="btn btn-red">Book a Tour</a>
        </div>
      </section>
    </>
  );
}
