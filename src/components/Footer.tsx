import { Palette, Heart, Instagram, Dribbble } from 'lucide-react';
import { contactLinks } from '@/lib/data';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#calculator' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-champagne-50 pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500 text-charcoal-950">
                <Palette className="h-5 w-5" />
              </span>
              <span className="font-heading text-xl font-bold">
                Afrah<span className="text-gold-400">.</span>Welyu
              </span>
            </button>
            <p className="text-sm text-charcoal-400 leading-relaxed max-w-xs">
              Creative graphic designer.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Explore
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors md:mx-auto"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Connect
            </p>
            <div className="flex gap-3 md:justify-end">
              <a
                href={contactLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal-900 text-charcoal-300 transition-all hover:bg-gold-500 hover:text-charcoal-950"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contactLinks.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal-900 text-charcoal-300 transition-all hover:bg-gold-500 hover:text-charcoal-950"
                aria-label="Dribbble"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${contactLinks.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal-900 text-charcoal-300 transition-all hover:bg-gold-500 hover:text-charcoal-950 font-heading text-sm font-bold"
                aria-label="Email"
              >
                @
              </a>
            </div>
            <p className="text-sm text-charcoal-400 mt-4">{contactLinks.email}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            © {new Date().getFullYear()} Developed by Eman tech solutions . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
