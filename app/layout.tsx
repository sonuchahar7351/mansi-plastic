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
  title: "Water Tank Manufacturers in Hyderabad | Mansi Plastic",
  description:
    "Mansi Plastic is a trusted water tank manufacturer and supplier in Hyderabad, offering durable plastic water storage tanks for residential, commercial, and agricultural applications.",
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
