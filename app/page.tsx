import About from "@/components/About";
import Contact from "@/components/Contact";
import GlobalReach from "@/components/GlobalReach";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";



export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Products />
      <Services />
      <Testimonials />
      <GlobalReach />
      <Contact />
      <p className="w-full text-center -mt-10">&copy; {new Date().getFullYear()} Efan Rice Factory</p>
    </div>
  );
}
