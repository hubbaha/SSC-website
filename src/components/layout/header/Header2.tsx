import { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";

interface Header2Props {
  scroll: number;
  handlePopup: () => void;
  handleMobileMenu: () => void;
  isMobileMenu: boolean;
  isSidebar?: boolean;
  handleSidebar?: () => void;
}

const Header2: React.FC<Header2Props> = ({
  scroll,
  handlePopup,
  handleMobileMenu,
  isSidebar,
  isMobileMenu,
  handleSidebar,
}: Header2Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);
    setIsSticky(currentScrollPosition > 100); // Adjust "100" based on the height of your main header
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
        <div className="bg-fixnix-darkpurple py-2 lg:block hidden">
          <div className="container mx-auto flex items-center justify-between px-4">
            <p className="text-white text-base font-sans">
              Welcome To Sufi Science Centre-Kashmir Chapter
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-white text-base font-semibold">Social Sharing</p>
              <div className="flex space-x-3">
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

        {/* Main Header */}
        <nav className="bg-fixnix-white z-[1200]">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Image
                    src="/assets/images/resources/logo-3.png"
                    alt="Sufi Science Centre Logo"
                    width={110}
                    height={110}
                    className="responsive-logo"
                  />
                </Link>
                <span className="text-fixnix-darkpurple font-bold text-[40px] leading-none font-serif whitespace-nowrap responsive-website-name">
                  Sufi Science Centre-Kashmir Chapter
                </span>
              </div>
              <div className="flex items-center ml-auto">
                <Link
                  href="appointment"
                  className="h-11 items-center justify-center bg-fixnix-lightpurple text-white font-bold rounded-lg transition-colors duration-300 hover:bg-fixnix-darkpurple py-3 px-6 whitespace-nowrap text-base sm:text-sm md:text-xs lg:text-sm hidden sm:block"
                >
                  Get Membership
                </Link>
              </div>

              <p className="italic text-gray-600 text-center responsive-tagline">
                A Harmony of Knowledge and Inner Peace: The Next Generation Sufi Way Forward
              </p>

              {/* Mobile and Desktop Navigation */}
              <div className="flex items-center gap-4">
                <div className="flex items-center mt-4 -mb-2">
                  <Link
                    href="#"
                    className="mobile-nav__toggler text-xl sm:text-md md:text-2xl text-fixnix-darkpurple sm:block lg:hidden"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu />
                  <Link
                    href="Cart"
                    className="text-xl px-2 sm:text-md md:text-2xl text-fixnix-lightpurple transition-all duration-500 ease-in-out hover:text-fixnix-darkpurple"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </Link>

                </div>

                {/* Search Icon */}
                <div className="flex items-center">
                  <div className="relative flex items-center">
                    <Link
                      href="#"
                      className="text-2xl text-fixnix-lightpurple transition-all duration-500 ease-in-out hover:text-fixnix-darkpurple"
                      onClick={handlePopup}
                    >
                      <i className="<FaSearch />"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

     {/* Sticky Header */}
{isSticky && (
  <div className="fixed top-0 left-0 w-full bg-white shadow-md z-[1200] transition-all duration-300 sm:hidden lg:hidden md:block xl:block">
    <div className="flex items-center justify-between p-4">
      <Link href="/">
        <Image
          src="/assets/images/resources/logo-3.png"
          alt="Sufi Science Centre Logo"
          width={55}
          height={55}
        />
      </Link>
            <Menu />
            <Link
              href="Cart"
              className="text-xl text-fixnix-lightpurple transition-all duration-500 ease-in-out  hover:text-fixnix-darkpurple"
            >
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      )}

<MobileMenu
        isSidebar={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        handleSidebar={handleSidebar || (() => {})}
      />
    </>
  );
};
export default Header2;
