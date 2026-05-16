import { StyleOption, Service, Tool, Review } from './types';

export const HAIRCUT_STYLES: StyleOption[] = [
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    description: 'Ultra-clean cut with hair blended into the skin.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc388ad6f0c?q=80&w=800',
    popular: true,
  },
  {
    id: 'low-fade',
    name: 'Low Fade',
    description: 'Subtle gradient starting just above the ears.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800',
  },
  {
    id: 'mid-fade',
    name: 'Mid Fade',
    description: 'Balanced fade starting halfway up the sides.',
    image: 'https://images.unsplash.com/photo-1605497746444-1ca0720a400c?q=80&w=800',
  },
  {
    id: 'taper-fade',
    name: 'Taper Fade',
    description: 'Sharp outlines with a gradual blend.',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800',
  },
  {
    id: 'textured-crop',
    name: 'Textured Crop',
    description: 'Modern forward-swept hair with short sides.',
    image: 'https://images.unsplash.com/photo-1600618528240-fb9fe964b853?q=80&w=800',
  },
];

export const BEARD_STYLES: StyleOption[] = [
  {
    id: 'full-beard',
    name: 'Full Beard Shape Up',
    description: 'Sharp lines and defined edges for natural growth.',
    maintenance: 'Medium',
    sharpness: 5,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800',
    popular: true,
  },
  {
    id: 'short-boxed',
    name: 'Short Boxed Beard',
    description: 'Neatly trimmed beard with a defined jawline.',
    maintenance: 'Low',
    sharpness: 4,
    image: 'https://images.unsplash.com/photo-1475403127822-8bc54435b714?q=80&w=800',
  },
  {
    id: 'stubble-fade',
    name: 'Stubble Fade Beard',
    description: 'Intentional shadow blended into the sideburns.',
    maintenance: 'Easy',
    sharpness: 3,
    image: 'https://images.unsplash.com/photo-1581456495147-41799778c5d2?q=80&w=800',
  },
  {
    id: 'chin-strap',
    name: 'Chin Strap Beard',
    description: 'Minimalist line following the jawline.',
    maintenance: 'High',
    sharpness: 4,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800',
  },
  {
    id: 'clean-shave',
    name: 'Clean Shave',
    description: 'Smooth, irritation-free finish.',
    maintenance: 'Daily',
    sharpness: 5,
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800',
  },
];

export const SERVICES: Service[] = [
  { id: 'haircut', name: 'Haircut', price: 10, time: '30 min' },
  { id: 'skin-fade', name: 'Skin Fade', price: 12, time: '40 min', popular: true },
  { id: 'beard-trim', name: 'Beard Trim', price: 10, time: '20 min' },
  { id: 'haircut-beard', name: 'Haircut + Beard', price: 20, time: '50 min' },
  { id: 'shape-up', name: 'Shape Up', price: 5, time: '15 min' },
];

export const TOOLS: Tool[] = [
  {
    id: 'clippers',
    name: 'Clippers',
    purpose: 'Bulk removal and fading',
    effect: 'Seamless transitions and precision length',
    image: 'https://images.unsplash.com/photo-1512690196252-74704f056d81?q=80&w=800',
  },
  {
    id: 'trimmers',
    name: 'Trimmers',
    purpose: 'Outlining and detailing',
    effect: 'Sharp edges around ears and neckline',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800',
  },
  {
    id: 'straight-razor',
    name: 'Straight Razor',
    purpose: 'Line-ups and clean shaves',
    effect: 'The ultimate sharpness for beard lines',
    image: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=800',
  },
  {
    id: 'fade-comb',
    name: 'Fade Comb',
    purpose: 'Guide for blending',
    effect: 'Ensures even strokes during fades',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800',
  },
  {
    id: 'scissors',
    name: 'Barber Scissors',
    purpose: 'Precision top work',
    effect: 'Natural movement and textured finishes',
    image: 'https://images.unsplash.com/photo-1521446704128-44e2f893e414?q=80&w=800',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'James T.',
    rating: 5,
    comment: 'Best skin fade in Bradford. Fast, sharp, and very professional.',
    date: '2 days ago',
  },
  {
    id: '2',
    author: 'Mohammed A.',
    rating: 5,
    comment: 'R3VIVE never misses. Great vibe and the beard shape up is unmatched.',
    date: '1 week ago',
  },
  {
    id: '3',
    author: 'Daniel R.',
    rating: 5,
    comment: 'Consistent quality every time. Booked on WhatsApp and got in same day.',
    date: '3 days ago',
  },
];
