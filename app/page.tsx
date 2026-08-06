import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductsLaunched from "@/components/ProductsLaunched";
import LaunchedProducts from "@/components/LaunchedProducts";
import Stats from "@/components/Stats";
import OurProducts from "@/components/OurProducts";
import Testimonials from "@/components/Testimonials";
import CompanyVideo from "@/components/CompanyVideo";
import BrandsSection from "@/components/BrandsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import CompanyIntro from "@/components/CompanyIntro";

export default function Home() {
  return (
    <>
      <Header isVisible={false} />
      <main>
        <Hero />
        <CompanyIntro />
        <About />
        <WhyChooseUs />
        <BrandsSection />
        <Stats />
        <OurProducts />
        <Testimonials />
        <CompanyVideo />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
