import Image from "next/image";

export default function PromiseBox() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow rounded p-4 gap-4">
      <Image
        src="/hand-rice.jpeg"
        alt="hand holding rice"
        width={200}
        height={200}
        className="w-32 h-32 object-cover rounded"
      />
      <div>
        <h3 className="font-bold mb-1">Our Promise: Excellence in Every Grain, Every Interaction.</h3>
        <p className="text-sm mb-2">
          At Harmony Harvest, we believe exceptional rice deserves exceptional service. Our team is dedicated to providing swift, clear, and helpful support, ensuring your experience is as premium as our product.
        </p>
        <ul className="text-green-700 text-xs list-disc ml-4">
          <li>24/7 Customer Support</li>
          <li>Quality Assurance & Freshness</li>
          <li>Reliable Nationwide Delivery</li>
        </ul>
      </div>
    </div>
  );
}
