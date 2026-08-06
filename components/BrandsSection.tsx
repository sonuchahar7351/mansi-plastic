import CustomSwiper from "@/shared/customCarousel";
import { Shield, Sunrise, Droplets, Award, ArrowRight } from "lucide-react";

const brands = [
  {
    name: "Aashirwad",
    icon: Shield,
    description:
      "Reliable and economical water tanks designed for efficient water storage and daily household use.",
  },
  {
    name: "Sunrise",
    icon: Sunrise,
    description:
      "Premium double-layer, triple-layer, and four-layer water tanks for residential and commercial applications.",
    featured: true,
  },
  {
    name: "Duralex",
    icon: Award,
    description:
      "Strong and dependable tanks engineered for long-term durability and everyday water storage.",
  },
  {
    name: "Nandi Plus",
    icon: Droplets,
    description:
      "Quality water storage solutions available in multiple capacities for a wide range of installations.",
  },
];

export default function BrandsSection() {
  return (
    <section className="container-page py-10 px-5 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
            OUR BRANDS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Trusted Water Tank Brands
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            Mansi Plastic proudly manufactures multiple brands, each designed to
            meet different customer needs while maintaining exceptional quality,
            durability, and performance.
          </p>
        </div>

        {/* Brand Cards */}

        <CustomSwiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          loop={true}
        >
          {brands.map((brand) => {
            const Icon = brand.icon;

            return (
              <div
                key={brand.name}
                className={`group relative overflow-hidden rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  brand.featured
                    ? "border-primary shadow-lg"
                    : "border-gray-200"
                }`}
              >
                {/* Background Decoration */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:scale-125" />

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon size={32} />
                </div>

                {/* Brand Name */}
                <h3 className="relative text-2xl font-bold text-gray-900">
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-sm leading-7 text-gray-600">
                  {brand.description}
                </p>
              </div>
            );
          })}
        </CustomSwiper>

        {/* Bottom Note */}
        <div className="mt-16 rounded-3xl bg-primary p-8 text-center text-white">
          <h3 className="text-2xl font-semibold">
            Manufactured by Mansi Plastic
          </h3>

          <p className="mt-3 max-w-3xl mx-auto text-white/90 leading-7">
            Every brand is manufactured with the same commitment to quality,
            durability, and performance. Whether you need an economical water
            tank or a premium multi-layer solution, Mansi Plastic has a product
            designed to meet your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
