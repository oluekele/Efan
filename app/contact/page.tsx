import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import HeroBanner from "@/components/contact/HeroBanner";
import PromiseBox from "@/components/contact/PromiseBox";
import WhyConnect from "@/components/contact/WhyConnect";


export default function ContactPage() {
  return (
    <div>
      <HeroBanner
        title="Connect with Efan Rice Factory"
        subtitle="We respond to all messages swiftly and professionally."
        image="/contact-bg.jpg"
      />
      <main className="max-w-7xl mx-auto p-4 space-y-8 mt-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Send Us a Message</h2>
            <ContactForm />
          </div>
          <ContactDetails />
        </div>
        <PromiseBox />
        <WhyConnect />
      </main>
      <p className="w-full text-center -mt-10">&copy; {new Date().getFullYear()} Efan Rice Factory</p>
    </div>
  );
}
