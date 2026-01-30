import { menuData } from "@/data/menuData";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import MainBackground from "@/components/Main-background";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

const MainPage = () => {
  const { menu } = menuData;

  const categoryLabels: Record<string, { label: string; slug: string }> = {
    Pizzas: { label: "Pizzas", slug: "pizzas" },
    Sides: { label: "Sides", slug: "sides" },
    Hot_Drinks: { label: "Hot Drinks", slug: "hot-drinks" },
    Cold_Drinks: { label: "Cold Drinks", slug: "cold-drinks" },
    Desserts: { label: "Desserts", slug: "desserts" },
    Milkshakes: { label: "Milkshakes", slug: "milkshakes" },
  };

  return (
    <>
      <MainBackground />
      <section id="main">
        <div
          className={`${CormorantGaramond.className} pt-20 flex flex-col items-center justify-center w-full`}
        >
          <header className="text-[20px] sm:text-[64px] flex flex-col items-center text-center leading-tight pb-10">
            <span>Discover</span>
            <span>Our Dining Menu</span>
          </header>

          {Object.entries(menu).map(([key, items]) => (
            <section key={key} className="w-full">
              <div className="flex justify-center">
                <div className="w-full pt-20 px-5 sm:px-15 md:px-30 flex items-center justify-between">
                  <span className="text-[50px] pb-4">
                    {categoryLabels[key]?.label || key}
                  </span>
                  <Link
                    href={`/menus/${categoryLabels[key]?.slug || key.toLowerCase()}`}
                    className="cursor-pointer hover:underline flex items-center gap-1 text-lg"
                  >
                    see more
                    <ArrowRight className="w-4" />
                  </Link>
                </div>
              </div>

              <div className="w-full px-5 sm:px-15 md:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {items.map((item) => (
                  <div
                    className="flex flex-col items-center pb-5 w-full border border-[#D3CCC9]"
                    key={item.id}
                  >
                    <div className=" w-full ">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="object-contain w-full"
                      />
                    </div>
                    <div className="flex gap-6.25 w-7/10 flex-col py-5 items-center">
                      <p className="text-3xl text-gray-600">
                        ₾{item.price.toFixed(2)}
                      </p>

                      <span className="text-[32px] font-semibold">
                        {item.title}
                      </span>
                      <span className="flex text-center text-lg">
                        {item.description}
                      </span>
                    </div>
                    <span className="border-b-2 border-b-[#D3CCC9] w-1/3" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainPage;
