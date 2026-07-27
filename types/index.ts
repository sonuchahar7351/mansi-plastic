export interface NavLinkMeta {
  /** Key into translations, e.g. t(`nav.${key}`) */
  key: string;
  href: string;
}

export interface HeroSlideMeta {
  image: string;
  ctaHref: string;
}

export interface AboutTabMeta {
  /** Stable id, also used to index into productsLaunched.tabs[] in translations. */
  id: string;
  image: string;
}

export interface LaunchedProductMeta {
  image: string;
}

export interface ProductMeta {
  image: string;
  href: string;
}

export interface StatMeta {
  icon: "years" | "team" | "clients" | "targets";
  value: number;
  suffix: string;
}

export interface TestimonialMeta {
  image: string;
}

export interface FooterLinkMeta {
  /** Key into translations, e.g. t(`nav.${key}`) */
  key: string;
  href: string;
}

export interface SocialLinkMeta {
  label: "LinkedIn" | "Facebook" | "Instagram";
  href: string;
}
