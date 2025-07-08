import Link from "next/link";

export default function OrderCTA() {
  return (
    <section className="bg-green-700 text-white text-center py-10 px-4">
      <h2 className="text-2xl font-bold mb-2">Ready to Stock Up on Efan Rice?</h2>
      <p className="mb-4">Place your order now — we deliver fast, nationwide.</p>
      <Link
        href="https://wa.me/2348012345678"
        target="_blank"
        className="bg-white text-green-700 px-5 py-2 rounded hover:bg-green-50 transition"
      >
        Order on WhatsApp
      </Link>
    </section>
  );
}
