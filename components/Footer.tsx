import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-green-deep text-brand-cream px-[5%] pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 max-w-6xl mx-auto mb-8">
        <div className="text-justify">
          <h4 className="text-brand-yellow font-display mb-4 text-xl">Kidz Safari 🦒</h4>
          <p className="mb-3">Tiny steps to giant leaps. A Waldorf-inspired preschool for children ages 2 to 6 in Greenfield Colony, Faridabad.</p>
          <p className="mb-3">For over 15 years, we have been a second home to little learners. A place where curiosity is celebrated, kindness is taught, and childhood is protected.</p>
          <p className="mb-3">Our days are filled with stories, songs, art, outdoor play, and warm hugs. No screens. No worksheets. Just real, joyful childhood.</p>
          <p>💛 Built by parents, for parents. And the tiny humans they love most.</p>
        </div>
        <div>
          <h4 className="text-brand-yellow font-display mb-4 text-xl">Explore</h4>
          <Link href="/" className="block py-1 text-brand-cream hover:text-brand-yellow">Home</Link>
          <Link href="/about" className="block py-1 text-brand-cream hover:text-brand-yellow">About</Link>
          <Link href="/programmes" className="block py-1 text-brand-cream hover:text-brand-yellow">Programmes</Link>
          <Link href="/curriculum" className="block py-1 text-brand-cream hover:text-brand-yellow">Curriculum</Link>
          <Link href="/gallery" className="block py-1 text-brand-cream hover:text-brand-yellow">Gallery</Link>
          <Link href="/contact" className="block py-1 text-brand-cream hover:text-brand-yellow">Contact</Link>
        </div>
        <div>
          <h4 className="text-brand-yellow font-display mb-4 text-xl">Get in Touch</h4>
          <p className="my-2">📍 B-292, Ground Floor Back<br />Greenfield Colony<br />Faridabad — 121003</p>
          <p className="my-2">📞 <a href="tel:+919711333568" className="text-brand-cream hover:text-brand-yellow">+91 97113 33568</a></p>
          <p className="my-2">✉️ <a href="mailto:hello@kidzsafari.in" className="text-brand-cream hover:text-brand-yellow">hello@kidzsafari.in</a></p>
          <div className="socials flex gap-3 mt-4">
            <a href="https://instagram.com/kidzsafari" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9S7.1 14.7 7.1 12 9.3 7.1 12 7.1zm0 8.1c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2-3.2 1.4-3.2 3.2 1.4 3.2 3.2 3.2zm6.3-8.3c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1.5-1.1 1.1-1.1 1.1.5 1.1 1.1z" /></svg>
            </a>
            <a href="https://www.facebook.com/anjali.bansal.9674?mibextid=wwXIfr&rdid=TB8x3s8BlioKf1de&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18VkgTAeam%2F%3Fmibextid%3DwwXIfr%26ref%3D1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-white/15 text-sm max-w-6xl mx-auto">
        © 2026 Kidz Safari Preschool · Tiny steps to giant leaps
      </div>
    </footer>
  );
}
