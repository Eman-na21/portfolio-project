import { useEffect, useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#calculator' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-champagne-50/90 backdrop-blur-md shadow-sm border-b border-charcoal-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2.5 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal-900 text-gold-400 transition-transform group-hover:scale-110">
            <Palette className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl font-bold text-charcoal-900">
            Afrah<span className="text-gold-600">.</span>Welyu
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="btn-ghost"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => handleNavClick('#contact')} className="btn-gold">
            Work With Me
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-900 hover:bg-charcoal-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-champagne-50 border-t border-charcoal-100 animate-fade-down">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-lg text-charcoal-700 font-medium hover:bg-charcoal-100 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-gold mt-2 mx-4"
            >
              Work With Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
