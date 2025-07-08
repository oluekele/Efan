'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      className="py-16 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Story: Excellence Rooted in Tradition
        </h2>
        <p className="text-neutral max-w-3xl mx-auto">
          For decades, Efan Rice has been committed to cultivating and delivering
          the finest rice, blending ancestral farming wisdom with modern innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-neutral">
            From the fertile plains of Delta State, Nigeria, our journey began with a
            mission to bring the highest quality rice to every table. We honor our
            agricultural heritage by empowering local farmers, adopting sustainable
            agricultural practices that respect the land and its people.
          </p>
          <p className="text-neutral">
            Our modern processing technology extends farming yields while preserving
            nutritional content, guaranteeing a consistently high-quality product. We
            believe rice is more than a staple — it is nourishment, culture, and legacy
            for generations.
          </p>
          <a
            href="#"
            className="inline-block mt-4 bg-accent text-white px-6 py-3 rounded hover:bg-orange-600 transition"
          >
            Learn More About Our Values
          </a>
        </div>
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/rice.png"
            alt="Rice workers processing"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
