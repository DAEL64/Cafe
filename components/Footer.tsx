import logo from "@/public/assets/logo.png";
import { Facebook, Instagram } from "lucide-react";

import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const Footer = () => {
  return (
    <footer
      className={`${cormorant.className} w-full mt-20 border-t border-[#D3CCC9] bg-white`}
    >
      <div className="max-w-7xl mx-auto px-5 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-2 justify-center items-center">
            <span className="text-2xl font-medium tracking-wide uppercase">
              La Crosta
            </span>
            <Image src={logo} alt="La Crosta logo" />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Authentic Dining Experience
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-600">
          <Link
            href="/about"
            className="hover:text-[#A04501] transition-colors"
          >
            About
          </Link>
          <Link
            href="/menus/all"
            className="hover:text-[#A04501] transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#A04501] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>© 2024 . All Rights Reserved.</p>
          <p className="mt-1 italic">Open Daily: 10:00 AM - 11:00 PM</p>
        </div>
      </div>


      {/* Decorative Bottom Bar */}
      <div className="w-full h-1 bg-[#A04501]" />
    </footer>
  );
};

export default Footer;
