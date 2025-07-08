import { FaLeaf, FaStar, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    { icon: <FaLeaf />, text: "Grown Organically with Love" },
    { icon: <FaStar />, text: "Superior Taste & Texture" },
    { icon: <FaCheckCircle />, text: "Certified Clean & Safe" },
    { icon: <FaHandsHelping />, text: "Trusted by Thousands of Families" },
  ];

  return (
    <section className="bg-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Why Choose Efan Rice?</h2>
        <div className="grid md:grid-cols-4 gap-6 text-green-900 text-sm text-center">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 p-4">
              <div className="text-2xl">{feat.icon}</div>
              <p>{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
