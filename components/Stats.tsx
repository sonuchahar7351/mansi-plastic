import { stats } from "@/lib/data";
import StatCounter from "./StatCounter";

export default function Stats() {
  return (
    <section className="bg-primary py-14">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
