import { menuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { useTranslations } from "next-intl"; // 1. Import hook
import MainBackground from "@/components/Main-background";
import { ArrowRight } from "lucide-react";
import Styles from "@/styles/Main.module.css";

// Updated font to include Georgian subset
const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"], 
});

const MainPage = () => {
  const t = useTranslations("Menu"); 
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
                    href="/menus/all"
                    className="cursor-pointer hover:underline flex items-center gap-1 text-lg group transition-all"
                  >
                    {t("see_more")}
                    <ArrowRight className="w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="relative opacity-30 italic w-full text-[200px] text-gray-300 font-bold">
                <span className="absolute lg:block hidden -top-50 right-1/10">
                   {t(`categories.${key}`)}
                </span>
              </div>

              <div className="w-full px-5 sm:px-10 md:px-20 lg:px-32 mx-auto relative">
                <div className="flex flex-col lg:block relative">
                  <div className="lg:w-[70%] mb-10 lg:mb-0">
                    {items.slice(1, 2).map((item, index) => (
                      <div
                        className={`${Styles.revealLeft} ${Styles.menuCard} flex flex-col md:flex-row gap-6 p-6 rounded-lg`}
                        key={item.id}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className={`${Styles.imageWrapper} md:w-2/5 shrink-0`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
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
                            {item.title}
                          </h3>

                          <p
                            className={`${Styles.descriptionText} text-base sm:text-lg text-gray-600 leading-relaxed`}
                          >
                            {item.description}
                          </p>

                          <span
                            className={`${Styles.dividerLine} border-b-2 border-b-[#E32929]`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:w-[70%] lg:absolute lg:right-0 pt-10 pb-10 lg:pb-0 z-10">
                    <div className="hidden lg:flex lg:absolute lg:-left-60 xl:-left-80 bottom-1/4 lg:col-span-2 lg:col-start-6 lg:row-start-1 items-start pt-60 justify-center z-10">
                      <div className="p-4 text-center border-y border-[#C5A02E]/30">
                        <span className="block font-sans text-[11px] tracking-[0.3em] uppercase text-[#1A1A1A]/60 mb-2">
                          {t("curated")}
                        </span>
                        <div className="w-px h-12 bg-[#C5A02E] mx-auto mb-2" />
                        <span className="italic text-[#C5A02E] text-xl">&</span>
                      </div>
                    </div>
                    {items.slice(2, 3).map((item) => (
                      <div
                        className={`${Styles.revealRight} ${Styles.menuCard} flex flex-col md:flex-row gap-6 p-6 rounded-lg`}
                        key={item.id}
                      >
                        <div className="flex flex-col justify-center gap-4 md:w-3/5 md:order-1">
                          <div className={Styles.priceTag}>
                            <p className="text-2xl font-medium">
                              ₾{item.price.toFixed(2)}
                            </p>
                          </div>

                          <h3 className="text-[28px] sm:text-[32px] font-semibold">
                            {item.title}
                          </h3>

                          <p
                            className={`${Styles.descriptionText} text-base sm:text-lg text-gray-600 leading-relaxed`}
                          >
                            {item.description}
                          </p>

                          <span
                            className={`${Styles.dividerLine} border-b-2 border-b-[#E32929]`}
                          />
                        </div>
                        <div
                          className={`${Styles.imageWrapper} md:w-2/5 shrink-0 md:order-2`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            className={`${Styles.imageZoom} object-cover w-full h-full rounded`}
                            width={300}
                            height={300}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:w-[70%] lg:pt-95 2xl:pt-110 ">
                    {items.slice(0, 1).map((item, index) => (
                      <div
                        className={`${Styles.revealLeft} ${Styles.menuCard} flex flex-col md:flex-row gap-6 p-6 rounded-lg`}
                        key={item.id}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className={`${Styles.imageWrapper} md:w-2/5 shrink-0`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
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
                            {item.title}
                          </h3>

                          <p
                            className={`${Styles.descriptionText} text-base sm:text-lg text-gray-600 leading-relaxed`}
                          >
                            {item.description}
                          </p>

                          <span
                            className={`${Styles.dividerLine} border-b-2 border-b-[#E32929]`}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="hidden lg:flex lg:col-span-4 lg:col-start-8 lg:row-start-1 pt-40 px-8">
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