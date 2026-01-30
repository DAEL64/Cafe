import Image from "next/image";
import banner from "@/public/assets/banner.png";
import background from "@/public/assets/mainImage.jpg";

import Link from "next/link";

import { Cormorant_Garamond } from "next/font/google";
import { ArrowDown, ChefHat } from "lucide-react";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

const MainBackground = () => {
  return (
    <>
      <div className="flex relative justify-center w-full h-screen">
        <Image
          src={background}
          alt="background image"
          priority
          className="z-10 absolute top-0 w-full h-screen object-cover brightness-80"
        />
        <div className="absolute flex flex-col z-50 items-center gap-39 md:gap-20 top-50">
          <div className="flex flex-col justify-between items-center">
            <div className="flex justify-center items-center text-white w-fit border border-white/20 bg-white/10 p-2 rounded-full">
              <span className="flex items-center gap-2">
                <ChefHat width={24} />
                EST. 2026
              </span>
            </div>
            <div
              className={`${CormorantGaramond.className} sm:flex sm:flex-col items-center justify-center font-bold text-white lg:text-[110px] md:text-[80px] sm:text-[70px] text-[30px]`}
            >
              <span className="flex justify-center leading-35">Art on a plate</span>
              <span className="hidden md:block">
                soul in every bite
              </span>
            </div>
            <div className="md:flex flex-col not-last:font-medium lg:text-[20px] sm:text-[16px]  text-[#e6e9e4] items-center justify-center">
              <span className="hidden text-center justify-center md:block">
                "Making your mornings brighter and your afternoons more social."
              </span>
              <span className="block md:hidden">
                "Making your mornings brighter and better."
              </span>
            </div>
          </div>
          <Link
            href="#main"
            className={`${CormorantGaramond.className} font-medium text-[24px] h-12.5 flex justify-center items-center text-black bg-white w-62.25 px-3 gap-2.5 rounded-[50px]`}
          >
            <span>Explore Our Menu</span>
            <ArrowDown className="w-7.5 h-7.5" />
          </Link>
        </div>
        <div className="absolute z-50 -bottom-12.5">
          <Image src={banner} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default MainBackground;
