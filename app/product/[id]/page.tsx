import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BigProductDetail from "@/components/BigProductDetail";

export default function Home({ params }: { params: { id: string } }) {
  const productId = params.id;
  return (
    <>
      <Header isVisible={false} />
      <BigProductDetail productId={productId} />
      <Footer />
    </>
  );
}
