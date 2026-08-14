import MissionVision from "@/components/MisssionVision";
import Breadcrumb from "@/shared/Breadcrumb";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="relative w-full h-[550px] overflow-hidden">
        <div className={`absolute inset-0 opacity-100 z-10`}>
          <div className={`absolute inset-0`}>
            <Image
              src="/images/about-feature.png"
              alt=""
              fill
              priority={true}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex gap-6 flex-col items-center justify-center z-20">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <Breadcrumb tag={"about-us"} />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
      <div className="container-page py-16 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-card">
            <Image
              src="/images/about.png"
              alt=""
              fill
              priority={true}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 space-y-3">
            <h2 className="text-primary font-bold text-2xl">
              Trusted Water Tank Manufacturer
            </h2>
            <p className="text-lg text-gray-700">
              Sonu Plastic has been the bestsupplier of plastic toys in
              Hyderabad that combine durability, quality, and reliable
              performance. Our products are made using quality raw materials and
              modern manufacturing processes to ensure long service life and
              safe water storage.
            </p>
            <p className="text-lg text-gray-700">
              We manufacture tanks suitable for residential, commercial, and
              industrial applications, with options available in double-layer,
              triple-layer, and four-layer construction.
              <br />
            </p>

            <p className="text-lg text-gray-700">
              Sonu Plastic is a trusted water tank manufacturer and supplier in
              Hyderabad, offering high-quality plastic water storage tanks for
              residential, commercial, and agricultural applications. We provide
              durable double layer, triple layer, and four layer water tanks in
              multiple capacities. Our product range also includes trusted
              brands such as Aashirvad and Sunrise, helping customers find
              reliable water storage solutions for their specific requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="bg-gray-50">
        <MissionVision />
      </div>
    </div>
  );
};

export default page;
