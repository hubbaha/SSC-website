'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Link from "next/link"
import Layout from "../../components/layout/Layout"
import Banner from "../../components/sections/home3/Banner"
import Welcome from "../../components/sections/home3/Welcome"
import About from '@/components/sections/home2/About'


export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
               
                {/* <Welcome /> */}
                <section className="relative block py-[80px] md:py-[100px] lg:py-[120px] z-[1]">
                <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] bottom-0 mb-20 bg-fixnix-lightpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center z-[-1]"></div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
                            <div className="relative block">
                                <div className="mb-7">
                                <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                                 Welcome To
                                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                                 </span>
                                    <h2 className="text-2xl md:text-3xl font-bold mt-2">Our Digital Books</h2>
                                </div>
                                <p className="text-base md:text-lg font-semibold text-fixnix-darkpurple leading-[28px]">We embrace the timeless teachings of Sufism through the lens of modern technology, where Divine Wisdom meets the digital age.</p>
                                <p className="mt-4 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3">Our Digital Books collection offers a sacred journey through the mystical realms of Sufi science. These texts, carefully curated from the rich tapestry of Kashmiri spiritual heritage, bring to you a fusion of ancient Sufi philosophy, mysticism, and scientific thought. With each page, you will encounter the light of knowledge that transcends time and space, leading you to the deeper truths of existence and the divine.</p>
                                
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 pl-0 lg:pl-12 relative">
                            <div className="relative block rounded-lg overflow-hidden">
                                <img src="/assets/images/resources/welcome-one-img-1.jpg" alt="" className="w-full rounded-lg" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <a onClick={() => setOpen(true)} className="cursor-pointer flex items-center justify-center w-16 md:w-20 h-16 md:h-20 text-sm md:text-lg text-white bg-opacity-40 bg-fixnix-lightpurple rounded-full transition-all duration-500 hover:text-fixnix-lightpuple">
                                        <span className="fa fa-play"></span>
                                        <i className="absolute top-2 left-2 right-2 bottom-2 md:top-2.5 md:left-2.5 md:right-2.5 md:bottom-2.5 bg-fixnix-lightpuple rounded-full transition-all duration-500 hover:bg-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Welcome One End */}
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
                {/* <About></About> */}
                <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="relative flex flex-col space-y-6">
            
            <div className="relative">
              <img
                src="/assets/images/resources/about-2-1.jpg"
                alt=""
                className="w-[500px] rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
                <img
                  src="/assets/images/resources/about-2-2.jpg"
                  alt=""
                  className="w-40 h-40 rounded-lg shadow-light-purple"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button onClick={() => setOpen(true)} className="bg-fixnix-lightpurple text-white p-4 rounded-full shadow-lg">
                    <span className="fa fa-play"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
          <div className="mb-6">
          <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
          Why Digital Books?
                                <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                                 </span>
            <h2 className="text-3xl font-bold mt-2">
            The Digital Books of the Sufi Centre
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
          Provides an easily accessible and sustainable method to engage with the sacred knowledge of Sufism
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-red-600 text-xl mr-4">✔</span>
              <p className="text-lg font-semibold uppercase">	Global Access</p>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 text-xl mr-4">✔</span>
              <p className="text-lg font-semibold uppercase">Instant Access</p>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 text-xl mr-4">✔</span>
              <p className="text-lg font-semibold uppercase ">Preservation of Tradition</p>
            </li>
          </ul>
          <p className="text-lg text-gray-700 mb-6">
          Through digitalization, we ensure that the ancient wisdom of Kashmiri Sufism is preserved for future generations, while being available to all who wish to explore its depths.
          </p>
          
        </div>
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
    </section>
                
            </Layout>
        </>
    )
}