import { useState, useMemo } from 'react';
import { X, Calendar, User } from 'lucide-react';
import { portfolioItems, type Category } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';

const categories: (Category | 'All')[] = [
  'All',
  'Logo Design',
  'Wedding Cards',
  'Business Cards',
  'Banners',
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { ref, isVisible } = useReveal();

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem = portfolioItems.find((item) => item.id === selectedId);

  return (
    <section id="portfolio" className="section-py bg-white relative overflow-hidden">
      <div ref={ref} className={`container-px mx-auto max-w-7xl reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="heading-lg text-charcoal-950 text-balance">
           My Design  <span className="gold-gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-charcoal-500 text-lg">
            Explore logos, wedding invitations, business cards, and banners.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-charcoal-900 text-champagne-50 shadow-md'
                  : 'bg-champagne-100 text-charcoal-600 hover:bg-champagne-200 hover:text-charcoal-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal-100 text-left animate-scale-in"
              style={{
                animationDelay: `${i * 60}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-gold-500/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-charcoal-950">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-champagne-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Tap to view details
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedId(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm" />

          {/* Modal content */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-950/60 text-white backdrop-blur-sm hover:bg-charcoal-950 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] bg-charcoal-100">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-6 md:p-8">
              <span className="inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700 mb-4">
                {selectedItem.category}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal-950 mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap gap-6 pt-4 border-t border-charcoal-100">
                <div className="flex items-center gap-2 text-sm text-charcoal-500">
                  <User className="h-4 w-4 text-gold-500" />
                  <span className="font-medium text-charcoal-700">{selectedItem.client}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-500">
                  <Calendar className="h-4 w-4 text-gold-500" />
                  <span className="font-medium text-charcoal-700">{selectedItem.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
