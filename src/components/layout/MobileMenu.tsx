import Link from "next/link";
import Image from "next/image";  // Importing the Next.js Image component
import { useState } from "react";

interface MobileMenuProps {
  isSidebar: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
}

const MobileMenu = ({
  isSidebar = false,
  handleMobileMenu,
  handleSidebar = () => {},
}: MobileMenuProps) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key: string, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-50 mobile-nav__wrapper transition-all transform -translate-x-full opacity-0 visibility-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 cursor-pointer mobile-nav__overlay"
          onClick={handleMobileMenu}
        ></div>
        <div className="relative h-full w-72 bg-darkpurple py-8 px-4 mobile-nav__content opacity-0 visibility-hidden transition-all transform -translate-x-full">
          <span
            className="absolute top-5 right-4 text-white text-lg cursor-pointer mobile-nav__close"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="mb-10">
            <Link href="/" aria-label="logo image">
              <Image
                src="/assets/images/resources/logo-1.png"  // Path to your image
                width={150}  // Set the width
                height={40}  // Set the height
                alt="Logo"
                className="w-full"
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="space-y-4 main-menu__list">
              {/* Home menu */}
              <li
                className={`${
                  isActive.key === "1" ? "current" : ""
                } dropdown`}
              >
                <Link href="/" className="text-white text-sm font-medium">
                  Home
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "1" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link href="/" className="text-white text-sm font-medium">
                      Home One
                    </Link>
                  </li>
                  <li>
                    <Link href="/Index-2" className="text-white text-sm font-medium">
                      Home Two
                    </Link>
                  </li>
                  <li>
                    <Link href="/Index-3" className="text-white text-sm font-medium">
                      Home Three
                    </Link>
                  </li>
                  <li>
                    <Link href="/Index-dark" className="text-white text-sm font-medium">
                      Home Four
                    </Link>
                  </li>
                </ul>
                <button
                  className={`${
                    isActive.key === "1" ? "expanded open" : ""
                  } text-white`}
                  onClick={() => handleToggle("1")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>

              {/* About KSSC menu */}
              <li
                className={`${
                  isActive.key === "2" ? "current" : ""
                } dropdown`}
              >
                <Link href="#" className="text-white text-sm font-medium">
                  About KSSC
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "2" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link href="/About" className="text-white text-sm font-medium">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="/OurVision" className="text-white text-sm font-medium">
                      Our Vision
                    </Link>
                  </li>
                  {/* More list items */}
                </ul>
                <button
                  className={`${
                    isActive.key === "2" ? "expanded open" : ""
                  } text-white`}
                  onClick={() => handleToggle("2")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>

              {/* Additional menu items... */}

              <li>
                <Link href="/Contact" className="text-white text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <ul className="mobile-nav__contact list-unstyled space-y-3">
            <li className="flex items-center text-sm text-dark">
              <i className="fa fa-envelope text-white bg-lightpurple p-2 rounded-full mr-2"></i>
              <Link href="mailto:needhelp@elitecons.com" className="text-white">
                needhelp@elitecons.com
              </Link>
            </li>
            <li className="flex items-center text-sm text-dark">
              <i className="fa fa-phone-alt text-white bg-lightpurple p-2 rounded-full mr-2"></i>
              <Link href="tel:666-888-0000" className="text-white">
                666 888 0000
              </Link>
            </li>
          </ul>

          {/* Social Media */}
          <div className="mobile-nav__social flex items-center space-x-4">
            <Link href="#" className="fab fa-twitter text-white text-lg hover:text-lightpurple"></Link>
            <Link href="#" className="fab fa-facebook-square text-white text-lg hover:text-lightpurple"></Link>
            <Link href="#" className="fab fa-pinterest-p text-white text-lg hover:text-lightpurple"></Link>
            <Link href="#" className="fab fa-instagram text-white text-lg hover:text-lightpurple"></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
