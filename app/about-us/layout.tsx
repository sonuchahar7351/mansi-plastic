import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

export const metadata: Metadata = {
  title: "About Mansi Plastic",
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
