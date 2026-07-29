import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

export const metadata: Metadata = {
  title:
    "Mansi Plastic | Manufacturer & Supplier of Plastic Packaging Products",
  description:
    "Mansi Plastic is a trusted manufacturer and supplier of a wide range of plastic packaging products, combining decades of experience with a commitment to quality, innovation, and reliability.",
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
