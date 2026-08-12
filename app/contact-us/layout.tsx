import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

export const metadata: Metadata = {
  title: "Contact Mansi Plastic | Water Tank Manufacturer in Hyderabad",
  description:
    "Contact Mansi Plastic for water storage tank enquiries, product details, pricing, and quotes. Our team is ready to help with residential, commercial, and agricultural water storage solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isVisible={false} />
      <EnquiryModalProvider>
        {children}
        <EnquiryModal />

        <AutoEnquiryTrigger delay={5000} />
      </EnquiryModalProvider>
      <Footer />
    </>
  );
}
