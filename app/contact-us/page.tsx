import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumb from "@/shared/Breadcrumb";
import { Landmark, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title:
      "D-160, Phase- III IDA, Jeedimetla, Hyderabad - 500055, Telangana, India.",
    icon: <Landmark />,
  },
  {
    id: 2,
    title: "solefins@gmail.com, ravindra@superolefins.com",
    icon: <Mail />,
  },
  {
    id: 3,
    title: (
      <p>
        Mobile No: +91 9849032212, <br /> Tel: +91 40 29885179
      </p>
    ),
    icon: <PhoneCall />,
  },
];

const Card = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-[250px] bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg text-white group flex items-center justify-center transition-all duration-500 hover:scale-105">
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="p-2 w-12 h-12 rounded-full bg-black group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
          {data.icon}
        </div>
        <div className="text-base font-semibold text-center leading-relaxed">
          {data.title}
        </div>
      </div>
    </div>
  );
};

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
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <Breadcrumb tag={"contact-us"} />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
      <div className="container-page py-16 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="container-page">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1173731657673!2d78.45574107429056!3d17.40615398348421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97360ade3bcf%3A0xb12aeddc1c1d30fb!2sh%2C%2010-1-1110%2C%20near%20Flur%20mill%2C%20P%20%26%20T%20Officers%20Colony%2C%20AC%20Guards%2C%20Khairtabad%2C%20Hyderabad%2C%20Telangana%20500004!5e0!3m2!1sen!2sin!4v1785939325771!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          width="100%"
          height="600"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="container-page py-16 space-y-6">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default page;
