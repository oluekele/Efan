import { regions } from "@/lib/serviceDate";
import GlobalReachCard from "./GlobalReachCard";


export default function GlobalReach() {
  

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Global Reach
        </h2>
        <p className="text-neutral max-w-3xl mx-auto">
          We proudly serve customers not only in Delta State and Nigeria, but also internationally, maintaining top standards wherever you are.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region, index) => (
          <GlobalReachCard
            key={index}
            icon={region.icon}
            location={region.location}
            description={region.description}
          />
        ))}
      </div>
    </section>
  );
}
