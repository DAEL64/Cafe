import { Cormorant_Garamond } from "next/font/google";

import Image from "next/image";
import phone from "@/public/assets/ion_call.png";

import Link from "next/link";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

const Header = () => {
  const navigation = [
    { label: "Home", url: "/" },
    { label: "Menus", url: "/menus/all" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <>
      <div
        className={`${CormorantGaramond.className} font-bold absolute md:hidden text-white text-2xl flex items-center z-50 top-5 left-5`}
      >Café</div>
      <div className="h-fit md:flex relative md:absolute inset-0 px-12.5 text-white top-0 z-50 pt-10 hidden w-full justify-between items-center">
        <div className="gap-20 flex justify-between items-center">
          <div className={`${CormorantGaramond.className} font-bold`}>
            <Link
              href="/"
              className="text-[36px] transition-all flex gap-4 "
            >
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
          <div className="flex items-center gap-2.75">
            <Image src={phone} alt="phone" className="w-4 h-4" />
            <p>+ 599 435 321</p>
          </div>
          <div className="flex text-center border-l h-9.75 border-white"></div>
          <Link href="/book" className="flex items-center group relative">
            Book Table
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
