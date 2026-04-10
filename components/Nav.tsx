'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-[100] bg-brand-cream border-b-4 border-dashed border-brand-green flex items-center justify-between flex-wrap gap-4 px-[5%] py-3">
      <Link href="/" className="shrink-0">
        <Image src="/logo.png" alt="Kidz Safari" width={140} height={60} priority className="h-[60px] w-auto" />
      </Link>
      <ul className="flex gap-1 list-none flex-wrap items-center">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-display font-medium text-base px-4 py-2 rounded-full text-brand-green-deep transition-all border-2 hover:bg-brand-yellow hover:border-brand-green-deep hover:-translate-y-0.5 ${
                  active ? 'bg-brand-yellow border-brand-green-deep' : 'border-transparent'
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href="/brochure.pdf"
            download
            className="font-display font-medium text-base px-4 py-2 rounded-full text-white bg-brand-red border-2 border-brand-green-deep transition-all hover:bg-brand-orange hover:-translate-y-0.5"
            style={{ boxShadow: '3px 3px 0 #0F3D18' }}
          >
            📥 Brochure
          </a>
        </li>
      </ul>
    </nav>
  );
}
