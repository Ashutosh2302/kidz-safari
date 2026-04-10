import Image from 'next/image';
import Link from 'next/link';
import Floaties from '@/components/Floaties';

const PILLARS = [
  { em: '📖', t: 'Storytelling', d: 'Daily story time with puppets, voice, and imagination. No screens.' },
  { em: '🎵', t: 'Music & Movement', d: 'Songs, rhymes, dance, and circle games that build language and joy.' },
  { em: '🖌️', t: 'Creative Arts', d: 'Painting, modelling, drawing. With real beeswax, watercolour, and natural materials.' },
  { em: '🌳', t: 'Nature Play', d: 'Outdoor exploration, gardening, and weather-watching every single day.' },
  { em: '🧩', t: 'Practical Life', d: 'Pouring, sweeping, baking, tidying. Small jobs that build big confidence.' },
  { em: '💛', t: 'Social & Emotional', d: 'Naming feelings, taking turns, making friends. The most important learning of all.' },
];

const RHYTHM = [
  { time: '9:00 AM', activity: 'Welcome Circle', desc: 'Songs, greetings, and the day ahead.' },
  { time: '9:30 AM', activity: 'Free Play', desc: 'Dolls, blocks, dress-up, and pretend kitchens.' },
  { time: '10:30 AM', activity: 'Snack Time', desc: 'Healthy bites and quiet chats.' },
  { time: '11:00 AM', activity: 'Outdoor Play', desc: 'Garden adventures, sand, and sunshine.' },
  { time: '11:45 AM', activity: 'Story & Song', desc: 'A tale to take home in their hearts.' },
  { time: '12:30 PM', activity: 'Goodbye Circle', desc: 'Hugs, waves, and "see you tomorrow!"' },
];

export default function CurriculumPage() {
  return (
    <>
      <header className="bg-brand-green text-brand-cream px-[5%] py-20 text-center border-b-[6px] border-brand-yellow relative">
        <Floaties variant="books" />
        <div className="relative z-10">
          <h1 className="text-brand-yellow mb-4 text-5xl md:text-7xl">Our Curriculum 📚</h1>
          <p className="text-xl max-w-2xl mx-auto">Rooted in Waldorf. Wrapped in wonder. Built around your child.</p>
        </div>
      </header>

      <section className="relative px-[5%] py-20">
        <Floaties variant="toys" />
        <div className="relative z-10">
          <h2 className="section-title">The Six Pillars 🌟</h2>
          <p className="section-sub">Every day at Kidz Safari rests on six gentle, joyful foundations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {PILLARS.map((p) => (
              <div key={p.t} className="pillar">
                <div className="text-5xl mb-3">{p.em}</div>
                <h3 className="text-xl mb-2">{p.t}</h3>
                <p className="text-sm">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-brand-yellow-soft border-4 border-brand-green-deep rounded-fun p-10 shadow-fun">
            <h3 className="text-center mb-6 text-2xl">🕐 A Day in the Safari</h3>
            {RHYTHM.map((r, i) => (
              <div key={i} className={`grid grid-cols-[110px_1fr] gap-4 py-4 ${i < RHYTHM.length - 1 ? 'border-b-2 border-dashed border-brand-green' : ''}`}>
                <div className="font-display text-brand-red text-lg">{r.time}</div>
                <div><strong>{r.activity}</strong> — {r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-brand-green-soft px-[5%] py-20">
        <Floaties variant="nature" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <Image src="/images/less-worksheets.jpeg" alt="Children exploring and playing at Kidz Safari" width={1200} height={900} className="rounded-fun border-[6px] border-brand-green-deep shadow-fun aspect-[4/3] object-cover" />
          <div>
            <h2 className="mb-4">Less Worksheets. Lots of Wonder. ✨</h2>
            <p className="mb-3 text-base">At our school, we swap rigid desks and paper drills for a world of hands-on discovery and messy, joyful exploration. We believe that a child&apos;s natural curiosity is the best curriculum, which is why our days are filled with sensory play, outdoor adventures, and creative storytelling.</p>
            <p className="text-base">Instead of tracing lines, our students are building skyscrapers out of blocks and investigating the magic of the natural world. By prioritizing wonder over busywork, we nurture critical thinkers who aren&apos;t afraid to ask &quot;why&quot; and &quot;how.&quot; Here, learning isn&apos;t about finishing a page, it&apos;s about the spark of a new idea and the thrill of a shared discovery. We don&apos;t just teach children; we give them the space to unfold.</p>
          </div>
        </div>
      </section>

      <section className="relative bg-brand-yellow text-center px-[5%] py-16 border-y-4 border-dashed border-brand-green">
        <Floaties variant="party" />
        <div className="relative z-10">
          <h2 className="mb-4">See it for yourself 👀</h2>
          <p className="text-xl mb-8">Photos can only show so much. Come visit our little safari.</p>
          <Link href="/contact" className="btn btn-red">Book a Tour</Link>
        </div>
      </section>
    </>
  );
}
