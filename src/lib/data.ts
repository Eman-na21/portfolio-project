export type Category = 'Logo Design' | 'Wedding Cards' | 'Business Cards' |  'Banners';

export interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  client: string;
  year: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Amor Coffee — Brand Identity',
    category: 'Logo Design',
    image: '/portfolio/coffie.jpg',
    description: 'Promotional logo for premium cold coffee with caramel drizzle, whipped cream, and scattered coffee beans',
    client: 'Amor coffee',
    year: '2025',
  },
  {
    id: 2,
    title: 'Sara & Adam — Wedding invitatin',
    category: 'Wedding Cards',
    image: '/portfolio/wed.jpg',
    description: 'Elegant floral wedding card for Sara & Adem featuring pearl accents, wedding rings, and soft neutral tones.',
    client: 'Sara & Adam',
    year: '2025',
  },
  {
    id: 3,
    title: 'The qanitat way — Business Cards',
    category: 'Business Cards',
    image: '/portfolio/bus.jpg',
    description: 'Minimalist apparel card with a clothing rack photo, beige tones, and a hexagonal needle logo',
    client: 'The qanitat way',
    year: '2025',
  },
  {
    id: 4,
    title: 'Amor cafe — Promo Banner',
    category: 'Banners',
    image: 'portfolio/img.jpg',
    description: 'Appetizing advertisement featuring loaded chicken and beef shawarmas with dynamic sauce splashes',
    client: 'Amor cafe',
    year: '2026',
  },
  {
    id: 5,
    title: 'Luna studio — Identity',
    category: 'Logo Design',
    image: 'portfolio/logo.jpg',
    description: 'Elegant gold "LS" monogram logo featuring a crescent moon and fine floral accents.',
    client: 'Luna studio',
    year: '2025',
  },
  {
    id: 6,
    title: 'Hermon & Henok  — Wedding Invitations',
    category: 'Wedding Cards',
    image: 'portfolio/wed2.jpg',
    description: 'Sophisticated floral wedding card design featuring soft olive tones and elegant typography.',
    client: 'Hermon & Henok',
    year: '2026',
  },
  {
    id: 7,
    title: 'Egle— Business Cards',
    category: 'Business Cards',
    image: 'portfolio/bus3.jpg',
    description: 'lavender corporate card template with an eagle logo and clean contact layouts.',
    client: 'Egle ',
    year: '2025',
  },
  {
    id: 8,
    title: 'Amor — Food Banners',
    category: 'Banners',
    image: 'portfolio/img2.jpg',
    description: 'Vibrant food promo showcasing crispy golden fries with a ketchup splash on a deep red backdrop.',
    client: 'AMor',
    year: '2025',
  },
  {
    id: 9,
    title: 'Afrah design— logo',
    category: 'Logo Design',
    image: 'portfolio/logo2.jpg',
    description: 'Modern 3D brand identity blending the letter "A" with a pencil icon on paper mockup.',
    client: 'Amor cafe',
    year: '2025',
  },
  {
    id: 10,
    title: 'Ahlam & Amir — Wedding Cards',
    category: 'Wedding Cards',
    image: 'portfolio/wed4.jpg',
    description: 'A romantic wedding invitation featuring floral elements and ring motifs with soft, warm tones.',
    client: 'Ahlam & Amir',
    year: '2026',
  },
  {
    id: 11,
    title: 'The qanitat way — Business Cards',
    category: 'Business Cards',
    image: 'portfolio/thank2.jpg',
    description: 'A dark-mode packaging insert with elegant floral borders, reading for the Qanitat brand.',
    client: 'The qanitat way',
    year: '2026',
  },
  {
    id: 12,
    title: 'Amor piza — Promo Flyer',
    category: 'Banners',
    image: 'portfolio/img4.jpg',
    description: 'Eye-catching pizza ad displaying a cheesy slice pull, topped with fresh tomatoes and basil',
    client: 'Amor piza',
    year: '2026',
  },
];

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: 'Palette',
    title: 'Brand & Logo Design',
    description: 'Distinctive logo systems and complete brand identities that capture the essence of your business.',
    features: ['Logo Design', 'Brand Guidelines', 'Color & Typography', 'Visual Identity System'],
  },
  {
    icon: 'Heart',
    title: 'Custom Wedding & Event Cards',
    description: 'Bespoke wedding stationery and event invitations crafted with elegance and attention to every detail.',
    features: ['Wedding Invitations', 'Save the Dates', 'Thank You Cards', 'Event Programs'],
  },
  {
    icon: 'CreditCard',
    title: 'Professional Business Cards',
    description: 'Premium business card designs that make a lasting impression and reflect your professional identity.',
    features: ['Card Design', 'Letterhead', 'Envelopes', 'Stationery Suite'],
  },
  {
    icon: 'Megaphone',
    title: 'Promotional Banners & Flyers',
    description: 'Eye-catching marketing materials designed to drive engagement and elevate your promotional campaigns.',
    features: ['Social Media Banners', 'Flyers & Posters', 'Event Banners', 'Digital Ads'],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  
  {
    name: 'Ahlam & Amir',
    role: 'Wedding Clients',
    rating: 5,
    text: 'የሰርግ ጥሪያችን ከጠበቅነው በላይ በጣም የሚያምር ነበር። እያንዳንዱ እንግዳ የጥሪ ወረቀቱ ምን ያህል ውብ እና የራሳችንን ልዩ ስሜት የሚያንጸባርቅ እንደነበር አድንቋል። አፍራህ የእኛን ፍላጎት እና እይታ በደንብ ተረድታው ነበር።',
    avatar: 'AA',
  },
  {
    name: 'Amor cafe',
    role: 'Partner, Amore',
    rating: 5,
    text: 'Professional and  timely',
    avatar: 'AC',
  },
  {
    name: 'The qanitat way',
    role: 'Marketing Director, The qanitat way',
    rating: 5,
    text: 'Our promotional banners have never looked better. Afrah delivered designs that were bold, on-brand, and ready ahead of schedule.',
    avatar: 'TQ',
  },
  
  
];

export interface CalculatorOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export const calculatorOptions: CalculatorOption[] = [
  { id: 'logo-basic', name: 'Logo Design (Basic)', description: '3 logo concepts + 2 revisions', price: 40, category: 'Logo' },
  { id: 'logo-premium', name: 'Logo + Brand Identity', description: '5 concepts + brand guidelines + color palette', price: 45, category: 'Logo' },
  { id: 'business-card', name: 'Business Card Design', description: 'Single-sided, print-ready files', price: 30, category: 'Business Card' },
  { id: 'business-card-double', name: 'Business Cards (Double-Sided)', description: 'Double-sided design + 2 revisions', price: 35, category: 'Business Card' },
  { id: 'wedding-invite', name: 'Wedding Invitation Suite', description: 'Invitation + RSVP + envelope design', price: 350, category: 'Wedding' },
  { id: 'wedding-full', name: 'Full Wedding Stationery', description: 'Invitations, RSVP, programs, menus, thank you cards', price: 50, category: 'Wedding' },
  { id: 'banner-social', name: 'Social Media Banner Set', description: '5 platform-optimized banners', price: 30, category: 'Banner' },
  { id: 'banner-print', name: 'Print Flyer / Poster', description: 'Print-ready promotional flyer', price: 40, category: 'Banner' },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '20+', label: 'Happy Clients' },
  { value: '50+', label: 'Projects Completed' },
  { value: '2', label: 'Years of Experience' },
  { value: '10+', label: 'Brand Identities Built' },
];

export const contactLinks = {
  whatsapp: 'https://wa.me/0965479500',
  telegram: 'https://t.me/aphra23',
  email: 'afrahwelyu@gmail.com',
  instagram: 'https://instagram.com/aaphrahsherif',
  behance: 'https://behance.net/afrah',
  dribbble: 'https://dribbble.com/afrah-welyu',
};
