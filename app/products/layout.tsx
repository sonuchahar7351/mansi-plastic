import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

export const metadata: Metadata = {
  title: "Our Products | Mansi Plastic",
  description:
    "Explore Mansi Plastic's complete range of premium water storage tanks. Browse our product catalog to find high-quality, durable tank solutions for residential, commercial, and industrial needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <EnquiryModalProvider>
        {children}
        <EnquiryModal />
        <AutoEnquiryTrigger delay={5000} />
      </EnquiryModalProvider>
      <Footer />
    </>
  );
}
