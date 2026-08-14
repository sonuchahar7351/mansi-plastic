import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutSection } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] w-full mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-card ">
            <Image
              src={aboutSection.image}
              alt="Sonu Plastic manufacturing facility"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Since 1982</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
            {aboutSection.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body/90">
            {aboutSection.body}
          </p>

          <p className="mt-5 text-base leading-relaxed text-body/90">
            {aboutSection.subBody}

            <p className="text-base text-gray-700">
              As experienced water tank manufacturers in Telangana, Mansi
              Plastic focuses on producing durable and reliable plastic water
              storage tanks. Our tanks are designed to provide long-lasting
              performance for a wide range of residential and commercial
              requirements.
            </p>
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutSection.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent shrink-0" size={22} />
                <span className="text-sm font-medium text-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
