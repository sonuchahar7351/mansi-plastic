import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";
import { ProductItem } from "@/types";
import { products } from "@/lib/data";

type Props = {
  params: Promise<{
    id: string;
  }>;
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

  const layers = product.AvailableIn?.join(", ");
  const capacities = product.CapiblityRange?.join(", ");

  const title = `Plastic Water Storage Tanks | Sonu Plastic`;

  const description = `Explore Sonu Plastic water storage tanks available in ${layers} in Hyderabad layers and capacities from ${capacities} . Durable plastic tanks designed for reliable residential, commercial and agricultural water storage.`;

  return {
    title,
    description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EnquiryModalProvider>
        {children}
        <EnquiryModal />
        <AutoEnquiryTrigger delay={5000} />
      </EnquiryModalProvider>
    </>
  );
}
