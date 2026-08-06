import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: side-effect CSS import handled by Next.js
import "./globals.css";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import EnquiryModal from "@/shared/EnquiryModal";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mansi Plastic | Manufacturer & Supplier of water storage tanks",
  description:
    "Mansi Plastic is a trusted manufacturer and supplier of a wide range of water storage tanks, combining decades of experience with a commitment to quality, innovation, and reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-body bg-white">
        <EnquiryModalProvider>
          {children}
          <EnquiryModal />

          <AutoEnquiryTrigger delay={5000} />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
