import {
  ShieldCheck,
  Layers3,
  Sun,
  Droplets,
  Wrench,
  Database,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Durable Construction",
    description: "Strong and rigid design for long-lasting performance.",
  },
  {
    icon: Layers3,
    title: "Uniform Wall Thickness",
    description: "Even wall thickness ensures better strength and durability.",
  },
  {
    icon: Sun,
    title: "UV Stabilized",
    description: "Made with UV-resistant material for outdoor use.",
  },
  {
    icon: Droplets,
    title: "Safe Water Storage",
    description: "Hygienic material keeps stored water clean and safe.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description: "Quick and hassle-free installation at your location.",
  },
  {
    icon: Database,
    title: "Wide Capacity Range",
    description: "Available in multiple sizes to suit every requirement.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    description: "Manufactured with consistent quality standards.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container-page mx-auto px-5 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Choose Mansi Plastic?</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Reliable, durable, and designed to provide safe water storage for
          homes, businesses, and industries.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center flex-col text-center gap-2"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                <Icon size={28} strokeWidth={2} />
              </div>

              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

              <p className="text-gray-600 text-sm leading-6">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
