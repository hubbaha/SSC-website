'use client';
import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import DataBg from "../elements/DataBg";
import Breadcrumb from './Breadcrumb';
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from "./header/Header3";
import Footer1 from './footer/Footer1';
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";

declare global {
  interface Window {
    wow: any;
  }
}

interface LayoutProps {
  headerStyle?: number;
  footerStyle?: number;
  headTitle?: string;
  breadcrumbTitle?: string;
  children?: React.ReactNode;
  wrapperCls?: string;
}

const Layout: React.FC<LayoutProps> = ({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  wrapperCls,
}) => {
  const [scroll, setScroll] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopup, setPopup] = useState(false);
  const [isSidebar, setSidebar] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    if (isMobileMenu) {
      document.body.classList.remove("mobile-menu-visible");
    } else {
      document.body.classList.add("mobile-menu-visible");
    }
  };

  const handlePopup = () => setPopup(!isPopup);
  const handleSidebar = () => setSidebar(!isSidebar);

  useEffect(() => {
    import('wowjs').then((module) => {
      const WOW = module.default;
      const wow = new WOW({
        live: false,
      });
      wow.init();
    });

    const onScroll = () => {
      const scrollCheck = window.scrollY > 100 ? 1 : 0;  // Store 1 or 0 (number)
      setScroll(scrollCheck);  // No need to use `scrollCheck ? 1 : 0` because it's already a number
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
        {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
        
        {headerStyle === 1 && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
        {headerStyle === 2 && <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
        {headerStyle === 3 && <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}

        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}

        {!footerStyle && <Footer1 />}
        {footerStyle === 1 && <Footer1 />}
        {footerStyle === 2 && <Footer2 />}
        {footerStyle === 3 && <Footer3 />}
        {footerStyle === 4 && <Footer4 />}
      </div>
      <BackToTop scroll={scroll > 100} />
    </>
  );
};

export default Layout;
