"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Full Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+234 800 123 4567"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
