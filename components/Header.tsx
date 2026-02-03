"use client"

import { Cormorant_Garamond } from "next/font/google";

import Image from "next/image";
import phone from "@/public/assets/ion_call.png";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

const Header = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ka" : "en";
    const newPath = pathname!.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  const navigation = [
    { label: t("home"), url: "/" },
    { label: t("menus"), url: "/menus/all" },
    { label: t("about"), url: "/about" },
    { label: t("contact"), url: "/contact" },
  ];

  return (
    <>
      <Link
        href="/"
        className={`${CormorantGaramond.className} font-bold absolute md:hidden text-white text-2xl flex items-center z-50 top-6 left-5 py-2`}
      >
        Café
      </Link>
      <div className="h-fit md:flex relative md:absolute inset-0 px-12.5 text-white top-0 z-50 pt-10 hidden w-full justify-between items-center">
        <div className="gap-20 flex justify-between items-center">
          <div className={`${CormorantGaramond.className} font-bold`}>
            <Link href="/" className="text-[36px] transition-all flex gap-4 ">
              Café
            </Link>
          </div>

          <ul className="text-[16px] gap-7 flex">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className="relative group py-1 text-white"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:flex hidden gap-7.5 justify-end">
          <button
            onClick={toggleLanguage}
            className="text-white text-sm uppercase border border-white/20 px-2 py-1 rounded"
          >
            {locale === "en" ? "KA" : "EN"}
          </button>
          <div className="flex items-center gap-2.75">
            <Image src={phone} alt="phone" className="w-4 h-4" />
            <p>+ 599 435 321</p>
          </div>
          <div className="flex text-center border-l h-9.75 border-white"></div>
          <Link href="/book" className="flex items-center group relative">
            {t("book_table")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
