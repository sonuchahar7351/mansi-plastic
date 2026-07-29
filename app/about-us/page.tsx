import Breadcrumb from "@/shared/Breadcrumb";
import Image from "next/image";
import React from "react";

const page = () => {
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
              src={"https://picsum.photos/seed/mansi-prod1/800/400"}
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
              src={"https://picsum.photos/seed/mansi-prod2/400/400"}
              alt=""
              fill
              priority={true}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 space-y-3">
            <h2 className="text-primary font-bold text-2xl">
              About Mansi Plastic
            </h2>
            <p className="text-lg text-gray-700">
              Mansi Plastic is a leading manufacturer of high-quality plastic
              products. With over two decades of experience in the industry, we
              have established ourselves as a trusted partner for businesses
              across various sectors.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
          voluptas nostrum rerum illo minima, sed temporibus aliquam nesciunt
          delectus consequuntur hic,{" "}
          <span className="text-red-500">expedita doloribus</span> quo quos id
          minus cum. Et.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
          voluptas nostrum rerum illo minima, sed temporibus aliquam nesciunt
          delectus consequuntur hic, expedita doloribus quo quos id minus cum.
          Et.
          <br />
        </p>
      </div>
    </div>
  );
};

export default page;
