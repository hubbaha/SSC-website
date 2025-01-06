import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isSidebar: boolean;                // 'isSidebar' is a boolean
  handleMobileMenu: () => void;      // 'handleMobileMenu' is a function with no arguments
  handleSidebar: () => void;         // 'handleSidebar' is a function with no arguments
}

const MobileMenu = ({
  isSidebar = false,                 // Default to false if isSidebar is undefined
  handleMobileMenu,
  handleSidebar = () => {}           // Default to a no-op function if handleSidebar is undefined
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
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img src="assets/images/resources/logo-1.png" width="150" alt="Logo" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="main-menu__list">
                <li className={isActive.key === "1" ? "dropdown current" : "dropdown"}>
                  <Link href="/">Home</Link>
                  <ul style={{ display: `${isActive.key === "1" ? "block" : "none"}` }}>
                    <li><Link href="/">Home One</Link></li>
                    <li><Link href="/Index-2">Home Two</Link></li>
                    <li><Link href="/Index-3">Home Three</Link></li>
                    <li><Link href="/Index-dark">Home Four</Link></li>
                  </ul>
                  <button className={isActive.key === "1" ? "expanded open" : ""} onClick={() => handleToggle("1")}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li className={isActive.key === "2" ? "dropdown current" : "dropdown"}>
                  <Link href="#">About KSSC</Link>
                  <ul style={{ display: `${isActive.key === "2" ? "block" : "none"}` }}>
                    <li><Link href="/About">Our Mission</Link></li>
                    <li><Link href="/OurVision">Our Vision</Link></li>
                    <li><Link href="/OurLineage">Our Lineage</Link></li>
                    <li><Link href="/WhoWeAre">Who We Are</Link></li>
                    <li><Link href="/WhatWeDo">What We Do</Link></li>
                    <li><Link href="/KashmiriSufism">Kashmiri Sufism</Link></li>
                    <li><Link href="/StyleOfKSSC">Style of KSSC</Link></li>
                  </ul>
                  <button className={isActive.key === "2" ? "expanded open" : ""} onClick={() => handleToggle("2")}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li className={isActive.key === "3" ? "dropdown current" : "dropdown"}>
                  <Link href="#">The Training Ground</Link>
                  <ul style={{ display: `${isActive.key === "3" ? "block" : "none"}` }}>
                    <li><Link href="/KashmiriSufism">Spiritual Science Initiations</Link></li>
                    <li><Link href="/ScientificExploration">Spiritual Science Openings</Link></li>
                    <li><Link href="/SpiritualSchool">Spiritual Science School</Link></li>
                    <li><Link href="/Training">Spiritual Science Training</Link></li>
                    <li><Link href="/Workshops">Spiritual Science Workshops</Link></li>
                    <li><Link href="/Leadership">Leadership in Spiritual Science</Link></li>
                  </ul>
                  <button className={isActive.key === "3" ? "expanded open" : ""} onClick={() => handleToggle("3")}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li className={isActive.key === "4" ? "dropdown current" : "dropdown"}>
                  <Link href="#">Support Us</Link>
                  <ul style={{ display: `${isActive.key === "4" ? "block" : "none"}` }}>
                    <li><Link href="/Donations">Donations</Link></li>
                    <li><Link href="/Memberships">Memberships</Link></li>
                    <li><Link href="/Volunteering">Volunteering</Link></li>
                  </ul>
                  <button className={isActive.key === "4" ? "expanded open" : ""} onClick={() => handleToggle("4")}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li className={isActive.key === "5" ? "dropdown current" : "dropdown"}>
                  <Link href="#">Sufi Science Explorer</Link>
                  <ul style={{ display: `${isActive.key === "5" ? "block" : "none"}` }}>
                    <li><Link href="/Workshops">Metaphysics & Cosmology</Link></li>
                    <li><Link href="/Conferences">Neuroscience & Psychology</Link></li>
                    <li><Link href="/EnvironmentalStewardship">Sufi Environmental Stewardship</Link></li>
                  </ul>
                  <button className={isActive.key === "5" ? "expanded open" : ""} onClick={() => handleToggle("5")}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li><Link href="/Contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:needhelp@elitecons.com">needhelp@elitecons.com</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter"></Link>
              <Link href="#" className="fab fa-facebook-square"></Link>
              <Link href="#" className="fab fa-pinterest-p"></Link>
              <Link href="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
