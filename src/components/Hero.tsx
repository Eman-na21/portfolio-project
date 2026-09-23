import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-champagne-50" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-200/30 rounded-full blur-[120px] animate-shimmer" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-champagne-300/40 rounded-full blur-[100px] animate-shimmer" />

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 right-[8%] w-20 h-20 rounded-2xl border border-gold-300/40 rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 right-[20%] w-14 h-14 rounded-full border border-charcoal-200 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-[5%] w-10 h-10 rounded-full bg-gold-400/20 animate-float hidden lg:block" style={{ animationDelay: '1s' }} />

      <div className="container-px mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-gold-50/80 px-4 py-2 mb-8 animate-fade-down">
            
            
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-charcoal-950 text-balance animate-fade-up">
            Creative Graphic Designer
            <span className="block mt-2">
               <span className="gold-gradient-text"></span> 
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl text-balance animate-fade-up"
            style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
          >
            I craft distinctive logos, refined brand identities, elegant wedding
            stationery, and high-impact marketing banners — blending typography,
            color, and detail into visual stories that resonate.
          </p>

          {/* CTA buttons */}
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <button onClick={() => scrollTo('#portfolio')} className="btn-gold">
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-outline">
              Work With Me
            </button>
          </div>

          {/* Trust row */}
          <div
            className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up"
            style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-sm text-charcoal-500">
              <span className="font-semibold text-charcoal-700">20+ happy clients</span>{' '}
              across 2 years of design
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-charcoal-400">
        <span className="text-xs font-medium tracking-widest uppercase"></span>
        <div className="w-px h-12 bg-gradient-to-b from-charcoal-300 to-transparent" />
      </div>
    </section>
  );
}
