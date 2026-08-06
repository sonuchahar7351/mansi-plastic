import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

export const metadata: Metadata = {
  title: "Contact Us - Mansi Plastic | Reach Out for Water Tank Queries",
  description:
    "Contact Mansi Plastic's team for any queries about our industrial and residential water storage tanks. Request a quote, get product details, or share your feedback – we're happy to assist you.",
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
