'use client'

import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

// type ProductCardProps = {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// };

export default function ProductCard() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center lg:max-w-4xl md:max-w-xl w-full rounded-2xl overflow-hidden h-[500px]">
        <div className="w-full flex items-center h-1/2">
          <div className="w-full h-full">
            <Image
              src={'/50kg1.jpeg'}
              alt={'50kg'}
              width={400}
              height={300}
              className="rounded mb-4 w-full h-full  object-cover"
            />
          </div>
          <div className="w-full h-full">
            <Image
              src={'/50kg2.jpeg'}
              alt={'50kg'}
              width={400}
              height={300}
              className="rounded mb-4 w-full h-full  object-cover"
            />
          </div>
        </div>
        <div className="w-full flex items-center h-1/2">
          <div className="w-full h-full">
            <Image
              src={'/50kg3.jpeg'}
              alt={'50kg'}
              width={400}
              height={300}
              className="rounded mb-4 w-full h-full  object-cover"
            />
          </div>
          <div className="w-full h-full">
            <Image
              src={'/50kg4.jpeg'}
              alt={'50kg'}
              width={400}
              height={300}
              className="rounded mb-4 w-full h-full  object-cover"
            />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-neutral mb-2">Efan Premium Rice – 50kg Bag</h3>
      <p className="text-neutral mb-4 flex-grow">
        Economical for wholesalers, caterers, and large-scale buyers.
      </p>
      {/* <Link
        href={'/products'}
        className="mt-auto inline-block bg-primary text-white px-4 py-2 rounded hover:bg-green-600 bg-green-900 transition"
      >
        Learn More
      </Link> */}
    </motion.div>
  );
}
