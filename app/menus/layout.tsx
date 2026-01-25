"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuImage from "@/public/assets/menuImage.png";
import { ArrowDown } from "lucide-react";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const categories = [
    { label: "All", href: "/menus/all" },
    { label: "Pizzas", href: "/menus/pizzas" },
    { label: "Sides", href: "/menus/sides" },
    { label: "Cold Drinks", href: "/menus/coldDrinks" },
    { label: "Hot Drinks", href: "/menus/hotDrinks" },
    { label: "Desserts", href: "/menus/desserts" },
    { label: "Milkshakes", href: "/menus/milkshakes" },
  ];

  return (
    <div className="w-full flex flex-col">
      <Image src={menuImage} alt="menu background" className="w-full" />

      <div className="px-5 sm:px-15 md:px-30 w-full pt-30">
        <ul className="flex gap-8.5 overflow-x-scroll 2xl:overflow-x-hidden pb-3 2xl:pb-0">
          {categories.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  flex items-center transition-all
                  text-sm shadow-sm border border-neutral-300 rounded-full
                  hover:bg-[#A04501] hover:text-white
                  ${isActive ? "bg-[#A04501] text-sm items-center rounded-full text-white" : "bg-transparent text-black"}
                `}
              >
                <li className="py-1 px-10 gap-3 flex items-center justify-around">
                  {item.label}
                  {isActive && <ArrowDown className="w-4" />}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <main className="mt-10">{children}</main>
    </div>
  );
};

export default MenuLayout;
