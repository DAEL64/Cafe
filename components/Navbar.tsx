"use client";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { useTranslations, useLocale } from "next-intl";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ka" : "en";
    const newPath = pathname!.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <>
      <div className="lg:hidden absolute top-10 right-6 z-100 flex items-center gap-4">
        <button onClick={toggleLanguage} className="text-white text-sm uppercase border border-white/20 px-2 py-1 rounded">
          {locale === "en" ? "KA" : "EN"}
        </button>
        <button onClick={toggleSidebar} className="text-white p-2">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/93 z-90 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <Link
          onClick={toggleSidebar}
          href="/"
          className={`${CormorantGaramond.className} font-bold text-5xl text-white flex w-full justify-center pt-15`}
        >
          {t("logo")}
        </Link>
        <div
          className={`${CormorantGaramond.className} flex flex-col items-center pt-30 gap-8 text-white text-3xl`}
        >
          <Link href="/" onClick={toggleSidebar}>{t("home")}</Link>
          <Link href="/menus/all" onClick={toggleSidebar}>{t("menus")}</Link>
          <Link href="/about" onClick={toggleSidebar}>{t("about")}</Link>
          <Link href="/book" onClick={toggleSidebar}>{t("book_table")}</Link>
          <Link href="/contact" onClick={toggleSidebar}>{t("contact")}</Link>
          
          <button onClick={toggleLanguage} className="mt-10 flex items-center gap-2 text-xl border-t border-white/20 pt-4 w-1/2 justify-center">
            <Globe size={20} />
            {locale === "en" ? "ქართული" : "English"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;