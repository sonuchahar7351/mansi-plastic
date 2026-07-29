export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface LaunchedProduct {
  image: string;
  name: string;
  description: string;
}

export interface ProductItem {
  id: string;
  image: string;
  title: string;
  description: string;
  href: string;
  banners?: string[];
  featuresBanner?: string;
}

export interface StatItem {
  icon: "years" | "team" | "clients" | "targets";
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  image: string;
  name: string;
  company: string;
  feedback: string;
}

export interface AboutTab {
  id: string;
  label: string;
  heading: string;
  body: string;
  image: string;
}

export type SwiperBreakpoints = {
  [width: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
};

export interface ProductDetail {
  id: string;
  image: string;
  title: string;
  description: string;
  href: string;
  banners?: string[];
  featuresBanner?: string;
}
