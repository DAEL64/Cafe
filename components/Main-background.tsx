import Image from "next/image";
import banner from "@/public/assets/banner.png";
import background from "@/public/assets/mainImage.png";

import Link from "next/link";

import { Cormorant_Garamond } from "next/font/google";
import { ArrowDown } from "lucide-react";

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
          className="z-10 absolute top-0 w-full h-screen object-cover"
        />
        <div className="absolute flex flex-col z-50 items-center gap-39 top-50">
          <div className="flex flex-col justify-between gap-10">
            <div
              className={`${CormorantGaramond.className} sm:flex sm:flex-col items-center  justify-center font-bold text-white lg:text-[110px] sm:text-[40px]`}
            >
              <span className="text-[30px] md:text-[40px]">Art on a plate</span>
              <span className="leading-25 hidden md:block">soul in every bite</span>
            </div>
            <div className="md:flex flex-col not-last:font-medium lg:text-[20px] sm:text-[16px] hidden text-[#D1D2D0] items-center justify-center">
              <span>"Making your mornings brighter and your afternoons more social."</span>
            </div>
          </div>
          <Link href="/Menu"
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
