import type { Metadata } from 'next';
import Floaties from '@/components/Floaties';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Visit, Call or Enquire About Admissions',
  description: 'Contact Kidz Safari preschool in Greenfield Colony, Faridabad. Address: B 292, Ground Floor Back, Greenfield Colony, Faridabad 121003. Phone: +91 97113 33568. Email: hello@kidzsafari.in. School hours, day care hours, and office hours listed. Book a tour today.',
  alternates: { canonical: 'https://kidzsafari.in/contact' },
};

export default function ContactPage() {
  return (
    <>
      <header className="bg-brand-green text-brand-cream px-[5%] py-20 text-center border-b-[6px] border-brand-yellow relative">
        <Floaties variant="party" />
        <div className="relative z-10">
          <h1 className="text-brand-yellow mb-4 text-5xl md:text-7xl">Let&apos;s Talk 💌</h1>
          <p className="text-xl max-w-2xl mx-auto">Questions? Tour requests? Or just a hello. We&apos;d love to hear from you.</p>
        </div>
      </header>

      <section className="relative px-[5%] py-20">
        <Floaties variant="toys" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-fun border-4 border-brand-green-deep shadow-fun">
            <h3 className="text-2xl mb-6">Find us 📍</h3>
            <ContactItem icon="🏠" label="Address">
              B-292, Ground Floor Back<br />
              Greenfield Colony<br />
              Faridabad — 121003
            </ContactItem>
            <ContactItem icon="📞" label="Phone">
              <a href="tel:+919711333568" className="text-brand-green hover:underline">+91 97113 33568</a>
            </ContactItem>
            <ContactItem icon="✉️" label="Email">
              <a href="mailto:hello@kidzsafari.in" className="text-brand-green hover:underline">hello@kidzsafari.in</a>
            </ContactItem>
            <ContactItem icon="🏫" label="School Hours">
              Monday – Friday<br />
              9:30 AM – 12:45 PM
            </ContactItem>
            <ContactItem icon="🧸" label="Day Care Hours">
              Monday – Saturday<br />
              8:00 AM – 7:00 PM
            </ContactItem>
            <ContactItem icon="🕐" label="Office Hours">
              Monday – Saturday<br />
              8:00 AM – 8:00 PM
            </ContactItem>
            <a href="/brochure.pdf" download className="btn btn-red mt-4">📥 Download Brochure</a>
          </div>

          <div className="bg-white p-10 rounded-fun border-4 border-brand-green-deep shadow-fun">
            <h3 className="text-2xl mb-6">Send us a note ✏️</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 mb-5 items-start">
      <div className="text-2xl bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center border-2 border-brand-green-deep shrink-0">
        {icon}
      </div>
      <div>
        <strong className="block font-display text-brand-green-deep">{label}</strong>
        {children}
      </div>
    </div>
  );
}
