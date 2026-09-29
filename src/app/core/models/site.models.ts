/** Shared TypeScript shapes used by config and components. */

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  name: string;
  /** Bootstrap Icons class, e.g. 'bi-facebook' */
  icon: string;
  url: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

/** Content for a <app-feature-card>. */
export interface FeatureCardData {
  title: string;
  text: string;
  image: string;
  link: string;
  linkLabel?: string;
  /** Optional Bootstrap Icons class shown on the image */
  icon?: string;
}
