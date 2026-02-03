"use client";
import tiktok from "@/public/assets/tiktok-icon.png";
import { Facebook, Instagram, Phone } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Footer = () => {
  const t = useTranslations(); // Using root for multiple namespaces

  return (
    <footer
      className={`${cormorant.className} w-full mt-20 border-t border-[#D3CCC9] bg-white text-[#4A4A4A]`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <span className="text-4xl font-semibold tracking-wide uppercase">
              {t("Navigation.logo")}
            </span>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-xl italic text-gray-500">
                {t("Footer.tagline")}
              </p>
              <a
                href="tel:+995585888846"
                className="flex items-center gap-2 hover:text-[#A04501] transition-colors"
              >
                <Phone size={14} /> +995 585 88 88 46
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <h4 className="text-lg uppercase tracking-[0.2em] font-bold text-gray-400">
              {t("Footer.nav_title")}
            </h4>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-md uppercase tracking-widest">
              <Link href="/about" className="hover:text-[#A04501] hover:border-b hover:border-b-[#A04501]">
                {t("Navigation.about")}
              </Link>
              <Link href="/menus/all" className="hover:text-[#A04501] hover:border-b hover:border-b-[#A04501]">
                {t("Navigation.menus")}
              </Link>
              <Link href="/contact" className="hover:text-[#A04501] hover:border-b hover:border-b-[#A04501]">
                {t("Navigation.contact")}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <p className="text-md font-medium italic underline underline-offset-4 decoration-[#D3CCC9]">
              {t("Footer.hours")}
            </p>
            <div className="flex gap-5">
              <Link
                target="_blank"
                href="#"
                className="hover:-translate-y-1 transition-all"
              >
                <Instagram size={20} />
              </Link>
              <Link
                target="_blank"
                href="#"
                className="hover:-translate-y-1 transition-all"
              >
                <Facebook size={20} />
              </Link>
              <Link
                target="_blank"
                href="#"
                className="hover:-translate-y-1 transition-all"
              >
                <Image src={tiktok} alt="tiktok" className="w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] uppercase tracking-[0.3em] text-gray-400">
          <p>{t("Footer.rights")}</p>
          <p className="hidden md:block">{t("Footer.sub_rights")}</p>
        </div>
      </div>
      <div className="w-full h-1.5 bg-[#A04501]" />
    </footer>
  );
};

export default Footer;
