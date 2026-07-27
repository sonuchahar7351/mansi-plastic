import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import en from "@/locales/en.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Server-rendered metadata always uses the default language (English) for
// SEO, since it's generated before the client can read the saved language
// preference from localStorage. The visible UI still switches instantly.
export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-body bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
