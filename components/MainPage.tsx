"use client";
import { menuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { useTranslations } from "next-intl";
import MainBackground from "@/components/Main-background";
import { ArrowRight } from "lucide-react";
import Styles from "@/styles/Main.module.css";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

const MainPage = () => {
  const t = useTranslations("Menu");
  const tData = useTranslations("MenuData");

  const { menu } = menuData;

  return (
    <>
      <MainBackground />
      <section id="main">
        <div
          className={`${CormorantGaramond.className} pt-20 flex flex-col items-center justify-center w-full`}
        >
          <header className="text-[30px] sm:text-[64px] flex flex-col items-center text-center leading-tight pb-10">
            <span>{t("discover")}</span>
            <span>{t("title")}</span>
          </header>

          {Object.entries(menu).map(([key, items]) => (
            <section key={key} className="w-full mb-20">
              <div className={`${Styles.sectionHeader} flex justify-center`}>
                <div className="w-full pt-20 px-5 sm:px-10 md:px-20 lg:px-32 flex items-center justify-between">
                  <span className="text-[40px] sm:text-[50px] pb-4">
                    {t(`categories.${key}`)}
                  </span>
                  <Link
                    href={`/menus/${key.toLowerCase()}`}
                    className="cursor-pointer hover:underline flex items-center gap-1 text-lg group transition-all"
                  >
                    {t("see_more")}
                    <ArrowRight className="w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative opacity-10 italic w-full text-[150px] lg:text-[200px] text-gray-300 font-bold overflow-hidden h-40">
                <span className="absolute lg:block hidden -top-10 right-1/10 whitespace-nowrap">
                  {t(`categories.${key}`)}
                </span>
              </div>

              <div className="w-full px-5 sm:px-10 md:px-20 lg:px-32 mx-auto relative">
                <div className="flex flex-col lg:block relative">
                  {/* First Item Block */}
                  <div className="lg:w-[70%] mb-10 lg:mb-0">
                    {items.slice(1, 2).map((item, index) => (
                      <div
                        className={`${Styles.revealLeft} ${Styles.menuCard} flex flex-col md:flex-row gap-6 p-6`}
                        key={item.id}
                      >
                        <div
                          className={`${Styles.imageWrapper} md:w-2/5 shrink-0`}
                        >
                          <Image
                            src={item.image}
                            alt={tData(`${item.id}.title`)}
                            className={`${Styles.imageZoom} object-cover w-full h-full rounded`}
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="flex flex-col justify-center gap-4 md:w-3/5">
                          <div className={Styles.priceTag}>
                            <p className="text-2xl font-medium">
                              ₾{item.price.toFixed(2)}
                            </p>
                          </div>
                          <h3 className="text-[28px] sm:text-[32px] font-semibold">
                            {tData(`${item.id}.title`)}
                          </h3>
                          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {tData(`${item.id}.description`)}
                          </p>
                          <span className="border-b-2 border-b-[#E32929] w-20" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Second Item Block (Right Aligned) */}
                  <div className="lg:w-[70%] lg:absolute lg:right-0 pt-10 pb-10 lg:pb-0 z-10">
                    {items.slice(2, 3).map((item) => (
                      <div
                        className={`${Styles.revealRight} ${Styles.menuCard} flex flex-col md:flex-row gap-6 p-6`}
                        key={item.id}
                      >
                        <div className="flex flex-col justify-center gap-4 md:w-3/5 md:order-1">
                          <div className={Styles.priceTag}>
                            <p className="text-2xl font-medium">
                              ₾{item.price.toFixed(2)}
                            </p>
                          </div>
                          <h3 className="text-[28px] sm:text-[32px] font-semibold">
                            {tData(`${item.id}.title`)}
                          </h3>
                          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {tData(`${item.id}.description`)}
                          </p>
                          <span className="border-b-2 border-b-[#E32929] w-20" />
                        </div>
                        <div
                          className={`${Styles.imageWrapper} md:w-2/5 shrink-0 md:order-2`}
                        >
                          <Image
                            src={item.image}
                            alt={tData(`${item.id}.title`)}
                            className={`${Styles.imageZoom} object-cover w-full h-full rounded`}
                            width={300}
                            height={300}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Third Item Block & Sidebar Description */}
                  <div className="lg:w-[70%] lg:pt-95 2xl:pt-110 ">
                    {items.slice(0, 1).map((item) => (
                      <div
                        className={`${Styles.revealLeft} ${Styles.menuCard} flex flex-col md:flex-row gap-6 p-6`}
                        key={item.id}
                      >
                        <div
                          className={`${Styles.imageWrapper} md:w-2/5 shrink-0`}
                        >
                          <Image
                            src={item.image}
                            alt={tData(`${item.id}.title`)}
                            className={`${Styles.imageZoom} object-cover w-full h-full rounded`}
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="flex flex-col justify-center gap-4 md:w-3/5">
                          <div className={Styles.priceTag}>
                            <p className="text-2xl font-medium">
                              ₾{item.price.toFixed(2)}
                            </p>
                          </div>
                          <h3 className="text-[28px] sm:text-[32px] font-semibold">
                            {tData(`${item.id}.title`)}
                          </h3>
                          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {tData(`${item.id}.description`)}
                          </p>
                          <span className="border-b-2 border-b-[#E32929] w-20" />
                        </div>
                      </div>
                    ))}

                    <div className="hidden lg:flex lg:col-span-4 lg:col-start-8 lg:row-start-1 pt-20 px-8">
                      <div className="space-y-6">
                        <p className="text-[#1A1A1A]/60 italic text-xl leading-relaxed border-l-2 border-[#C5A02E] pl-6">
                          {t("description_template", {
                            category: t(`categories.${key}`).toLowerCase(),
                          })}
                        </p>
                        <div className="flex items-center gap-4 text-[#C5A02E]">
                          <span className="text-[10px] uppercase tracking-widest font-sans font-bold">
                            {t("signature")}
                          </span>
                          <div className="w-12 h-px bg-[#C5A02E]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainPage;
