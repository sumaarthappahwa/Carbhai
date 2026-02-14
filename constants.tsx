
import { ServicePackage } from './types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic-complete',
    name: 'Essential Home Spa',
    description: 'Our starter package covering all basics for a clean, refreshed car.',
    realPrice: 999,
    discountPrice: 799,
    category: 'Complete',
    features: [
      'Complete Exterior Wash',
      'Exterior Foam Wash',
      'Engine Clean',
      'AC Condenser Cleaning',
      'Thorough Vacuum Cleaning',
      'Mat Wash',
      'Interior Polish',
      'Tyre Polish'
    ]
  },
  {
    id: 'dry-cleaning-full',
    name: 'Interior Deep Dry Cleaning',
    description: 'Revive your car\'s interior. Roof, seats, and carpet restoration.',
    realPrice: 2000,
    discountPrice: 1599,
    category: 'Interior',
    tag: 'Best Seller',
    features: [
      'Roof Cleaning',
      'Seats Dry Cleaning',
      'Dashboard Detailing',
      'Doors Cleaning',
      'All Interior Dry Clean',
      'Intensive Vacuuming',
      'Interior Polish',
      'Mat Wash & Paper Mat',
      'Luxury Perfuming'
    ]
  },
  {
    id: 'exterior-3m-pro',
    name: 'Exterior 3M Machine Detailing',
    description: 'Professional rubbing and machine buffing for a high-gloss finish.',
    realPrice: 2500,
    discountPrice: 1799,
    category: 'Exterior',
    features: [
      'Complete Exterior Detailing',
      '3M Rubbing',
      'Machine Buffing',
      'Foam Wash',
      '3M Wax Polish',
      'Inside Vacuum Cleaning',
      'Mat Wash',
      'Engine Wash',
      'Interior Polish',
      'Tyre Polish'
    ]
  },
  {
    id: 'ultimate-3m-exterior',
    name: 'Ultimate 3M Exterior Spa',
    description: 'The highest level of exterior protection and shine for your car.',
    realPrice: 3800,
    discountPrice: 2999,
    category: 'Exterior',
    tag: 'Premium Choice',
    features: [
      'Full 3M Rubbing Treatment',
      'Professional Machine Buffing',
      'Advanced Foam Wash',
      '3M Wax Polish',
      'High-Gloss Tyre Polish'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    car: "Tata Harrier",
    rating: 5,
    text: "Excellent doorstep service! They transformed my dusty Harrier into a showroom beauty. Highly recommend the 3M rubbing package. They are punctual and professional.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Verma",
    car: "Hyundai Creta",
    rating: 5,
    text: "Best car wash service in Noida. Very professional and they use genuine 3M products. The dry cleaning was thorough, and the car smells amazing now.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Amit Singh",
    car: "BMW 3 Series",
    rating: 5,
    text: "Very convenient. I called them in the morning and they were at my place by 2 PM. Great work on my BMW's interior. No more coffee stains!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Goel",
    car: "Maruti Swift",
    rating: 4,
    text: "Superb value for money. The Essential Home Spa is perfect for regular maintenance. The staff is polite and carries all their equipment.",
    date: "5 days ago"
  },
  {
    id: 5,
    name: "Sandeep Mishra",
    car: "Mahindra XUV700",
    rating: 5,
    text: "Truly impressed by the machine buffing. My car had minor scratches which are completely gone now. Carbhai is my go-to for car detailing now.",
    date: "2 months ago"
  }
];

export const NAV_LINKS = [
  { label: 'Home Spa', href: '#services' },
  { label: 'Why Us?', href: '#features' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];
