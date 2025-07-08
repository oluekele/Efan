'use client'

import { ReactNode } from "react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-neutral">{title}</h3>
      <p className="text-neutral">{description}</p>
    </motion.div>
  );
}
