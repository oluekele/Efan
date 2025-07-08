import Image from "next/image";

const packages = [
  { size: "50g Sachet", image: "/50g.jpeg" },
  { size: "1kg Bag", image: "/1kg.jpeg" },
  { size: "5kg Bag", image: "/5kg.jpeg" },
  { size: "25kg Bag", image: "/25kg.jpeg" },
  { size: "50kg Bag", image: "/50kg.jpeg" },
];

export default function PackageOptions() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Available Packaging</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((pack) => (
          <div key={pack.size} className="bg-white shadow rounded p-4 text-center hover:shadow-lg transition">
            <Image src={pack.image} alt={pack.size} width={100} height={100} className="mx-auto h-32 object-contain mb-3" />
            <h3 className="text-md font-semibold">{pack.size}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
