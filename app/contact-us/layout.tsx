import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

export const metadata: Metadata = {
  title: "Contact Us - Mansi Plastic",
  description:
    "Get in touch with Mansi Plastic for all your plastic packaging needs. We are here to help you with our wide range of high-quality products.",
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
