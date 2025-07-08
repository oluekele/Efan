'use client'

import { motion } from "framer-motion";
import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  message: string;
  image: string;
};

export default function TestimonialCard({
  name,
  role,
  message,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-neutral mb-1">{name}</h3>
      <span className="text-primary text-sm mb-2">{role}</span>
      <p className="text-neutral italic">{message}</p>
    </motion.div>
  );
}
