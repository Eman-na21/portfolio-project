import { stats } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="section-py bg-champagne-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold-100/30 rounded-full blur-[100px]" />

      <div ref={ref} className={`container-px mx-auto max-w-7xl relative z-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal-100">
              <img
                src="portfolio/afuti.jpg"
                alt="Afrah Welyu"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl bg-white shadow-xl border border-charcoal-100 p-5 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-600 font-heading text-lg font-bold">
                  AW
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal-900">Afrah Welyu</p>
                  <p className="text-xs text-charcoal-500">Graphic Designer</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-gold-300/50 -z-10 hidden md:block" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">About Me</p>
            <h2 className="heading-lg text-charcoal-950 text-balance mb-6">
             Design is my way of  telling <span className="gold-gradient-text">your stories </span>
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                I'm Afrah Welyu a graphic designer with two years of turning ideas into

                visual identities that people remember.My passion for design, color, 
                and tiny details is what makes my work apart.
              </p>
              <p>
              Whether it's a logo, a wedding invitation, or a scroll-stopping banner, 
                I believe great design just feels right.I listen to your vision and audience, then turn it into beautiful,
                 purposeful design.

              </p>
              <p>
              
                 አፍራህ ወልዩ እባላለሁ፤ ላለፉት ሁለት ዓመታት ሃሳቦችን የማይረሱ visual identities በመስራት ላይ የምገኝ የግራፊክ ዲዛይነር ነኝ። 
                 ለዲዛይን፣ ለቀለም እና ለአነስተኛ ዝርዝሮች ያለኝ ፍቅር ስራዎቼን ልዩ ያደርጋቸዋል።
                 የእርስዎን ራዕይ እና ታዳሚ አይቼ ፣ ወደ ውብና ዓላማ ተኮር ዲዛይን እለውጠዋለሁ።"
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-charcoal-200">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center sm:text-left animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                >
                  <p className="font-heading text-3xl md:text-4xl font-bold gold-gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
