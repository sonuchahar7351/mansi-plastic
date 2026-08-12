import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

const categories = {
  "double-layer": "Double Layer",
  "triple-layer": "Triple Layer",
  "four-layer": "Four Layer",
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryName = categories[category as keyof typeof categories];

  if (!categoryName) {
    notFound();
  }

  // Filter products belonging to this category
  const categoryProducts = products.filter((product) =>
    product.AvailableIn?.includes(categoryName),
  );

  return (
    <div className="container-page space-y-6 section-padding">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-primary">
          {categoryName} Water Tanks
        </h1>

        <p>
          Explore our range of {categoryName.toLowerCase()} water tanks
          available in multiple capacities.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
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
      </section>
    </div>
  );
}
