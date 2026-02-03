import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import dough from "@/public/assets/dough_prep.webp";
import { useTranslations } from "next-intl";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const AboutPage = () => {
  const t = useTranslations("About");

  return (
    <div className={`${cormorant.className} w-full pb-20`}>
      <section className="relative h-[60vh] flex items-center justify-center bg-stone-900">
        <div className="relative text-center text-white px-5">
          <h1 className="text-5xl md:text-7xl mb-4 italic">
            {t("hero_title")}
          </h1>
          <p className="text-xl uppercase tracking-[0.2em]">{t("hero_sub")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-20 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#A04501] font-semibold tracking-widest uppercase text-sm">
            {t("philosophy_tag")}
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">
            {t("philosophy_title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t("philosophy_p1")}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("philosophy_p2")}
          </p>
        </div>
        <div className="relative h-125 border border-[#D3CCC9] p-4">
          <Image src={dough} alt="Dough prep" fill className="object-cover" />
        </div>
      </section>

      <section className="bg-stone-50 py-20 border-y border-[#D3CCC9]">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl mb-4 border-b border-[#A04501] inline-block pb-1">
              {t("flour_title")}
            </h3>
            <p className="text-gray-600">{t("flour_desc")}</p>
          </div>
          <div>
            <h3 className="text-2xl mb-4 border-b border-[#A04501] inline-block pb-1">
              {t("time_title")}
            </h3>
            <p className="text-gray-600">{t("time_desc")}</p>
          </div>
          <div>
            <h3 className="text-2xl mb-4 border-b border-[#A04501] inline-block pb-1">
              {t("temp_title")}
            </h3>
            <p className="text-gray-600">{t("temp_desc")}</p>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="text-4xl mb-8">{t("cta_title")}</h2>
        <a
          href="/menus/all"
          className="bg-[#A04501] text-white px-12 py-4 rounded-full text-lg hover:bg-stone-800 transition-colors inline-block"
        >
          {t("cta_button")}
        </a>
      </section>
    </div>
  );
};

export default AboutPage;