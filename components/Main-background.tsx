"use client";
import Image from "next/image";
import banner from "@/public/assets/banner.png";
import background from "@/public/assets/mainImage.jpg";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowDown, ChefHat } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

const MainBackground = () => {
  const t = useTranslations("Hero");

  const locale = useLocale();

  return (
    <div className="flex relative justify-center w-full h-screen">
      <Image
        src={background}
        alt="background"
        priority
        className="z-10 absolute top-0 w-full h-screen object-cover brightness-80"
      />
      <div className="absolute flex flex-col z-50 items-center gap-15 top-50">
        <div className="flex flex-col justify-between items-center text-center">
          <div className="flex justify-center items-center text-white w-fit border border-white/20 bg-white/10 p-2 px-4 rounded-full mb-6">
            <span className="flex items-center gap-2 text-sm">
              <ChefHat width={20} />
              {t("est")}
            </span>
          </div>
          <div className={`${CormorantGaramond.className} font-middle text-white lg:text-[110px] md:text-[80px] sm:text-[70px] text-[50px] leading-tight, ${locale === "en" && "font-bold"} `}>
            <span className="block">{t("title_top")}</span>
            <span className="hidden md:block">{t("title_bottom")}</span>
          </div>
          <p className="text-[#e6e9e4] text-lg sm:text-xl max-w-md mt-4">
            {t("subtext")}
          </p>
        </div>
        <Link
          href="#main"
          className={`${CormorantGaramond.className} font-medium text-[24px] h-14 flex justify-center items-center text-black bg-white w-72 px-3 gap-2.5 rounded-[50px] hover:bg-gray-100 transition-colors`}
        >
          <span>{t("cta")}</span>
          <ArrowDown className="w-6 h-6" />
        </Link>
      </div>
      <div className="absolute z-50 -bottom-12.5">
        <Image src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default MainBackground;