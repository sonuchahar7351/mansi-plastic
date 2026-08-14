import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    category: string;
  }>;
};

const categoryMetadata: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "double-layer": {
    title: "Double Layer Water Tanks | Sonu Plastic",
    description:
      "Explore durable double layer water tanks from Sonu Plastic, designed for reliable water storage in residential, commercial, and agricultural applications.",
  },

  "triple-layer": {
    title: "Triple Layer Water Tanks | Sonu Plastic",
    description:
      "Explore high-quality triple layer water tanks from Sonu Plastic, built for durable and reliable water storage for homes, businesses, and agricultural applications.",
  },

  "four-layer": {
    title: "Four Layer Water Tanks | Sonu Plastic",
    description:
      "Explore premium four layer water tanks from Sonu Plastic, designed for strength, durability, and reliable long-term water storage.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  const metadata = categoryMetadata[category.toLowerCase()];

  if (!metadata) {
    return {
      title: "Water Storage Tanks | Sonu Plastic",
      description:
        "Explore durable plastic water storage tanks from Sonu Plastic, available in multiple layers and capacities.",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function CategoryLayout({ children }: Props) {
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
