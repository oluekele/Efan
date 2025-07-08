import Certifications from "@/components/about/Certifications";
import ContactCTA from "@/components/about/ContactCTA";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";
import HeroBanner from "@/components/contact/HeroBanner";



export default function AboutPage() {
  return (
    <div className="">
      <HeroBanner
        title="About Efan Rice Factory"
        subtitle="Proudly Nigerian. Internationally Trusted."
        image="/contact-bg.jpg"
      />
      <OurStory />
      <MissionVision />
      <Certifications />
      <ContactCTA />
    </div>
  );
}
