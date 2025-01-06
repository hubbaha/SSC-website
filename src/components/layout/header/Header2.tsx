import { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";

// Define the type for the props
interface Header2Props {
  scroll: number;
  handlePopup: () => void;
  handleMobileMenu: () => void;
  isMobileMenu?: boolean;
  isSidebar?: boolean;
  handleSidebar?: () => void;
}

export default function Header2({
  scroll,
  handlePopup,
  handleMobileMenu,
  isSidebar,
  handleSidebar,
}: Header2Props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="relative w-full bg-transparent z-[1000]">
        {/* Top Bar */}
        <div className="bg-fixnix-darkpurple py-2">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Welcome Text */}
            <p className="text-white text-base font-sans">
              Welcome To Sufi Science Centre-Kashmir Chapter
            </p>

            {/* Social Sharing */}
            <div className="flex items-center space-x-4">
              <p className="text-white text-base font-semibold">Social Sharing</p>
              <div className="flex space-x-3">
                {/* Social Icons */}
                <Link
                  href="#"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-pinterest-p"></i>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center h-9 w-9 bg-fixnix-white text-fixnix-darkpurple rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav className={`bg-fixnix-white z-[1200] ${scrollPosition > 0 ? "fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300" : ""}`}>
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between p-4">
              {/* Logo Section */}
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Image
                    src="/assets/images/resources/logo-3.png"
                    alt="Sufi Science Centre Logo"
                    width={110}
                    height={110}
                    className="h-28 w-28"
                  />
                </Link>
                <span className="text-fixnix-darkpurple font-bold text-[40px] leading-none font-serif whitespace-nowrap">
                  Sufi Science Centre-Kashmir Chapter
                </span>
              </div>

              {/* Donate Button */}
              <div className="flex items-center ml-auto">
                <Link
                  href="appointment"
                  className="h-11 inline-flex items-center justify-center bg-fixnix-lightpurple text-white font-bold rounded-lg transition-colors duration-300 hover:bg-fixnix-darkpurple py-4 px-6 whitespace-nowrap text-base sm:text-sm md:text-xs lg:text-sm"
                >
                  Get Membership
                </Link>
              </div>

              {/* Slogan */}
              <p className="italic text-gray-600 text-sm ml-[130px] -mt-[60px]">
                A Harmony of Knowledge and Inner Peace: The Next Generation Sufi Way Forward
              </p>

              <div>
                <div className="flex mt-4 -mb-2 items-center">
                  <Link
                    href="#"
                    className="mobile-nav__toggler text-2xl text-fixnix-darkpurple sm:block lg:hidden"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>

                  <Menu />
                  <Link
                    href="Cart"
                    className="text-2xl pl-5 text-fixnix-lightpurple transition-all duration-500 ease-in-out hover:text-fixnix-darkpurple"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>

                {/* Search and Cart Button Box */}
                <div className="flex items-center ml-16">
                  {/* Search Box */}
                  <div className="relative flex items-center">
                    <Link
                      href="#"
                      className="text-2xl text-fixnix-lightpurple transition-all duration-500 ease-in-out hover:text-fixnix-darkpurple"
                      onClick={handlePopup}
                    >
                      <i className="icon-search-interface-symbol"></i>
                    </Link>
                  </div>

                  {/* Cart Box */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Conditionally render MobileMenu based on props */}
      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        isSidebar={isSidebar ?? false}
        handleSidebar={handleSidebar ?? (() => {})}
      />

      {/* Sticky Header (for scroll behavior) */}
      <div
        className={`transition-all duration-300 ${scrollPosition > 0 ? "fixed top-0 left-0 w-full bg-white shadow-md z-[1200]" : ""}`}
      >
        {/* <div className="sticky-header__content">
          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="container">
                <div className="main-menu-two__wrapper-inner">
                  <div className="main-menu-two__left">
                    <div className="main-menu-two__logo">
                      <Link href="/">
                        <img
                          src="assets/images/resources/logo-3.png"
                          alt="Sufi Science Centre Logo"
                          width={80}
                          height={80}
                        />
                      </Link>
                      <span className="main-menu-two__website-name">
                        Sufi Science Centre-Kashmir Chapter
                      </span>

                      <div className="main-menu-two__btn-box">
                        <Link href="appointment" className="thm-btn main-menu-two__btn">
                          Donate now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="main-menu-two__right">
                    <div className="main-menu-two__main-menu-box">
                      <Link
                        href="#"
                        className="mobile-nav__toggler"
                        onClick={handleMobileMenu}
                      >
                        <i className="fa fa-bars"></i>
                      </Link>
                      <Menu />
                    </div>
                    <div className="main-menu-two__search-cart-btn-box">
                      <div className="main-menu-two__search-box">
                        <Link
                          href="#"
                          className="main-menu-two__search search-toggler icon-search-interface-symbol"
                          onClick={handlePopup}
                        ></Link>
                      </div>
                      <div className="main-menu-two__cart-box">
                        <Link href="Cart" className="main-menu-two__cart fas fa-shopping-cart"></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div> */}
      </div>
    </>
  );
}
