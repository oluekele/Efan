import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-green-600 text-white text-center py-8 px-4 space-y-2">
      <h2 className="text-2xl font-bold">Ready to Experience Our Premium Rice?</h2>
      <p>Contact us today or place your order. We respond fast, guaranteed.</p>
      <Link
        href="/contact"
        className="inline-block bg-white text-green-700 px-4 py-2 rounded hover:bg-green-50 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
