import HeroBanner from "@/components/contact/HeroBanner";
import OrderCTA from "@/components/product/OrderCTA";
import PackageOptions from "@/components/product/PackageOptions";
import ProductDetails from "@/components/product/ProductDetails";
import WhyChooseUs from "@/components/product/WhyChooseUs";


export default function ProductsPage() {
  return (
    <>
      <HeroBanner
        title="Premium Quality, Perfectly Packaged"
        subtitle="Explore our packaging options to suit your needs"
        image="/contact-bg.jpg"
      />
      <ProductDetails />
      <PackageOptions />
      <WhyChooseUs />
      <OrderCTA />
    </>
  );
}
