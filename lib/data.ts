import {
  NavLink,
  HeroSlide,
  LaunchedProduct,
  ProductItem,
  StatItem,
  Testimonial,
  AboutTab,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

export const heroSlides: HeroSlide[] = [
  {
    image: "https://picsum.photos/seed/mansi-extrusion/1920/1080",
    heading: "LDPE Flat Film",
    description:
      "A versatile and durable packaging solution, engineered for a wide range of industrial and commercial applications.",
    ctaLabel: "Explore More",
    ctaHref: "#products",
  },
  {
    image: "https://picsum.photos/seed/mansi-shrinkwrap/1920/1080",
    heading: "Shrink Wrap Film",
    description:
      "High-clarity collation and pallet shrink film built for strength, load stability, and consistent performance.",
    ctaLabel: "Explore More",
    ctaHref: "#products",
  },
  {
    image: "https://picsum.photos/seed/mansi-productionline/1920/1080",
    heading: "Precision Manufacturing",
    description:
      "Modern extrusion lines and rigorous quality control, delivering plastic packaging you can rely on every time.",
    ctaLabel: "Explore More",
    ctaHref: "#products",
  },
];

export const aboutTabs: AboutTab[] = [
  {
    id: "products-launched",
    label: "Products Launched",
    heading: "Products Launched",
    body: "Mansi Plastic has launched a diverse range of plastic packaging products to meet diverse industry demands. Each product is designed with precision to ensure optimal performance and durability. With a focus on innovation and reliability, our wide product range underscores our commitment to delivering versatile and efficient packaging solutions.",
    image: "https://picsum.photos/seed/mansi-launch/900/700",
  },
  {
    id: "tailor-made",
    label: "Tailor Made Products",
    heading: "Tailor Made Products",
    body: "Every business has different packaging needs. Our engineering team works closely with clients to develop tailor-made film gauges, widths, and formulations, so the finished product fits the application exactly rather than the other way around.",
    image: "https://picsum.photos/seed/mansi-tailormade/900/700",
  },
  {
    id: "quality-management",
    label: "Quality Management",
    heading: "Quality Management",
    body: "Consistency is built into every roll we produce. From raw material inspection to in-line thickness monitoring and final batch testing, our quality management system ensures every shipment meets the same dependable standard.",
    image: "https://picsum.photos/seed/mansi-quality/900/700",
  },
];

export const launchedProducts: LaunchedProduct[] = [
  {
    image: "https://picsum.photos/seed/mansi-p1/600/450",
    name: "LDPE Shrink Wrap Film",
    description: "High-clarity film for secure, tamper-evident bundling.",
  },
  {
    image: "https://picsum.photos/seed/mansi-p2/600/450",
    name: "Collation Shrink Film",
    description: "Durable multi-pack wrapping built for the production line.",
  },
  {
    image: "https://picsum.photos/seed/mansi-p3/600/450",
    name: "Pallet Stretch Wrap",
    description: "Heavy-duty wrap for stable, secure palletised loads.",
  },
];

export const products: ProductItem[] = [
  {
    id: "ldpe-shrink-wrap-film",
    image: "https://picsum.photos/seed/mansi-prod1/700/500",
    title: "LDPE Shrink Wrap Film",
    description:
      "A versatile, durable packaging film suited to a wide range of industrial applications.",
    href: "#contact",
    banners: [
      "https://picsum.photos/seed/mansi-prod1/700/500",
      "https://picsum.photos/seed/mansi-prod1/700/500",
      "https://picsum.photos/seed/mansi-prod1/700/500",
    ],
    featuresBanner: "https://picsum.photos/seed/mansi-prod1/800/400",
  },
  {
    id: "printed-shrink-film",
    image: "https://picsum.photos/seed/mansi-prod2/700/500",
    title: "Printed LDPE Shrink Film",
    description:
      "Custom-printed shrink film that combines strong branding with reliable protection.",
    href: "#contact",
    banners: [
      "https://picsum.photos/seed/mansi-banner1/800/400",
      "https://picsum.photos/seed/mansi-banner2/800/400",
      "https://picsum.photos/seed/mansi-banner3/800/400",
    ],
    featuresBanner: "https://picsum.photos/seed/mansi-features/800/400",
  },
  {
    id: "collation-shrink-film",
    image: "https://picsum.photos/seed/mansi-prod3/700/500",
    title: "Collation Shrink Film",
    description:
      "Purpose-built for bundling multi-packs securely on high-speed lines.",
    href: "#contact",
    banners: [
      "https://picsum.photos/seed/mansi-banner1/800/400",
      "https://picsum.photos/seed/mansi-banner2/800/400",
      "https://picsum.photos/seed/mansi-banner3/800/400",
    ],
    featuresBanner: "https://picsum.photos/seed/mansi-features/800/400",
  },
  {
    id: "ldpe-tubular-shrinkable-film",
    image: "https://picsum.photos/seed/mansi-prod4/700/500",
    title: "LDPE Tubular Shrinkable Film",
    description:
      "Seamless tubular film designed for efficient pallet shrink applications.",
    href: "#contact",
    banners: [
      "https://picsum.photos/seed/mansi-banner1/800/400",
      "https://picsum.photos/seed/mansi-banner2/800/400",
      "https://picsum.photos/seed/mansi-banner3/800/400",
    ],
    featuresBanner: "https://picsum.photos/seed/mansi-features/800/400",
  },
  {
    id: "lldpe-stretch-wrap-film",
    image: "https://picsum.photos/seed/mansi-prod5/700/500",
    title: "LLDPE Stretch Wrap Film",
    description:
      "Manual and machine-grade stretch film for stable, secure loads.",
    href: "#contact",
    banners: [
      "https://picsum.photos/seed/mansi-banner1/800/400",
      "https://picsum.photos/seed/mansi-banner2/800/400",
      "https://picsum.photos/seed/mansi-banner3/800/400",
    ],
    featuresBanner: "https://picsum.photos/seed/mansi-features/800/400",
  },
];

export const stats: StatItem[] = [
  { icon: "years", value: 40, suffix: "+", label: "Years of Experience" },
  { icon: "team", value: 15, suffix: "+", label: "Qualified Team" },
  { icon: "clients", value: 90, suffix: "%", label: "Clients Served" },
  { icon: "targets", value: 95, suffix: "%", label: "Targets Achieved" },
];

export const testimonials: Testimonial[] = [
  {
    image: "https://picsum.photos/seed/mansi-t1/200/200",
    name: "Rajesh Malhotra",
    company: "Procurement Head, Apex Pharma",
    feedback:
      "Mansi Plastic has been a dependable packaging partner for years. Their film consistency and on-time delivery make planning easy on our end.",
  },
  {
    image: "https://picsum.photos/seed/mansi-t2/200/200",
    name: "Sunita Rao",
    company: "Operations Manager, Bluewave Foods",
    feedback:
      "We switched to their shrink wrap film for our production line and immediately saw fewer breakages and a cleaner finish on every pallet.",
  },
  {
    image: "https://picsum.photos/seed/mansi-t3/200/200",
    name: "Vikram Nair",
    company: "Director, Nair Glass Works",
    feedback:
      "Responsive team, tailor-made film specs, and consistent quality batch after batch. Exactly what we need from a packaging supplier.",
  },
];

export const companyVideo = {
  thumbnail: "https://picsum.photos/seed/mansi-video/1280/720",
  // Replace with an actual hosted video URL (mp4, or YouTube/Vimeo embed URL).
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title: "Inside Mansi Plastic",
};

export const productOptions = [
  "LDPE Shrink Wrap Film",
  "Printed LDPE Shrink Film",
  "Collation Shrink Film",
  "LDPE Tubular Shrinkable Film",
  "LLDPE Stretch Wrap Film",
  "Micro Perforated Shrink Film",
  "Other",
];

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const contactDetails = {
  email: "info@mansiplastic.com",
  phone: "+91 98490 32212",
  address: "Industrial Area, Meerut, Uttar Pradesh, India",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const aboutSection = {
  heading: "About Us",
  body: "Mansi Plastic was founded with a clear purpose: to manufacture a wide range of plastic packaging products that businesses can depend on. Over the decades, our offering has grown to include LDPE shrink wrap film, printed shrink film, collation shrink film, LDPE tubular shrinkable film, LLDPE stretch wrap film in manual and machine grades, micro-perforated shrink film, pallet top covers, and liners and bags for the pharmaceutical industry. With decades of experience and a commitment to innovation, sustainability, and performance, we have established ourselves as a trusted packaging partner for businesses across diverse industries.",
  image: "https://picsum.photos/seed/mansi-about/900/1000",
  highlights: [
    "Superior Quality",
    "Innovative Designs",
    "Affordable Solutions",
    "Trusted Partner",
  ],
};
