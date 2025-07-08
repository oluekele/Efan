import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <Link href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noreferrer">
        <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
      </Link>
      <Link href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
        <FaInstagram className="text-2xl hover:text-pink-500 transition" />
      </Link>
      <Link href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
        <FaFacebookF className="text-2xl hover:text-blue-600 transition" />
      </Link>
    </div>
  );
}
