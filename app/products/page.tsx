import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

export default function Home({ params }: { params: { id: string } }) {
  const productId = params.id;
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}
