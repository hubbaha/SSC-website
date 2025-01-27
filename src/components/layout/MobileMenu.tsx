import Link from "next/link";
import Image from "next/image";
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
      <div
        className={`fixed inset-0 z-[2000] bg-black bg-opacity-50 transform transition-transform duration-300 ${
          isSidebar ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={handleMobileMenu}
        ></div>
        <div className="relative h-full w-72 bg-fixnix-darkpurple py-8 px-6 overflow-y-auto transition-all transform">
          <span
            className="absolute top-5 right-5 text-white text-lg cursor-pointer"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="mb-10">
            <Link href="/" aria-label="logo image">
              <Image
                src="/assets/images/resources/logo-4.png"  // Path to your image
                width={70}  // Set the width
                height={70}  // Set the height
                alt="Logo"
                className=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="space-y-4 main-menu__list">
              {/* Home menu */}
              <li className={`${isActive.key === "1" ? "current" : ""} dropdown`}>
                <Link
                  href="/"
                  className="text-white text-sm uppercase font-bold"
                  onClick={handleMobileMenu}
                >
                  Home
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "1" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home One
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Index-2"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home Two
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Index-3"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home Three
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Index-dark"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home Four
                    </Link>
                  </li>
                </ul>
                <button
                  className={`${isActive.key === "1" ? "expanded open" : ""} text-white`}
                  onClick={() => handleToggle("1")}
                  style={{
                    position: 'absolute', // Ensures the button stays in place
                    right: '1px', // Adjusts the icon position to stay on the right side
                  }}
                >

                
                  <span className="fa fa-angle-right " />
                </button>
              </li>

              {/* Discover KSSC menu */}
              <li className={`${isActive.key === "2" ? "current" : ""} dropdown`}>
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                  onClick={handleMobileMenu}
                >
                  Discover KSSC
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "2" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/OurHeritage&Identity"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Our Heritage & Identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/KashmiriSufiLegacy"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Kashmiri Sufi Legacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Purpose&Direction"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Purpose & Direction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/OurWork&Practices"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    
                    >
                      Our Work & Practices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/UnderstandingKashmiriSufism"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Understanding Kashmiri Sufism
                    </Link>
                  </li>
                </ul>
                <button
                  className={`${isActive.key === "2" ? "expanded open" : ""} text-white`}
                  onClick={() => handleToggle("2")}
                  style={{
                    position: 'absolute', // Ensures the button stays in place
                    right: '1px', // Adjusts the icon position to stay on the right side
                  }}
                
                >
                  <span className="fa fa-angle-right " />
                </button>
              </li>

              {/* Your Journey menu */}
              <li className={`${isActive.key === "3" ? "current" : ""} dropdown`}>
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                >
                  Your Journey
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "3" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/OurHeritage&Identity"
                      className="text-white text-sm font-medium"
                    >
                      Begin Your Journey
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/KashmiriSufiLegacy"
                      className="text-white text-sm font-medium"
                    >
                      Core Learning Paths
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Purpose&Direction"
                      className="text-white text-sm font-medium"
                    >
                      Growth & Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/OurWork&Practices"
                      className="text-white text-sm font-medium"
                    >
                      Leadership & Teaching
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/UnderstandingKashmiriSufism"
                      className="text-white text-sm font-medium"
                    >
                      Community & Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/UnderstandingKashmiriSufism"
                      className="text-white text-sm font-medium"
                    >
                      Resources & Support
                    </Link>
                  </li>
                </ul>
                <button
                  className={`${isActive.key === "3" ? "expanded open" : ""} text-white`}
                  onClick={() => handleToggle("3")}
                  style={{
                    position: 'absolute', // Ensures the button stays in place
                    right: '1px', // Adjusts the icon position to stay on the right side
                  }}
                
                >
                  <span className="fa fa-angle-right " />
                </button>
              </li>
              {/*Sufi science menu */}
              <li className={`${isActive.key === "4" ? "current" : ""} dropdown`}>
                <Link
                  href="#"
                  className="text-white text-sm font-bold uppercase"
                >
                  Sufi Science Explorer
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "4" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/OurHeritage&Identity"
                      className="text-white text-sm font-medium"
                    >
                     Foundational Sciences
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/KashmiriSufiLegacy"
                      className="text-white text-sm font-medium"
                    >
                      Mind & Conciousness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Purpose&Direction"
                      className="text-white text-sm font-medium"
                    >
                      Nature & Environment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/OurWork&Practices"
                      className="text-white text-sm font-medium"
                    >
                      Philosophy & Ethics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/UnderstandingKashmiriSufism"
                      className="text-white text-sm font-medium"
                    >
                      Human Sciences
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/UnderstandingKashmiriSufism"
                      className="text-white text-sm font-medium"
                    >
                      Spiritual Technologies
                    </Link>
                  </li>
                </ul>
                <button
                  className={`${isActive.key === "4" ? "expanded open" : ""} text-white`}
                  onClick={() => handleToggle("4")}
                  style={{
                    position: 'absolute', // Ensures the button stays in place
                    right: '1px', // Adjusts the icon position to stay on the right side
                  }}
                
                >
                  <span className="fa fa-angle-right " />
                </button>
              </li>
              {/* Learning center menu */}
              <li className={`${isActive.key === "5" ? "current" : ""} dropdown`}>
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                >
                  Learning Center
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "5" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/OurHeritage&Identity"
                      className="text-white text-sm font-medium"
                    >
                      Research & Publications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/KashmiriSufiLegacy"
                      className="text-white text-sm font-medium"
                    >
                      Multimedia Library
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Purpose&Direction"
                      className="text-white text-sm font-medium"
                    >
                      Digital Books Section
                    </Link>
                  </li>
                  
                </ul>
                <button
                  className={`${isActive.key === "5" ? "expanded open" : ""} text-white`}
                  onClick={() => handleToggle("5")}
                  style={{
                    position: 'absolute', // Ensures the button stays in place
                    right: '1px',
                     // Adjusts the icon position to stay on the right side
                  }}
                
                >
                  <span className="fa fa-angle-right " />
                </button>
              </li>
              {/* Sacred Gift Shop menu */}
              <li className={`${isActive.key === "6" ? "current" : ""} dropdown`}>
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                >
                  Sacred Gift Shop
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "6" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/OurHeritage&Identity"
                      className="text-white text-sm font-medium"
                    >
                      Jewelry & Acessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/KashmiriSufiLegacy"
                      className="text-white text-sm font-medium"
                    >
                      Art & Wall Decor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Purpose&Direction"
                      className="text-white text-sm font-medium"
                    >
                      Home & Living
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/OurWork&Practices"
                      className="text-white text-sm font-medium"
                    >
                      Fashion & Apparel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/UnderstandingKashmiriSufism"
                      className="text-white text-sm font-medium"
                    >
                     Wellness & Medication
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/UnderstandingKashmiriSufism"
                      className="text-white text-sm font-medium"
                    >
                      Music & Sound
                    </Link>
                  </li>
                </ul>
                <button
                  className={`${isActive.key === "6" ? "expanded open" : ""} text-white`}
                  onClick={() => handleToggle("6")}
                  style={{
                    position: 'absolute', // Ensures the button stays in place
                    right: '1px', // Adjusts the icon position to stay on the right side
                  }}
                
                >
                  <span className="fa fa-angle-right " />
                </button>
              </li>
              {/* Support Usy menu */}
              <li className={`${isActive.key === "7" ? "current" : ""} dropdown`}>
                <Link
                  href="#"
                  className="text-white text-sm font-bold uppercase"
                >
                  Support Us
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "7" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/OurHeritage&Identity"
                      className="text-white text-sm font-medium"
                    >
                      Ways to Give
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/KashmiriSufiLegacy"
                      className="text-white text-sm font-medium"
                    >
                      Volunteer With Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Purpose&Direction"
                      className="text-white text-sm font-medium"
                    >
                      Collaborations
                    </Link>
                  </li>
                  
                </ul>
                <button
                  className={`${isActive.key === "7" ? "expanded open" : ""} text-white`}
                  onClick={() => handleToggle("7")}
                  style={{
                    position: 'absolute', // Ensures the button stays in place
                    right: '1px', // Adjusts the icon position to stay on the right side
                  }}
                
                >
                  <span className="fa fa-angle-right " />
                </button>
              </li>

              {/* Additional menu items... */}
              <li>
                <Link href="/Contact" className="text-red-600 text-md font-bold">
                  GET MEMBERSHIP
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
