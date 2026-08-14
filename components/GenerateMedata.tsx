import { products } from "@/lib/data";
import { ProductItem } from "@/types";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product: ProductItem | undefined = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Premium Water Storage Tanks | Sonu Plastic",
      description:
        "Explore high-quality plastic water storage tanks from Sonu Plastic, designed for durable and reliable water storage.",
    };
  }

  const titleParts = [
    product.CapiblityRange,
    product.AvailableIn,
    "Water Tank",
  ].filter(Boolean);

  const title = `${titleParts.join(" ")} | Sonu Plastic`;

  const description = [
    `Explore the ${product.CapiblityRange ?? ""} ${product.AvailableIn ?? ""} plastic water tank from Sonu Plastic.`,
    "Designed for durable and reliable water storage for residential, commercial and agricultural applications.",
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    title,
    description,
  };
}
