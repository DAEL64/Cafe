import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

import dough from "@/public/assets/dough_prep.webp"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const AboutPage = () => {
  return (
    <div className={`${cormorant.className} w-full pb-20`}>
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-stone-900">
        <div className="absolute inset-0 opacity-50">
        </div>
        <div className="relative text-center text-white px-5">
          <h1 className="text-5xl md:text-7xl mb-4 italic">The Secret is in the Science</h1>
          <p className="text-xl uppercase tracking-[0.2em]">Crafting the perfect crust since 2018</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-20 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#A04501] font-semibold tracking-widest uppercase text-sm">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">Beyond the Traditional Neapolitan</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Café, we believe the crust isn't just a vessel for toppings—it is the main event. 
            Named after the Italian word for "the crust," our pizzeria was born from a singular 
            obsession: achieving the perfect 72-hour cold-fermented dough.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By combining high-hydration techniques with traditional wood-fired methods, we create 
            a crust that is airy, charred, and rich with complex flavor notes.
          </p>
        </div>
        <div className="relative h-125 border border-[#D3CCC9] p-4">
          <Image 
            src={dough} 
            alt="Dough prep" 
            fill 
            className="object-cover hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      <section className="bg-stone-50 py-20 border-y border-[#D3CCC9]">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl mb-4 border-b border-[#A04501] inline-block pb-1">00 Flour</h3>
            <p className="text-gray-600">Sourced directly from the Caputo mills in Naples for that signature silky texture.</p>
          </div>
          <div>
            <h3 className="text-2xl mb-4 border-b border-[#A04501] inline-block pb-1">72 Hours</h3>
            <p className="text-gray-600">The time we give our dough to develop its unique "leopard spotting" and light airiness.</p>
          </div>
          <div>
            <h3 className="text-2xl mb-4 border-b border-[#A04501] inline-block pb-1">900 Degrees</h3>
            <p className="text-gray-600">The exact temperature of our oven to lock in moisture while creating a crispy exterior.</p>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="text-4xl mb-8">Ready to taste the difference?</h2>
        <a 
          href="/menus/all" 
          className="bg-[#A04501] text-white px-12 py-4 rounded-full text-lg hover:bg-stone-800 transition-colors inline-block"
        >
          View Our Menu
        </a>
      </section>
    </div>
  );
};

export default AboutPage;