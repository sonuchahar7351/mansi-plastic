import Image from "next/image";
import {
  ShieldCheck,
  Droplets,
  Award,
  Factory,
  CheckCircle2,
} from "lucide-react";

const brands = ["Aashirwad", "Sunrise", "Duralex", "Nandi Plus"];

export default function CompanyIntro() {
  return (
    <section className="container-page relative overflow-hidden  py-20 rounded-xl">
      <div className="container mx-auto px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Factory size={18} />
              Trusted Water Tank Manufacturer
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Reliable Water Storage Solutions
              <span className="block text-primary">
                For Every Home & Business
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mansi Plastic is a trusted manufacturer of premium plastic water
              storage tanks in Hyderabad, Telangana & Andhra Pradesh. Our tanks
              are durable, hygienic, UV stabilized, and built for homes,
              apartments, commercial buildings, and industrial applications.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
                <ShieldCheck className="text-primary" />
                <span className="font-medium">15 Years Warranty*</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
                <Droplets className="text-primary" />
                <span className="font-medium">100L - 5000L Capacity</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
                <Award className="text-primary" />
                <span className="font-medium">Premium Quality Materials</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
                <CheckCircle2 className="text-primary" />
                <span className="font-medium">Residential & Commercial</span>
              </div>
            </div>

            {/* Brands */}
            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Our Brands
              </h3>

              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 font-medium text-primary"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl bg-white p-0 shadow-2xl">
              <Image
                src="/images/mansiPort.png"
                alt="Mansi Plastic Water Tank"
                width={700}
                height={700}
                className="mx-auto object-contain transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -left-5 top-8 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-3xl font-bold text-primary">4</p>
              <p className="text-sm text-gray-600">Trusted Brands</p>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-5 bottom-10 rounded-2xl bg-primary p-5 text-white shadow-xl">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years Warranty*</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
