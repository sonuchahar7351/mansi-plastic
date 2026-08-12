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
      title: "Premium Water Storage Tanks | Mansi Plastic",
      description:
        "Explore high-quality plastic water storage tanks from Mansi Plastic, designed for durable and reliable water storage.",
    };
  }

  const titleParts = [
    product.CapiblityRange,
    product.AvailableIn,
    "Water Tank",
  ].filter(Boolean);

  const title = `${titleParts.join(" ")} | Mansi Plastic`;

  const description = [
    `Explore the ${product.CapiblityRange ?? ""} ${product.AvailableIn ?? ""} plastic water tank from Mansi Plastic.`,
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
