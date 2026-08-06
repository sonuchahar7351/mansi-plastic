import { sitemap } from "@/lib/sitemap";
import Breadcrumb from "@/shared/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteMap = () => {
  return (
    <div className="min-h-screen">
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

          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 flex gap-6 flex-col items-center justify-center z-20">
          <h1 className="text-4xl font-bold text-white">Site Map</h1>
          <Breadcrumb tag={"sitemap"} />
        </div>
      </div>
      <div className="container-page py-16 space-y-6">
        <h3 className="text-primary text-3xl font-semibold">Sitemap</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {sitemap.map((item) => (
            <li key={item.url} className="list-disc">
              <Link
                href={item.url}
                className="text-lg font-semibold text-red-500 hover:text-primary"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SiteMap;
