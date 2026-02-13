
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

export const NAV_LINKS = [
  { label: 'Home Spa', href: '#services' },
  { label: 'Why Us?', href: '#features' },
  { label: 'Contact', href: '#contact' }
];
