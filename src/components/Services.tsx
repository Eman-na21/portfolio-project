import { Palette, Heart, CreditCard, Megaphone, ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Heart,
  CreditCard,
  Megaphone,
};

export default function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="services" className="section-py bg-charcoal-950 relative overflow-hidden border-t border-charcoal-800/50">
      {/* Subtle glow layer */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[120px]" />

      <div ref={ref} className={`container-px mx-auto max-w-7xl relative z-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="eyebrow mb-4">What I Do</p>
          <h2 className="heading-lg text-charcoal-50 text-balance">
            Services crafted to make
            <span className="gold-gradient-text"> your brand unforgettable</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Palette;
            return (
              <div
                key={service.title}
                className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-7 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/5 hover:border-gold-500/40"
                style={{
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-charcoal-950 border border-charcoal-800 text-gold-400 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-charcoal-950 group-hover:border-gold-500 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <ArrowUpRight className="absolute -top-1 -right-1 h-5 w-5 text-charcoal-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-charcoal-50 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-charcoal-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-charcoal-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}