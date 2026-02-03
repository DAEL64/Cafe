"use client";
import { Cormorant_Garamond } from "next/font/google";
import { useTranslations } from "next-intl";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const BookTablePage = () => {
  const t = useTranslations("Booking");

  return (
    <div className={`${cormorant.className} min-h-screen pt-40 pb-20 px-5`}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-[#A04501] uppercase tracking-[0.3em] text-sm font-semibold">{t("tag")}</span>
        <h1 className="text-5xl md:text-6xl mt-4 mb-6">{t("title")}</h1>
        <p className="text-gray-600 text-lg italic">{t("sub")}</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-[#D3CCC9] rounded-[40px] p-8 md:p-16 shadow-sm">
        <form className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">{t("labels.name")}</label>
              <input type="text" placeholder="John Doe" className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">{t("labels.email")}</label>
              <input type="email" placeholder="john@example.com" className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">{t("labels.date")}</label>
              <input type="date" className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">{t("labels.time")}</label>
              <input type="time" className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">{t("labels.guests")}</label>
              <input type="number" min="1" max="8" placeholder="2" className="border border-[#D3CCC9] p-4 rounded-2xl focus:outline-none focus:border-[#A04501] transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-wider text-gray-500 ml-2">{t("labels.requests")}</label>
            <textarea placeholder={t("placeholders.requests")} rows={5} className="border border-[#D3CCC9] p-6 rounded-[35px] focus:outline-none focus:border-[#A04501] transition-colors resize-none" />
          </div>

          <button className="w-full bg-[#E32929]/80 hover:bg-[#E32929]/85 text-white py-5 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-md uppercase tracking-widest">
            {t("button")}
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-8 italic">{t("policy")}</p>
      </div>
    </div>
  );
};

export default BookTablePage;