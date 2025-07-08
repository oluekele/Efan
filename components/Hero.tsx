'use client' 

import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className=" w-full relative flex flex-col justify-center items-center text-center px-6 py-24 md:py-40 text-secondary bg-cover bg-center  "
      style={{ backgroundImage: "url('/bg2.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="bg-black/50 p-4 rounded-xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-xl">
          Efan Rice Masters
        </h1>
        <p className="mb-8 text-lg md:text-2xl text-white/90 drop-shadow-sm">
          Nigeria’s Premium Rice Producers — Nurturing Quality from Owa, Delta State to the World.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={'/contact'}
            className="bg-green-600 px-8 py-3 rounded-full hover:bg-green-700 transition-colors text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Order Now
          </Link>
          <Link href={'/contact'}
            className="bg-orange-500 px-8 py-3 rounded-full hover:bg-orange-600 transition-colors text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
          >
            Quick Contact
          </Link>
        </div>

        <div className="mt-8">
          <SocialIcons />
        </div>
      </motion.div>
    </motion.section>
  );
}
