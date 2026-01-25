"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

import logo from "@/public/assets/logo.png"
import Image from "next/image";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
     
      <div className="md:hidden absolute top-6 right-6 z-100">
        <button onClick={toggleSidebar} className="text-white p-2">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/90 z-90 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className={`${CormorantGaramond.className} flex flex-col items-center justify-center h-full gap-8 text-white text-3xl`}>
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <Link href="/" onClick={toggleSidebar}>Home</Link>
          <Link href="/menus/all" onClick={toggleSidebar}>Menu</Link>
          <Link href="/about" onClick={toggleSidebar}>About</Link>
          <Link href="/contact" onClick={toggleSidebar}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;