import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Calculator from '@/components/Calculator';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-charcoal-50 selection:bg-gold-500 selection:text-charcoal-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Calculator />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}