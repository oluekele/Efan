import { testimonials } from "@/lib/constant";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          What Our Customers Say
        </h2>
        <p className="text-neutral max-w-3xl mx-auto">
          We are trusted by food businesses and families alike to deliver top-quality rice and outstanding service.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
