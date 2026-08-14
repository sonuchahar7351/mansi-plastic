// components/about/MissionVision.tsx
// Mission & Vision section — matches the styling used in the About Us page
// (container-page, text-primary, shadow-card).

import { Target, Eye, Award } from "lucide-react";
import React from "react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To manufacture durable, high-quality water storage tanks using the finest raw materials and modern production techniques, ensuring every household and industry has access to safe, reliable water storage.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted name in water storage solutions across Hyderabad and beyond, recognized for our quality, innovation, and commitment to customer satisfaction.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Quality without compromise, honest business practices, and long-term relationships built on trust — these principles guide everything we manufacture and deliver.",
  },
];

const MissionVision = () => {
  return (
    <div className="container-page py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-primary font-bold text-2xl">What Drives Us</h2>
        <p className="text-gray-600">
          The principles behind every tank we manufacture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-card p-8 space-y-4 text-center hover:shadow-lg transition"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-base">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
