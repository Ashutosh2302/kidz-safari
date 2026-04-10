import Image from 'next/image';
import Link from 'next/link';
import Floaties from '@/components/Floaties';

const FAQS = [
  { q: 'What ages do you accept?', a: 'We welcome children between 2 and 6 years old, across our Pre-Nursery, Nursery, L.KG, and U.KG programmes.' },
  { q: 'What are your school hours?', a: 'School runs Monday to Friday, 9:30 AM to 12:45 PM. Day care is available Monday to Saturday from 8:00 AM to 7:00 PM, and our office is open Monday to Saturday, 8:00 AM to 8:00 PM.' },
  { q: 'What is the Waldorf approach?', a: 'Waldorf is a play-based, holistic philosophy that nurtures the whole child. Head, heart, and hands. No worksheets or screens, just meaningful activities, stories, art, and outdoor play that match how young children naturally learn.' },
  { q: 'Do you provide meals and snacks?', a: 'Yes! We serve freshly cooked, nutritious lunches and healthy snacks every day. If your child has allergies or special dietary needs, just let us know.' },
  { q: 'Is pickup and drop service available?', a: 'Absolutely. We offer safe door-to-door transport with trained staff and child-friendly vehicles. Coverage depends on your location. Please ask us for details.' },
  { q: 'What is the teacher-to-child ratio?', a: 'We deliberately keep classes small so every child gets warm, individual attention. Our ratios are well below the standard for Indian preschools. Visit us and see for yourself.' },
  { q: 'How do you handle safety and security?', a: "CCTV across the premises, child-proofed spaces, trained staff with first-aid certification, secure entry and exit, and verified pickup procedures. Your child's safety is non-negotiable for us." },
  { q: 'How can I enroll my child?', a: "The easiest first step is to book a visit. Come tour the school, meet the teachers, and see if it feels right. From there, we'll guide you through the simple admission process." },
];

const FLOW_STEPS = [
  { num: 1, em: '👀', title: 'Observe', desc: 'Children watch, wonder, and explore the world around them.' },
  { num: 2, em: '🎭', title: 'Imitate', desc: 'They copy real-life activities. Pouring, sweeping, baking, sharing.' },
  { num: 3, em: '💡', title: 'Imagine', desc: 'Stories, puppets, and free play spark their growing imagination.' },
  { num: 4, em: '🎨', title: 'Create', desc: 'Hands-on art, music, and crafts bring their ideas to life.' },
  { num: 5, em: '🌱', title: 'Grow', desc: 'Confidence, kindness, and curiosity blossom. Tiny steps to giant leaps.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center px-[5%] py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-[300px] h-[300px] bg-brand-yellow rounded-full opacity-40 z-0" />
        <div className="relative z-10">
          <span className="inline-block font-display bg-brand-green text-brand-yellow px-5 py-1.5 rounded-full text-sm mb-5 -rotate-2">🦁 Ages 2 to 6</span>
          <h1 className="text-5xl md:text-6xl mb-5">Where little explorers take their <span className="highlight">first big leaps</span></h1>
          <p className="text-xl mb-8 max-w-lg">Rooted in play. Guided by curiosity. We celebrate the magic of early childhood, letting every child blossom at their own natural timeline.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="/brochure.pdf" download className="btn btn-red">📥 Download Brochure</a>
            <Link href="/contact" className="btn">Visit Us</Link>
          </div>
        </div>
        <div className="relative z-10">
          <Image
            src="/hero.png"
            alt="Children at Kidz Safari"
            width={800}
            height={600}
            className="rounded-fun border-[6px] border-brand-green-deep shadow-fun rotate-2 aspect-[4/3] object-cover"
          />
          <div className="hero-sticker">Tiny steps<br />to GIANT<br />leaps!</div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-red border-y-4 border-brand-green-deep px-[5%] py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { em: '🏆', num: '15+', label: 'Years of Experience' },
            { em: '👶', num: '1000+', label: 'Happy Little Learners' },
            { em: '💛', num: '100%', label: 'Love & Care' },
          ].map((s, i) => (
            <div key={i} className="text-brand-cream p-2">
              <span className="block text-2xl mb-1">{s.em}</span>
              <span className="block font-display text-5xl md:text-6xl text-brand-yellow leading-none" style={{ textShadow: '3px 3px 0 #0F3D18' }}>{s.num}</span>
              <span className="block font-display text-lg mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="relative bg-brand-green-soft border-y-4 border-dashed border-brand-green px-[5%] py-20">
        <Floaties variant="animals" />
        <div className="relative z-10">
          <h2 className="section-title">Why Kidz Safari?</h2>
          <p className="section-sub">Four little reasons (and a hundred big ones) parents choose us</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { em: '🌱', t: 'Waldorf Holistic', d: 'Our rhythm honors the whole child, ensuring they grow into confident creators, deep thinkers, and kind-hearted friends.' },
              { em: '🎨', t: 'Play-Based Learning', d: 'Songs, stories, and sun-drenched gardens. Childhood, exactly as it was meant to be.' },
              { em: '🧸', t: 'Tiny Class Sizes', d: 'Low child-to-teacher ratios mean every little voice gets heard and every hug gets returned.' },
              { em: '🛡️', t: 'Safe & Loved', d: 'CCTV, trained staff, child-proofed spaces, and a whole lot of warmth in every corner.' },
            ].map((c, i) => (
              <div key={i} className="feature-card text-center">
                <span className="block text-5xl mb-4">{c.em}</span>
                <h3 className="text-xl mb-2">{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative px-[5%] py-20">
        <Floaties variant="nature" />
        <div className="relative z-10">
          <h2 className="section-title">A peek into our days</h2>
          <p className="section-sub">Painting, planting, pretending, playing.</p>
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { src: '/peek/painting.jpeg', alt: 'Children painting at Kidz Safari' },
              { src: '/peek/planting.jpeg', alt: 'Child planting at Kidz Safari' },
              { src: '/peek/pretending.jpeg', alt: 'Children dressed up at Kidz Safari' },
              { src: '/peek/playing.jpeg', alt: 'Children playing games at Kidz Safari' },
            ].map((img) => (
              <Image key={img.src} src={img.src} alt={img.alt} width={500} height={500} />
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="relative px-[5%] py-20 border-y-4 border-dashed border-brand-green" style={{ background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF1C2 100%)' }}>
        <Floaties variant="services" />
        <div className="relative z-10">
          <h2 className="section-title">What We Offer 🎒</h2>
          <p className="section-sub">Four little services. One big, joyful day for your child.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { em: '🏫', t: 'Pre-School Care', d: 'A nurturing Waldorf-inspired learning environment where 2 to 6-year-olds grow at their own joyful pace.', tag: 'Ages 2 – 6' },
              { em: '🧸', t: 'Day Care', d: 'Extended hours for working parents. Your little one stays safe, happy, and well-fed with healthy snacks throughout the day.', tag: 'Snacks Included' },
              { em: '🍱', t: 'Fresh Food for Lunch', d: 'Wholesome, freshly cooked meals every day. Nutritious, home-style bites that little tummies actually love.', tag: 'Hot & Healthy' },
              { em: '🚐', t: 'Pickup & Drop', d: 'Safe, reliable transport with trained staff. Your mornings and evenings stay completely stress-free.', tag: 'Door to Door' },
              { em: '📚', t: 'Evening Tuition', d: 'After-school tuition classes for students from 1st to 6th standard. Homework help, concept clarity, and confident learners.', tag: 'Classes 1 – 6' },
            ].map((o, i) => (
              <div key={i} className="offer">
                <div className="offer-badge">{o.em}</div>
                <h3 className="text-2xl mb-2 relative">{o.t}</h3>
                <p className="relative text-brand-paw text-justify hyphens-auto">{o.d}</p>
                <span className="inline-block mt-4 font-display bg-brand-green-soft text-brand-green-deep px-4 py-1 rounded-full text-sm border-2 border-brand-green">{o.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING METHOD */}
      <section className="relative bg-brand-green-deep text-brand-cream border-y-4 border-dashed border-brand-yellow px-[5%] py-20">
        <Floaties variant="books" />
        <div className="relative z-10">
          <h2 className="section-title text-brand-yellow">Our Teaching Method 🌟</h2>
          <p className="section-sub text-brand-yellow-soft">A gentle, five-step Waldorf rhythm that turns every day into an adventure.</p>
          <div className="flow">
            {FLOW_STEPS.map((s) => (
              <div key={s.num} className="flow-step">
                <div className="flow-circle">
                  <span className="num">{s.num}</span>
                  <span className="em">{s.em}</span>
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-brand-cream px-[5%] py-20">
        <Floaties variant="faq" />
        <div className="relative z-10">
          <h2 className="section-title">Parents Often Ask 💭</h2>
          <p className="section-sub">The questions we hear most.</p>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {FAQS.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE TO KIDS */}
      <section className="relative bg-brand-cream px-[5%] py-24 overflow-hidden">
        <div className="tricolor-top" />
        <div className="tricolor-bottom" />
        <Floaties variant="india" />
        <div className="relative z-10">
          <div className="letter">
            <div className="text-center md:sticky md:top-24">
              <Image
                src="/principal.png"
                alt="Mrs. Anjali Bansal"
                width={220}
                height={220}
                className="w-[220px] h-[220px] rounded-full object-cover border-[6px] border-brand-yellow mx-auto mb-4"
                style={{ boxShadow: '6px 6px 0 #0F3D18' }}
              />
              <div className="font-display text-xl text-brand-green-deep">Mrs. Anjali Bansal</div>
            </div>
            <div>
              <span className="block font-display text-brand-red text-base tracking-widest uppercase mb-2">A Message For Our Little Ones</span>
              <h2 className="text-3xl md:text-4xl mb-6 text-left">To Our <span className="accent">Brave Little Explorers</span> 🌟</h2>
              <p className="text-base leading-relaxed mb-4">Hello, my dear little friend. I want you to know something important. Listen close.</p>
              <p className="text-base leading-relaxed mb-4">You are loved. Exactly as you are. Be curious, ask the silly questions and the big ones, get a little muddy, and try the things that feel too hard. We&apos;ll be right here.</p>
              <p className="text-base leading-relaxed mb-4">You are braver than you think and kinder than you know. Tiny steps today. Giant leaps tomorrow. We believe in you. Always. 💛</p>
              <div className="mt-6 font-display text-brand-green-deep text-xl">
                With all my love,<br />
                Mrs. Anjali Bansal 🦒
                <span className="block text-sm text-brand-paw mt-1 italic font-body">Founder &amp; Principal, Kidz Safari</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-yellow text-center px-[5%] py-16 border-y-4 border-dashed border-brand-green">
        <Floaties variant="party" />
        <div className="relative z-10">
          <h2 className="mb-4">Ready to start the safari? 🐘</h2>
          <p className="text-xl mb-8">Download our brochure or book a tour. We&apos;d love to meet your little one.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/brochure.pdf" download className="btn btn-red">📥 Download Brochure</a>
            <Link href="/contact" className="btn btn-blue">Book a Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
