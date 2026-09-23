import { useState } from 'react';
import { Check, Plus, Minus, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { calculatorOptions, contactLinks } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';

export default function Calculator() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['logo-premium']));
  const [rushDelivery, setRushDelivery] = useState(false);
  const { ref, isVisible } = useReveal();

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedItems = calculatorOptions.filter((opt) => selected.has(opt.id));
  const baseTotal = selectedItems.reduce((sum, opt) => sum + opt.price, 0);
  const rushFee = rushDelivery ? Math.round(baseTotal * 0.25) : 0;
  const total = baseTotal + rushFee;

  const buildMessage = () => {
    const items = selectedItems.map((opt) => `  • ${opt.name} — $${opt.price}`).join('\n');
    const rush = rushDelivery ? `\n  • Rush Delivery (+$${rushFee})` : '';
    return `Hello Afrah! I'd like to request a booking:\n\nSelected Services:\n${items}${rush}\n\nEstimated Total: $${total}\n\nPlease let me know your availability!`;
  };

  const whatsappUrl = `${contactLinks.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
  const emailSubject = encodeURIComponent('Project Booking Request — From Website Calculator');
  const emailBody = encodeURIComponent(buildMessage());
  const emailUrl = `mailto:${contactLinks.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="calculator" className="section-py bg-charcoal-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-champagne-500/5 rounded-full blur-[100px]" />

      <div ref={ref} className={`container-px mx-auto max-w-7xl relative z-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow mb-4 text-gold-400">Build Your Package</p>
          <h2 className="heading-lg text-champagne-50 text-balance">
            Get a quick price in<span className="gold-gradient-text">three easy steps</span>
          </h2>
          <p className="mt-4 text-charcoal-300 text-lg">
            Select the services you need, add rush delivery if you're in a hurry, and reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Options panel */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-charcoal-900/60 backdrop-blur-sm border border-charcoal-700 p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold text-champagne-50 mb-6">
                1. Select your services
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {calculatorOptions.map((opt) => {
                  const isSelected = selected.has(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggle(opt.id)}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
                        isSelected
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-charcoal-700 bg-charcoal-900/40 hover:border-charcoal-500'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isSelected
                            ? 'border-gold-500 bg-gold-500 text-charcoal-950'
                            : 'border-charcoal-500'
                        }`}
                      >
                        {isSelected ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5 text-charcoal-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-champagne-50">{opt.name}</p>
                        <p className="text-xs text-charcoal-400 mt-0.5">{opt.description}</p>
                        <p className="text-sm font-bold text-gold-400 mt-1.5">${opt.price}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Rush delivery toggle */}
              <div className="mt-6 pt-6 border-t border-charcoal-700">
                <h3 className="font-heading text-xl font-semibold text-champagne-50 mb-4">
                  2. Need it fast?
                </h3>
                <button
                  onClick={() => setRushDelivery(!rushDelivery)}
                  className={`flex items-center gap-3 rounded-xl border p-4 w-full transition-all duration-300 ${
                    rushDelivery
                      ? 'border-gold-500 bg-gold-500/10'
                      : 'border-charcoal-700 bg-charcoal-900/40 hover:border-charcoal-500'
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                      rushDelivery
                        ? 'border-gold-500 bg-gold-500 text-charcoal-950'
                        : 'border-charcoal-500'
                    }`}
                  >
                    {rushDelivery ? <Check className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5 text-charcoal-400" />}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-champagne-50">Rush Delivery (+25%)</p>
                    <p className="text-xs text-charcoal-400 mt-0.5">Get your project prioritized with a 48-hour turnaround</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Summary panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 p-6 md:p-8 text-charcoal-950">
              <h3 className="font-heading text-xl font-bold mb-6">3. Your Estimate</h3>

              {selectedItems.length === 0 ? (
                <p className="text-sm text-charcoal-800/70 italic mb-6">
                  Select services to see your estimated price.
                </p>
              ) : (
                <div className="space-y-3 mb-6">
                  {selectedItems.map((opt) => (
                    <div key={opt.id} className="flex justify-between text-sm">
                      <span className="font-medium text-charcoal-900 pr-2">{opt.name}</span>
                      <span className="font-bold">${opt.price}</span>
                    </div>
                  ))}
                  {rushDelivery && (
                    <div className="flex justify-between text-sm pt-2 border-t border-charcoal-900/20">
                      <span className="font-medium">Rush Delivery</span>
                      <span className="font-bold">+${rushFee}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between items-end pt-4 border-t border-charcoal-900/20 mb-6">
                <span className="font-heading text-lg font-bold">Estimated Total</span>
                <span className="font-heading text-3xl font-bold">${total}</span>
              </div>

              {/* CTA buttons */}
              <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-800 mb-3">
                Request a booking:
              </p>
              <div className="space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-charcoal-950 px-5 py-3 text-sm font-semibold text-champagne-50 transition-all hover:bg-charcoal-900 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book via WhatsApp
                </a>
                <a
                  href={emailUrl}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-charcoal-950 transition-all hover:bg-white active:scale-95"
                >
                  <Mail className="h-4 w-4" />
                  Send via Email
                </a>
              </div>

              <p className="text-xs text-charcoal-800/60 mt-4 text-center">
                Final prices may change depending on your project size and edits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
