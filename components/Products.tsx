// import { products } from "@/lib/constant";
import ProductCard from "./ProductCard";
import Link from "next/link";


export default function Products() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Premium Rice Products
        </h2>
        <p className="text-neutral max-w-3xl mx-auto">
          Discover our diverse range of high-quality rice, meticulously cultivated and
          processed to bring the best to your kitchen.
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        {/* {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))} */}
        <ProductCard />
      </div>
      <div className="text-center mt-8">
        <Link href={'/products'} className="bg-accent text-white px-6 py-3 rounded hover:bg-orange-800 bg-orange-600 transition">
          View All Products
        </Link>
      </div>
    </section>
  );
}
