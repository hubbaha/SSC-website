import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function StickyHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? "bg-fixnix-lightpurple shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container  flex -left-1 items-center    ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/resources/logo-4.png"
            alt="Logo"
            width={60}
            height={60}
            className="transition-all duration-300 lg:ml-2  "
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex lg:pr-[32px] 2xl:pr-[70px] space-x-6">
          <Link href="/" className="text-white font-bold hover:text-fixnix-darkpurple">
            HOME
          </Link>
          <Link href="#" className="text-white font-bold hover:text-fixnix-darkpurple">
            DISCOVER SSC
          </Link>
          <Link href="#" className="text-white font-bold hover:text-fixnix-darkpurple">
            YOUR JOURNEY
          </Link>
          <Link href="#" className="text-white font-bold hover:text-fixnix-darkpurple">
            SUFI SCIENCE EXPLORER
          </Link>
          <Link href="#" className="text-white font-bold hover:text-fixnix-darkpurple">
            LEARNING CENTER
          </Link>
          <Link href="#" className="text-white font-bold hover:text-fixnix-darkpurple">
            SACRED GIFT SHOP
          </Link>
          <Link href="#" className="text-white font-bold hover:text-fixnix-darkpurple">
            SUPPORT US
          </Link>
        </nav>
      </div>
    </header>
  );
}
