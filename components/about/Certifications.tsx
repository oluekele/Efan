import { FaCheckCircle } from "react-icons/fa";

export default function Certifications() {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Our Certifications & Trust</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {["ISO Certified", "NAFDAC Approved", "GMP Compliant", "HACCP Verified"].map((cert) => (
          <div
            key={cert}
            className="flex items-center gap-2 border rounded p-2 shadow text-green-700"
          >
            <FaCheckCircle />
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
