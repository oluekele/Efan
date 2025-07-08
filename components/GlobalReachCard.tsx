'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlobalReachCardProps = {
  icon: ReactNode;
  location: string;
  description: string;
};

export default function GlobalReachCard({
  icon,
  location,
  description,
}: GlobalReachCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-neutral mb-2">{location}</h3>
      <p className="text-neutral">{description}</p>
    </motion.div>
  );
}
