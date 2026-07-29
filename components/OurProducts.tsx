import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import CustomSwiper from "../shared/customCarousel";

export default function OurProducts() {
  return (
    <section id="products" className="section-padding bg-section">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 my-4 mb-8">
          <div>
            <p className="eyebrow">Our Products</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
              Our Products
            </h2>
          </div>
          <p className="max-w-md text-sm text-body/80 leading-relaxed">
            Our commitment to innovation ensures durability, efficiency, and
            sustainability in every product.
          </p>
          <div className="hidden sm:block"></div>
        </div>

        <CustomSwiper
          slidesPerView={1}
          spaceBetween={10}
          customNavigation={true}
          autoplay={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          loop={true}
          navBtnClassName="p-3 rounded-full cursor-pointer bg-primary text-white shadow hover:bg-primary/80 transition pointer-events-auto"
          navWrapperClassName="hidden sm:absolute -top-20 right-4 transform  z-10 flex items-center gap-3 pointer-events-none"
        >
          {products.map((product) => (
            <Link
              href={`/${product.id}`}
              key={product.title}
              className="group rounded-lg bg-white border border-borderc shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 380px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-primary">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-body/80 leading-relaxed flex-1">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Link>
          ))}
        </CustomSwiper>
      </div>
    </section>
  );
}
