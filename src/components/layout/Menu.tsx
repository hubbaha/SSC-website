import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list hidden lg:flex space-x-[43px]">
        {/* HOME */}
        <li className="dropdown megamenu relative group">
          <Link
            href="/"
            className="text-fixnix-darkpurple text-[15px] font-bold hover:text-fixnix-darkpurple"
          >
            HOME
          </Link>

          {/* Megamenu */}
          <ul className="absolute left-0 hidden h-80 -mt-2 space-y-4 group-hover:block bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpurple">
            <li>
              <section className="-mt-[31px] -mb-[31px]">
                <div className="container">
                  <div className="p-[40px] w-[500px] h-[700px] bg-white shadow-lg rounded-b-lg">
                    <div className="grid grid-cols-2 gap-[42px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                      {[1, 2, 3, 4].map((page) => (
                        <div key={page} className="col-span-1">
                          <div>
                            <div className="relative bg-fixnix-lightpurple overflow-hidden">
                              <Link
                                href={`/Index-${page === 4 ? "dark" : page}`}
                                aria-label={`View Home Page ${page}`}
                              >
                                <Image
                                  src={`/assets/images/home-showcase/home-showcase-1-${page}.jpg`}
                                  alt={`Home Page ${page}`}
                                  width={600}
                                  height={700}
                                  className="w-full transition-transform duration-500 ease-in-out transform scale-100"
                                />
                              </Link>
                              <div className="absolute inset-0 flex justify-center items-center transform scale-y-0 opacity-0 invisible transition-all duration-500 ease-in-out">
                                <Link
                                  href={`/Index-${page === 4 ? "dark" : page}`}
                                  aria-label={`View Home Page ${page}`}
                                >
                                  <span className="p-[15px] text-center w-[150px]">
                                    View Page {page}
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <h3 className="home-showcase__title mt-[17px] text-center text-[16px] font-bold text-fixnix-darkpurple">
                              Home Page {page}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </li>


        {/* About Us */}
        <li className="relative group">
          <Link
            href="#"
            className="text-fixnix-darkpurple text-[15px] font-bold hover:text-fixnix-darkpurple"
          >
            DISCOVER KSSC
          </Link>
          <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
            <li className="mb-2">
              <Link
                href="/OurHeritage&Identity"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Our Heritage & Identity
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/KashmiriSufiLegacy"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Kashmiri Sufi Legacy
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/Purpose&Direction"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Purpose & Direction
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/OurWork&Practices"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Our Work & Practices
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/UnderstandingKashmiriSufism"
                className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
              >
                Understanding Kashmiri Sufism
              </Link>
            </li>
          </ul>
        </li>
        {/* Teachings Dropdown */}
<li className="relative group">
  <Link href="#" className="text-fixnix-darkpurple text-[15px] font-bold hover:text-fixnix-darkpurple">
    YOUR JOURNEY
  </Link>
  <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
    <li className="mb-2">
      <Link href="/KashmiriSufism" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Begin Your Journey</Link>
    </li>
    <li className="mb-2">
      <Link href="/ScientificExploration" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Core Learning Paths</Link>
    </li>
    <li className="mb-2">
      <Link href="/About" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Growth & Development</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Leadership & Teaaching</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Community & Events</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Resources & Support</Link>
    </li>
  </ul>
</li>

{/* Programs & Events Dropdown */}
<li className="relative group">
  <Link href="#" className="text-fixnix-darkpurple text-[15px] font-bold hover:text-fixnix-darkpurple">
    SUFI SCIENCE EXPLORER
  </Link>
  <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[500px]   hidden group-hover:block">
    <li className="mb-2">
      <Link href="/Workshops" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Foundational Sciences</Link>
    </li>
    <li className="mb-2">
      <Link href="/Conferences" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Mind & Consciousness</Link>
    </li>
    <li className="mb-2">
      <Link href="/VirtualOffering" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Nature & Environment</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Philosophy & Ethics</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Human Sciences</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Spiritual Technologies</Link>
    </li>
    
  </ul>
</li>

{/* Knowledge Hub Dropdown */}
<li className="relative group">
  <Link href="#" className="text-fixnix-darkpurple text-[15px] font-bold hover:text-fixnix-darkpurple">
    LEARNING CENTER
  </Link>
  <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
    <li className="mb-2">
      <Link href="/Articles" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Research & Publications</Link>
    </li>
    <li className="mb-2">
      <Link href="/Library" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Multimedia Library</Link>
    </li>
    <li className="mb-2">
      <Link href="/Books" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Digital Books Section</Link>
    </li>
  </ul>
</li>

{/* Sufi Gifts Dropdown */}
<li className="relative group">
  <Link href="#" className="text-fixnix-darkpurple font-bold text-[15px] hover:text-fixnix-darkpurple">
    SACRED GIFT SHOP
  </Link>
  <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
    <li className="mb-2">
      <Link href="/Products" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Jewelry & Accessories</Link>
    </li>
    <li className="mb-2">
      <Link href="/EthicalPractices" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Art & Wall Decor</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Home & Living</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Fashion & Apparel</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Wellness & Meditation</Link>
    </li>
    <li className="mb-2">
      <Link href="" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Music & Sound</Link>
    </li>
   
  </ul>
</li>

{/* Support Us Dropdown */}
<li className="relative group">
  <Link href="#" className="text-fixnix-darkpurple text-[15px] font-bold hover:text-fixnix-darkpurple">
    SUPPORT US
  </Link>
  <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] rounded-e-md overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
    <li className="mb-2">
      <Link href="/Donations" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Ways to Give</Link>
    </li>
    <li className="mb-2">
      <Link href="/Volunteering" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Volunteer With Us</Link>
    </li>
   
    <li className="mb-2">
      <Link href="/Collaborations" className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all">Collaborations</Link>
    </li>
  </ul>
</li>



        {/* Additional Dropdowns */}
        {/* Add other dropdown menus like "YOUR JOURNEY", "SUFI SCIENCE EXPLORER", "LEARNING CENTER", "SACRED GIFT SHOP", etc. here similarly */}
      </ul>
    </>
  );
}
