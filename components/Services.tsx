
import { services } from "@/lib/serviceDate";
import ServiceCard from "./ServiceCard";


export default function Services() {
  

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Farm to Table: Our Commitment to Quality
        </h2>
        <p className="text-neutral max-w-3xl mx-auto">
          Every step of our process is managed with precision and care, ensuring the highest
          standards of production and delivery.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
