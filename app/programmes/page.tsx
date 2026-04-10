import Image from 'next/image';
import Floaties from '@/components/Floaties';

const PROGRAMMES = [
  { age: 'Ages 2 – 3', t: '🐣 Pre-Nursery', d: 'A gentle first step away from home. Songs, stories, sensory play, and lots of warm laps.', hours: '9:30 AM – 12:45 PM', seed: 'prenursery' },
  { age: 'Ages 3 – 4', t: '🦊 Nursery', d: 'Free play, circle time, art, music, and outdoor adventures. Little friendships start here.', hours: '9:30 AM – 12:45 PM', seed: 'nursery' },
  { age: 'Ages 4 – 5', t: '🦁 L.KG', d: 'Lower Kindergarten. Early literacy, numeracy, and storytelling, all woven into joyful play.', hours: '9:30 AM – 12:45 PM', seed: 'lkg' },
  { age: 'Ages 5 – 6', t: '🦒 U.KG', d: 'Upper Kindergarten. Confident readers and curious thinkers, beautifully ready for big school.', hours: '9:30 AM – 12:45 PM', seed: 'ukg' },
  { age: 'Ages 2 – 12', t: '🧸 Day Care', d: 'Extended care for working parents. Your little one stays safe, happy, and engaged from morning to evening.', hours: '8:00 AM – 7:00 PM (Mon – Sat)', seed: 'daycare' },
  { age: 'Classes 1 – 5', t: '📚 Evening Tuition', d: 'After-school tuition classes for primary school children. Homework help, concept clarity, and confident learning.', hours: '4:00 PM – 7:00 PM', seed: 'tuition' },
];

export default function ProgrammesPage() {
  return (
    <>
      <header className="bg-brand-green text-brand-cream px-[5%] py-20 text-center border-b-[6px] border-brand-yellow relative">
        <Floaties variant="animals" />
        <div className="relative z-10">
          <h1 className="text-brand-yellow mb-4 text-5xl md:text-7xl">Our Programmes 🎒</h1>
          <p className="text-xl max-w-2xl mx-auto">Six little adventures, each crafted for a different stage of growing up.</p>
        </div>
      </header>

      <section className="relative px-[5%] py-20">
        <Floaties variant="toys" />
        <div className="relative z-10">
          <div className="programs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROGRAMMES.map((p) => (
              <div key={p.t} className="program-card">
                <Image src={`/programmes/${p.seed}.png`} alt={p.t} width={800} height={500} className="aspect-[16/10] object-cover border-b-4 border-brand-green-deep" />
                <div className="p-7">
                  <span className="program-age">{p.age}</span>
                  <h3 className="text-2xl mb-2">{p.t}</h3>
                  <p>{p.d}</p>
                  <p className="mt-3 text-sm text-brand-paw"><strong>Hours:</strong> {p.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-brand-green-soft border-y-4 border-dashed border-brand-green px-[5%] py-20">
        <Floaties variant="services" />
        <div className="relative z-10">
          <h2 className="section-title">What&apos;s included in every programme</h2>
          <p className="section-sub">Because the little things make the biggest difference.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { em: '🍎', t: 'Healthy Snacks', d: 'Nutritious, home-style snacks freshly prepared each day.' },
              { em: '🎭', t: 'Music & Drama', d: 'Weekly sessions to spark creativity and confidence.' },
              { em: '🌻', t: 'Garden Time', d: 'Daily outdoor play and seasonal gardening activities.' },
              { em: '🎨', t: 'Art & Craft', d: 'Open-ended art with real, natural materials.' },
            ].map((c, i) => (
              <div key={i} className="feature-card">
                <span className="block text-5xl mb-4">{c.em}</span>
                <h3 className="text-xl mb-2">{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-brand-yellow text-center px-[5%] py-16 border-y-4 border-dashed border-brand-green">
        <Floaties variant="party" />
        <div className="relative z-10">
          <h2 className="mb-4">Want all the details? 📋</h2>
          <p className="text-xl mb-8">Our brochure has fees, timings, and everything in between.</p>
          <a href="/brochure.pdf" download className="btn btn-red">📥 Download Brochure</a>
        </div>
      </section>
    </>
  );
}
