import { ContactInfo, NavLink, SocialLink } from '../models/site.models';

/**
 * Single source of truth for organisation-wide details.
 * The navbar, footer and contact page all read from here,
 * so update your real details once and they appear everywhere.
 */
export const SITE = {
  name: 'Pamoja Empowerment Initiative',
  shortName: 'Pamoja',
  tagline: 'Empowering communities, together.',
  about:
    'Pamoja Empowerment Initiative is a non-profit organisation working hand in hand with communities to create lasting change through education, livelihoods and wellbeing. [Replace with your own short description.]',
  logo: 'images/logo.svg',
  developer: { name: 'Monfric Solutions', url: '#' },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Impact', path: '/impact' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact Us', path: '/contact' },
];

export const CONTACT_INFO: ContactInfo = {
  address: 'P.O. Box 00000, Street Name, City, Country',
  phone: '+254 700 000 000',
  email: 'info@pamojainitiative.org',
  hours: 'Mon – Fri: 8:00 AM – 5:00 PM',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', icon: 'bi-facebook', url: 'https://facebook.com/' },
  { name: 'Instagram', icon: 'bi-instagram', url: 'https://instagram.com/' },
  { name: 'TikTok', icon: 'bi-tiktok', url: 'https://tiktok.com/' },
  { name: 'YouTube', icon: 'bi-youtube', url: 'https://youtube.com/' },
];
