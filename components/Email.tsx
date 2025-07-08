"use client";

import { useContactFormStore } from "@/store/useContactFormStore";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { name, email, subject, message, setField } = useContactFormStore();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { name, email, subject, message },
        "YOUR_PUBLIC_KEY"
      );
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setField("name", e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setField("email", e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setField("subject", e.target.value)}
        className="border p-2 rounded w-full"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setField("message", e.target.value)}
        className="border p-2 rounded w-full"
        rows={5}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white py-3 px-6 rounded hover:bg-green-700 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {sent && <p className="text-green-600">Message sent! We will respond immediately.</p>}
    </form>
  );
}
