"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Contact Us
        </h2>
        <p className="text-neutral max-w-3xl mx-auto">
          Reach out to us — we guarantee an immediate response to your inquiries and orders.
        </p>
      </div>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white rounded-xl shadow p-6 grid grid-cols-1 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="border rounded p-3 w-full"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="border rounded p-3 w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="border rounded p-3 w-full"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-primary text-white px-6 py-3 rounded hover:bg-green-800 bg-green-600  transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-600 mt-2">Message sent successfully! We will reply shortly.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
        )}
      </motion.form>
      <div className="flex justify-center mt-6 space-x-4 text-2xl text-primary">
        <Link href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </Link>
        <Link href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </Link>
        <Link href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Link>
      </div>
    </section>
  );
}
