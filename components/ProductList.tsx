import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import CustomSwiper from "../shared/customCarousel";

export default function ProductList() {
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

          <p className="text-lg text-gray-700">
            Sonu Plastic is one of the trusted plastic water tank suppliers in
            Telangana, providing durable water storage solutions for homes,
            businesses, and agricultural applications. Our products are
            available in multiple capacities and layer options to meet different
            storage requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
}
