"use client";

import Image from "next/image";
import CustomCarousel from "../shared/bannerCarousel";
import { products } from "@/lib/data";
import { ProductItem } from "@/types";
import { useEnquiryModal } from "@/context/EnquiryForm";
import Breadcrumb from "@/shared/Breadcrumb";

const ProductDetail = ({ productId }: { productId: string }) => {
  const product: ProductItem | undefined = products.find(
    (p) => p.id === productId,
  );

  const { openModal } = useEnquiryModal();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="relative w-full h-[400px] overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-10`}
        >
          <div
            className={`absolute inset-0 animate-kenburns`}
            style={{ animationDuration: `1500ms` }}
          >
            <Image
              src={product.featuresBanner || product.image}
              alt=""
              fill
              priority={true}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex gap-6 flex-col items-center justify-center z-20">
            <h1 className="text-4xl font-bold text-white">{product.title}</h1>
            <Breadcrumb tag={product.title} />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
      <div className="container-page grid grid-cols-1 md:grid-cols-3 my-8">
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-primary">{product.title}</h2>
          <p className="text-lg">{product.description}</p>
        </div>
        <div>
          <CustomCarousel
            items={product.banners || []}
            className="w-full h-[400px]"
            showArrows={false}
            showDots={false}
            showThumbnails={true}
            showCounter={false}
            autoPlay={true}
            autoPlayInterval={5000}
            height={300}
            aspectRatio="16/9"
          />
        </div>
      </div>
      <div className="container-page my-8 flex items-center justify-between gap-4 text-center border border-red-500 p-4">
        <p className="text-lg font-semibold">Know More About This Product</p>
        <button
          onClick={() => openModal(product.title)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
