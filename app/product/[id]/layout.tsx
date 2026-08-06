import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

export const metadata: Metadata = {
  title: "Premium Water Storage Tanks | Mansi Plastic Products",
  description:
    "Explore our high-quality water storage tanks, built for durability and long-term use. Mansi Plastic manufactures industrial-grade tanks that meet national safety standards, perfect for residential, commercial, and agricultural applications.",
};

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
