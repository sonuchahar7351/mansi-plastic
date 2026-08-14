type JobOpening = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

// Replace this with real data from a CMS/API when ready.
const jobOpenings: JobOpening[] = [
  {
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "Plant Site",
    type: "Full-time",
    description:
      "Oversee daily production of water storage tanks, ensure quality standards, and manage the shop-floor team.",
  },
  {
    title: "Quality Control Engineer",
    department: "Quality Assurance",
    location: "Plant Site",
    type: "Full-time",
    description:
      "Inspect raw materials and finished tanks, run quality checks, and maintain compliance with industry standards.",
  },
  {
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "Regional Office",
    type: "Full-time",
    description:
      "Build relationships with dealers and distributors, and drive sales of our water tank product range.",
  },
  {
    title: "Warehouse & Logistics Coordinator",
    department: "Supply Chain",
    location: "Plant Site",
    type: "Full-time",
    description:
      "Manage inventory, coordinate dispatch schedules, and ensure timely delivery of tanks to customers.",
  },
];

const perks = [
  "Competitive salary & incentives",
  "Health insurance coverage",
  "Growth & training opportunities",
  "Friendly & safe work environment",
];

export default function CareersPage() {
  return (
    <div className="bg-white text-gray-900 section-padding">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Build Your Career With Us
        </h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Join a growing team dedicated to manufacturing high-quality water
          storage tanks trusted by homes and industries across the region.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-5xl mx-auto py-14 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Why Work With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((perk) => (
            <div
              key={perk}
              className="border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium">{perk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Current Openings
          </h2>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.title}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {job.department} &middot; {job.location} &middot; {job.type}
                  </p>
                  <p className="text-gray-700 mt-2">{job.description}</p>
                </div>

                <a
                  href={`mailto:solefins@gmail.com?subject=Application for ${job.title}`}
                  className="inline-block whitespace-nowrap bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-14 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Don&apos;t See a Fit? Apply Anyway
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          We&apos;re always looking for talented people. Send us your resume and
          we&apos;ll reach out when a matching role opens up.
        </p>
        <a
          href="mailto:solefins@gmail.com?subject=General Application"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          Send Your Resume
        </a>
      </section>
    </div>
  );
}
