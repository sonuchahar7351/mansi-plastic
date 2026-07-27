import {
  NavLinkMeta,
  HeroSlideMeta,
  AboutTabMeta,
  LaunchedProductMeta,
  ProductMeta,
  StatMeta,
  TestimonialMeta,
  FooterLinkMeta,
  SocialLinkMeta,
} from "@/types";

// All translatable text now lives in /locales (en.json, hi.json, es.json).
// This file only holds non-text metadata — images, links, ids, and icon
// keys — that is the same across every language. Each array here lines up
// by index (or by `id`/`key`) with the matching array in the translation
// files, so components zip the two together.
//
// NOTE: Image URLs below are neutral placeholders (picsum.photos) so the
// build always renders without broken links. Swap each `image` value for a
// royalty-free industrial / plastic-manufacturing photo before shipping to
// production.

export const navLinks: NavLinkMeta[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "careers", href: "#careers" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
];

export const heroSlides: HeroSlideMeta[] = [
  { image: "https://picsum.photos/seed/mansi-extrusion/1920/1080", ctaHref: "#products" },
  { image: "https://picsum.photos/seed/mansi-shrinkwrap/1920/1080", ctaHref: "#products" },
  { image: "https://picsum.photos/seed/mansi-productionline/1920/1080", ctaHref: "#products" },
];

export const aboutTabs: AboutTabMeta[] = [
  { id: "products-launched", image: "https://picsum.photos/seed/mansi-launch/900/700" },
  { id: "tailor-made", image: "https://picsum.photos/seed/mansi-tailormade/900/700" },
  { id: "quality-management", image: "https://picsum.photos/seed/mansi-quality/900/700" },
];

export const launchedProducts: LaunchedProductMeta[] = [
  { image: "https://picsum.photos/seed/mansi-p1/600/450" },
  { image: "https://picsum.photos/seed/mansi-p2/600/450" },
  { image: "https://picsum.photos/seed/mansi-p3/600/450" },
];

export const products: ProductMeta[] = [
  { image: "https://picsum.photos/seed/mansi-prod1/700/500", href: "#contact" },
  { image: "https://picsum.photos/seed/mansi-prod2/700/500", href: "#contact" },
  { image: "https://picsum.photos/seed/mansi-prod3/700/500", href: "#contact" },
  { image: "https://picsum.photos/seed/mansi-prod4/700/500", href: "#contact" },
  { image: "https://picsum.photos/seed/mansi-prod5/700/500", href: "#contact" },
  { image: "https://picsum.photos/seed/mansi-prod6/700/500", href: "#contact" },
];

export const stats: StatMeta[] = [
  { icon: "years", value: 40, suffix: "+" },
  { icon: "team", value: 15, suffix: "+" },
  { icon: "clients", value: 90, suffix: "%" },
  { icon: "targets", value: 95, suffix: "%" },
];

export const testimonials: TestimonialMeta[] = [
  { image: "https://picsum.photos/seed/mansi-t1/200/200" },
  { image: "https://picsum.photos/seed/mansi-t2/200/200" },
  { image: "https://picsum.photos/seed/mansi-t3/200/200" },
];

export const companyVideo = {
  thumbnail: "https://picsum.photos/seed/mansi-video/1280/720",
  // Replace with an actual hosted video URL (mp4, or YouTube/Vimeo embed URL).
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

export const footerLinks: FooterLinkMeta[] = [
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "careers", href: "#careers" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
];

export const contactDetails = {
  email: "info@mansiplastic.com",
  phone: "+91 98490 32212",
};

export const socialLinks: SocialLinkMeta[] = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const aboutImage = "https://picsum.photos/seed/mansi-about/900/1000";
