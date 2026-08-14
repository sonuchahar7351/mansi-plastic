import {
  NavLink,
  HeroSlide,
  ProductItem,
  StatItem,
  Testimonial,
  AboutTab,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/heroslide.png",
  },
];

export const aboutTabs: AboutTab[] = [
  {
    id: "products-launched",
    label: "Products Launched",
    heading: "Products Launched",
    body: "Sonu Plastic has launched a diverse range of water storage tank to meet diverse industry demands. Each product is designed with precision to ensure optimal performance and durability. With a focus on innovation and reliability, our wide product range underscores our commitment to delivering versatile and efficient water storage tank solutions.",
    image: "https://picsum.photos/seed/mansi-launch/900/700",
  },
  {
    id: "tailor-made",
    label: "Tailor Made Products",
    heading: "Tailor Made Products",
    body: "Every business has different water storage tank needs. Our engineering team works closely with clients to develop tailor-made film gauges, widths, and formulations, so the finished product fits the application exactly rather than the other way around.",
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

export const products: ProductItem[] = [
  {
    id: "vertical-water-storage-tanks",
    image: "/images/verticalTank.png",
    title: "Vertical Water Storage Tanks",
    description:
      "These above-ground vessels designed for a wide range of commercial, agricultural, and residential uses.",
    href: "/products/vertical-water-storage-tanks",
    AvailableIn: ["Double Layer", "Triple Layer", "Four Layer"],
    CapiblityRange: [
      "300L",
      "500L",
      "750L",
      "1000L",
      "1500L",
      "2000L",
      "3000L",
      "5000L",
    ],
    Spacification: ["UV Stabilized", "Food Grade", "Durable Construction"],
    category: "Suitable for rooftop and overhead water storage.",
    banners: [
      "/images/verticalTank.png",
      "/images/verticalTank.png",
      "/images/verticalTank.png",
    ],
    featuresBanner: "https://picsum.photos/seed/mansi-prod1/800/400",
  },
  {
    id: "loft-tanks",
    image: "/images/loftTank.png",
    title: "Loft Tanks",
    description:
      "Space-saving tanks designed for indoor and loft installations. Ideal for kitchens, utility areas, and compact spaces.  Sonu Plastic is a trusted loft tank manufacturer in Hyderabad, offering durable and space-efficient tanks in multiple apacities for residential and commercial water storage.",
    href: "/products/loft-tanks",
    CapiblityRange: ["200L", "300L", "400L", "500L", "750L", "1000L"],

    banners: [
      "/images/loftTank.png",
      "/images/loftTank.png",
      "/images/loftTank.png",
    ],
    featuresBanner: "https://picsum.photos/seed/mansi-features/800/400",
  },
  {
    id: "household-tanks",
    image: "/images/houseHoldTank.png",
    title: "Household Tanks",
    description: "Compact water storage tanks for residential use.",
    href: "/products/household-tanks",
    CapiblityRange: ["100", "200L"],
    banners: [
      "/images/houseHoldTank.png",
      "/images/houseHoldTank.png",
      "/images/houseHoldTank.png",
    ],
    featuresBanner: "/images/hoseholdbanner.png",
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
      "Sonu Plastic has been a dependable toys partner for years. Their film consistency and on-time delivery make planning easy on our end.",
  },
  {
    image: "https://picsum.photos/seed/mansi-t2/200/200",
    name: "Sunita Rao",
    company: "Operations Manager, Bluewave Foods",
    feedback:
      "We switched to their toys for our  production line and immediately saw fewer breakages and a cleaner finish on every pallet.",
  },
  {
    image: "https://picsum.photos/seed/mansi-t3/200/200",
    name: "Vikram Nair",
    company: "Director, Nair Glass Works",
    feedback:
      "Responsive team, tailor-made toys specs, and consistent quality batch after batch. Exactly what we need from toys supplier.",
  },
];

export const companyVideo = {
  thumbnail: "https://picsum.photos/seed/mansi-video/1280/720",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title: "Inside Sonu Plastic",
};

export const productOptions = [
  "plastic toys",
  "high qualty toys",
  "Colorfull toys",
];

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];

export const contactDetails = {
  email: "sonuchahar7351@gmail.com",
  phone: "8077265337",
  officeAddress: "kagarol, agra, 283119 ",
  ManufacturingUnit: "Kagarol, agra, 283119 front of ATM",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const aboutSection = {
  heading: "About Sonu Plastic",
  body: "Sonu Plastic has been supplier of plastic toys that combine durability, quality, and reliable performance. Our products are made using quality raw materials and modern manufacturing processes to ensure long service life and safe water storage. ",
  subBody:
    "We manufacture toys suitable for residential, commercial, and industrial applications, with options available in double-layer, triple-layer, and four-layer construction.",
  image: "/images/about.png",

  highlights: [
    "Superior Quality",
    "Innovative Designs",
    "Affordable Solutions",
    "Trusted Partner",
  ],
};
