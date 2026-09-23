import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, Mail, Instagram, Dribbble, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactLinks, services } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-py bg-champagne-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-100/40 rounded-full blur-[120px]" />

      <div ref={ref} className={`container-px mx-auto max-w-7xl relative z-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="heading-lg text-charcoal-950 text-balance">
            Let's create something <span className="gold-gradient-text">beautiful together</span>
          </h2>
          <p className="mt-4 text-charcoal-500 text-lg">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white border border-charcoal-100 p-6 md:p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-charcoal-200 bg-champagne-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="afrahwelyu@gmail.com"
                    className="w-full rounded-xl border border-charcoal-200 bg-champagne-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                  Service Needed
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className="w-full rounded-xl border border-charcoal-200 bg-champagne-50 px-4 py-3 text-sm text-charcoal-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other / Multiple Services</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell me about your project, timeline, and what you're looking for..."
                  className="w-full rounded-xl border border-charcoal-200 bg-champagne-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Thank you! Your message has been sent. I'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 animate-fade-in">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  Something went wrong. Please try again or reach out via WhatsApp.
                </div>
              )}
            </form>
          </div>

          {/* Contact links */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-charcoal-950 p-5 text-champagne-50 transition-all hover:bg-charcoal-900 hover:scale-[1.02] group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-charcoal-950 transition-transform group-hover:scale-110">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-charcoal-400 uppercase tracking-wide">WhatsApp</p>
                <p className="font-semibold">Chat instantly</p>
              </div>
            </a>

            <a
              href={`mailto:${contactLinks.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white border border-charcoal-100 p-5 transition-all hover:border-gold-300 hover:shadow-md group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 transition-transform group-hover:scale-110">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-charcoal-400 uppercase tracking-wide">Email</p>
                <p className="font-semibold text-charcoal-900 text-sm">{contactLinks.email}</p>
              </div>
            </a>

            <a
              href={contactLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white border border-charcoal-100 p-5 transition-all hover:border-gold-300 hover:shadow-md group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-900 text-gold-400 transition-transform group-hover:scale-110">
                <Send className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-charcoal-400 uppercase tracking-wide">Telegram</p>
                <p className="font-semibold text-charcoal-900">@aphra23</p>
              </div>
            </a>

            {/* Social media */}
            <div className="rounded-2xl bg-white border border-charcoal-100 p-5">
              <p className="text-xs text-charcoal-400 uppercase tracking-wide mb-3">Follow My Work</p>
              <div className="flex gap-3">
                <a
                  href={contactLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-champagne-100 text-charcoal-700 transition-all hover:bg-gold-500 hover:text-charcoal-950 hover:scale-105"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={contactLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-champagne-100 text-charcoal-700 transition-all hover:bg-gold-500 hover:text-charcoal-950 hover:scale-105 font-heading text-sm font-bold"
                  aria-label="Behance"
                >
                  Be
                </a>
                <a
                  href={contactLinks.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-champagne-100 text-charcoal-700 transition-all hover:bg-gold-500 hover:text-charcoal-950 hover:scale-105"
                  aria-label="Dribbble"
                >
                  <Dribbble className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
