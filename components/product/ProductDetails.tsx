import Image from "next/image";

export default function ProductDetails() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
      <Image src="/packed.jpeg" alt="Efan Rice Premium Bag" width={300} height={200} className="rounded shadow" />
      <div>
        <h2 className="text-2xl font-bold mb-2">Efan Rice — Pure, Premium, Proudly Nigerian</h2>
        <p className="text-gray-700 text-sm mb-3">
          Efan Rice is locally cultivated and processed with world-class standards to ensure taste,
          nutrition, and quality. Sourced from fertile lands in Delta State, it’s the trusted choice
          for homes, restaurants, and export markets.
        </p>
        <ul className="list-disc ml-6 text-sm text-green-800 space-y-1">
          <li>100% Nigerian-grown, stone-free and polished</li>
          <li>Affordable sizes for every need (from 50g to 50kg)</li>
          <li>Certified safe — NAFDAC, ISO, HACCP</li>
        </ul>
      </div>
    </section>
  );
}
