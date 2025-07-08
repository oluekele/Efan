import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Our Location</h2>
        <address className="text-sm not-italic leading-6">
          Harmony Harvest Premium Rice<br />
          123 Harmony Lane<br />
          Asaba, Delta State, Nigeria<br />
          PO Box 7890
        </address>
      </div>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <h2 className="font-bold">Quick Contact & Social</h2>
        <a
          href="tel:+2348012345678"
          className="flex justify-center items-center gap-2 bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
        >
          <FaPhone /> Call Us
        </a>
        <div className="flex justify-center gap-4 text-xl mt-2">
          <FaFacebook className="hover:text-green-600 cursor-pointer" />
          <FaInstagram className="hover:text-green-600 cursor-pointer" />
          <FaTwitter className="hover:text-green-600 cursor-pointer" />
          <FaLinkedin className="hover:text-green-600 cursor-pointer" />
        </div>
        <p className="text-xs text-center">For immediate assistance</p>
      </div>
    </div>
  );
}
