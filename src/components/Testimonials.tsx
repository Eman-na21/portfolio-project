import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, isVisible } = useReveal();

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="testimonials"
      className="section-py bg-white relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-100/40 rounded-full blur-[120px]" />

      <div ref={ref} className={`container-px mx-auto max-w-7xl relative z-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow mb-4">Client Love</p>
          <h2 className="heading-lg text-charcoal-950 text-balance">
            What clients <span className="gold-gradient-text">say about working with me</span>
          </h2>
        </div>

        {/* Featured slider */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative rounded-2xl bg-champagne-50 border border-charcoal-100 p-8 md:p-12 overflow-hidden">
            <Quote className="absolute top-6 right-6 h-16 w-16 text-gold-200" />

            <div key={current} className="animate-fade-in">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed font-heading italic mb-6">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-900 text-gold-400 font-semibold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900">{testimonials[current].name}</p>
                  <p className="text-sm text-charcoal-500">{testimonials[current].role}</p>
                </div>
              </div>
            </div>

            {/* Nav buttons */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-600 hover:border-gold-500 hover:text-gold-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-600 hover:border-gold-500 hover:text-gold-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-gold-500' : 'w-2 bg-charcoal-200 hover:bg-charcoal-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
