import logo from "@/public/assets/logo.png";
import tiktok from "@/public/assets/tiktok-icon.png"

import { Facebook, Instagram, Phone } from "lucide-react"; // Added Phone
import { Cormorant_Garamond } from "next/font/google";

import Image from "next/image";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Footer = () => {
  return (
    <footer
      className={`${cormorant.className} w-full mt-20 border-t border-[#D3CCC9] bg-white text-[#4A4A4A]`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* 1. Brand & Contact Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex gap-3 justify-center items-center">
              <span className="text-2xl font-semibold tracking-wide uppercase">
                La Crosta
              </span>
              <Image src={logo} alt="La Crosta logo" width={70} height={70} />
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-sm italic tracking-wide text-gray-500">
                Authentic Dining Experience
              </p>
              <a 
                href="tel:+995585888846" 
                className="flex items-center gap-2 text-sm hover:text-[#A04501] transition-colors duration-300"
              >
                <Phone size={14} />
                +995 585 88 88 46
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Navigation</h4>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm uppercase tracking-widest">
              <Link href="/about" className="hover:text-[#A04501] transition-colors border-b border-transparent hover:border-[#A04501]">
                About
              </Link>
              <Link href="/menus/all" className="hover:text-[#A04501] transition-colors border-b border-transparent hover:border-[#A04501]">
                Menu
              </Link>
              <Link href="/contact" className="hover:text-[#A04501] transition-colors border-b border-transparent hover:border-[#A04501]">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex flex-col items-center md:items-end space-y-2">
              <p className="text-sm font-medium italic underline underline-offset-4 decoration-[#D3CCC9]">
                Open Daily: 10:00 AM - 11:00 PM
              </p>
            </div>
            
            <div className="flex gap-5">
              <Link target="_blank" href="https://www.instagram.com/pizzeria_lacrosta/" className="transform hover:-translate-y-1 transition-all">
                <Instagram size={20} />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/p/La-Crosta-%E1%83%9A%E1%83%90-%E1%83%99%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%A2%E1%83%90-61573035490565/" className="transform hover:-translate-y-1 transition-all">
                <Facebook size={20} />
              </Link>
              <Link target="_blank" href="https://www.tiktok.com/@pizzeria_lacrosta" className="transform hover:-translate-y-1 transition-all">
                <Image src={tiktok} alt="tiktok icon" className="w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gray-400">
          <p>© 2024 La Crosta. All Rights Reserved.</p>
          <p className="hidden md:block">Gourmet Italian Cuisine</p>
        </div>
      </div>

      <div className="w-full h-1.5 bg-[#A04501]" />
    </footer>
  );
};

export default Footer;