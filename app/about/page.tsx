import Image from 'next/image';
import Link from 'next/link';
import Floaties from '@/components/Floaties';

export default function AboutPage() {
  return (
    <>
      <header className="bg-brand-green text-brand-cream px-[5%] py-20 text-center border-b-[6px] border-brand-yellow relative">
        <Floaties variant="animals" />
        <div className="relative z-10">
          <h1 className="text-brand-yellow mb-4 text-5xl md:text-7xl">Our Story 🌳</h1>
          <p className="text-xl max-w-2xl mx-auto">Built by parents, for parents. And the tiny humans they love most.</p>
        </div>
      </header>

      <section className="relative px-[5%] py-20">
        <Floaties variant="toys" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <Image src="/about/classroom.jpeg" alt="Kidz Safari classroom group photo" width={800} height={600} className="rounded-fun border-[6px] border-brand-green-deep shadow-fun aspect-[4/3] object-cover" />
          <div>
            <h2 className="mb-4">Hello, we&apos;re Kidz Safari 👋</h2>
            <p className="mb-3 text-base">Tucked into a quiet corner of Greenfield Colony in Faridabad, Kidz Safari is a small, joyful preschool built around one simple idea: childhood should feel like childhood.</p>
            <p className="mb-3 text-base">We don&apos;t rush our little ones into worksheets and timetables. Instead, we give them stories, songs, mud, paint, wooden blocks, and the warm presence of teachers who truly see them.</p>
            <p className="text-base">Our home is bright, safe, and filled with the kind of toys that don&apos;t beep. Just the laughter does.</p>
          </div>
        </div>
      </section>

      <section className="relative bg-brand-green-soft border-y-4 border-dashed border-brand-green px-[5%] py-20">
        <Floaties variant="nature" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
            <h2 className="mb-4">The Waldorf Way 🌿</h2>
            <p className="mb-3 text-base">We follow the Waldorf holistic framework. An approach that believes every child is a whole person with a head, a heart, and a pair of busy little hands. All three deserve to be nurtured.</p>
            <p className="mb-3 text-base">That means rhythm, not rigidity. Imagination, not screens. Real materials. Real play. Real childhood.</p>
            <p className="text-base">Our days flow gently between active and quiet, indoor and outdoor, group and solo, mirroring the natural rhythms little bodies and minds thrive on.</p>
          </div>
          <Image src="/about/holi.jpeg" alt="Children celebrating Holi at Kidz Safari" width={800} height={600} className="rounded-fun border-[6px] border-brand-green-deep shadow-fun aspect-[4/3] object-cover" />
        </div>
      </section>

      <section className="bg-brand-green text-brand-cream px-[5%] py-12 text-center">
        <h2 className="text-brand-yellow mb-2">What we hold dear</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-8">
          {[
            { em: '💛', t: 'Warmth', d: 'Every child is greeted by name. Every day.' },
            { em: '🌻', t: 'Wonder', d: 'Curiosity is the most important subject we teach.' },
            { em: '🤝', t: 'Togetherness', d: 'Kindness, sharing, and friendship. The early lessons that last a lifetime.' },
            { em: '🌱', t: 'Growth', d: "Tiny steps. Giant leaps. At each child's own pace." },
          ].map((v, i) => (
            <div key={i} className="p-2">
              <span className="block text-4xl mb-2">{v.em}</span>
              <h4 className="font-display text-brand-yellow text-xl mb-2">{v.t}</h4>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-brand-yellow text-center px-[5%] py-16 border-y-4 border-dashed border-brand-green">
        <Floaties variant="party" />
        <div className="relative z-10">
          <h2 className="mb-4">Come say hi 🐯</h2>
          <p className="text-xl mb-8">The best way to know us is to visit us.</p>
          <Link href="/contact" className="btn btn-red">Book a Tour</Link>
        </div>
      </section>
    </>
  );
}
