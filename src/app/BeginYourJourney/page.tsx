'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"
import { SetStateAction, useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index: SetStateAction<number>) => {
        setActiveIndex(index)
    }
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Price List">
        {/*Core Services Start*/}
        <section className="relative block py-[120px] z-[1]">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
    style={{ backgroundImage: 'url(assets/images/backgrounds/core-services-bg.jpg)' }}
  ></div>
    {/*Experience One End*/}
          <div className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
          <div className="relative">
            <div className="rounded-lg overflow-hidden relative group">
              <Image
                src="/assets/images/services/core-services-img-1.jpg"
                alt="Core services"
                layout="responsive"
                width={500}
                height={400}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
          <div className="relative">
            <div className="text-left mb-8">
              <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
              Begin Your Journey
                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
              Harmony of Spirit and Scientific Wonder
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
              Welcome to the Sufi Science Center – Kashmir Chapter, where the sacred wisdom of Sufism meets the wonders of modern science. Here in the tranquil and mystic land of Kashmir, a place where the Divine Presence is felt in every breeze, every mountain, and every stream, your journey towards spiritual enlightenment and scientific discovery begins.
              </p>
            </div>
            <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
              {/* List Item 1 */}
              <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 hover:-translate-y-[10px] group ">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                  <span className="icon-checked"></span>
                </div>
                <div className="ml-6 sm:ml-6">
                  <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                  Sacred Wisdom of Sufism
                  </h5>
                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                  Nurturing soul, awakening spirit in Kashmir.
                  </p>
                </div>
              </li>
  
              {/* List Item 2 */}
              <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500 hover:-translate-y-[10px] group">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                  <span className="icon-repair"></span>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                  Bridging Science and Spirituality
                  </h5>
                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                  Science meets Sufism for understanding. </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/*Core Services End*/}

        {/*Pricing One Start*/}
        <section className="relative block py-[120px] pb-[10px]">
  <div className="container mx-auto px-4">
    <div className="relative block mb-[52px]">
      <div className="flex items-center">
        <div className="w-full lg:w-8/12">
          <div className="relative block">
            <div className="text-left">
            <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
              Path of the Seeker
                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
              Uniting Spirituality & Science
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
              In Kashmir, the heart of the ancient Sufi tradition, embark on a transformative journey where the soul’s longings meet the wisdom of the natural world. This journey transcends boundaries, revealing spirituality and science as two sides of same coin – pathways leading to Divine Truth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div><div className="relative  block py-[120px] pt-10">
    <div className="mb-[52px]">
        <div className="flex flex-col md:flex-row bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
            <div className="md:w-1/2 lg:w-5/12">
                <div className="relative mr-[45px] rounded-lg">
                <Image 
                src="/assets/images/resources/pricing-one-img-1-1.jpg" 
                alt="" 
                className="w-full rounded-lg" 
                width={500}  // specify the width
                height={300} // specify the height
                />
                </div>
            </div>
            <div className="md:w-1/2 lg:w-7/12 pt-[123px] relative">
                <div className="mb-[24px]">
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">The Call to Begin</h4>
                    <p>Embark on a transformative journey, connecting inner spiritual awakening with outer exploration.</p>
                </div>
                <ul className="space-y-[17px] pb-[17px]">
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Inner Awakening</h5>
            <p>Refine the soul through practices like meditation, Dhikr, and whirling.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Divine Connection</h5>
            <p>Deepen connection to the divine and higher spiritual purpose.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">New Vision</h5>
            <p>Discover hidden patterns shaping existence with renewed spiritual vision.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Sacred Harmony</h5>
            <p>Unveil harmony between divine love and universal scientific principles.</p>
        </div>
    </li>
</ul>

            </div>
        </div>
        <div className="flex flex-col md:flex-row pl-5 bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
            <div className="md:w-1/2 lg:w-7/12 pt-[123px] relative">
                <div className="mb-[24px]">
                    <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">The Kashmir Chapter</h4>
                    <p>Tradition and innovation merge, creating a dynamic blend of progress, heritage, creativity, and transformation.</p>
                </div>
                <ul className="space-y-[17px] pb-[17px]">
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Kashmiri Wisdom</h5>
            <p>Spiritual practice blends with modern scientific exploration for truth.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Holistic Learning</h5>
            <p>Integrating spiritual growth and intellectual expansion in immersive programs.
</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Sacred Knowledge</h5>
            <p>Combining Sufi tradition with scientific inquiry for transformative understanding.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Unified Quest</h5>
            <p>Fostering collaboration between spiritual seekers and scientific minds.</p>
        </div>
    </li>
</ul>

            </div>
            <div className="md:w-1/2 lg:w-5/12">
                <div className="relative ml-[45px] rounded-lg">
                <Image 
                src="/assets/images/resources/pricing-one-img-1-1.jpg" 
                alt="" 
                className="w-full rounded-lg" 
                width={500}  // specify the width
                height={300} // specify the height
                />
                </div>
            </div>
        </div>
    </div>
                    
                </div>
            </div>
        </section>
        {/*Pricing One End*/}

        {/*Contact Two Start*/}
        <section className="text-left-mobile relative block bg-fixnix-lightpurple overflow-hidden py-[120px] z-10">
  <div className="absolute inset-0 bg-center bg-cover mix-blend-multiply z-[-1]"></div>
  <div className="container">
    <div className="relative block">
      <div className=" text-center mb-[42px]">
      <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
      Start Your Journey Today
        <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
        <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
      </span>
      <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      Your journey into the heart of Sufi science begins
      </h2>
      <p className="pt-[15px] sm:pt-[20px] text-gray-100 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
      With each step, you will uncover new dimensions of understanding, not only of the world around you but also of the divine presence within. The ancient Sufi wisdom and modern scientific discoveries are not separate but two expressions of the same Divine Truth. We will awaken hidden knowledge and power, fostering personal transformation, collective healing, and the realization of Divine Unity that connects all of creation.
      </p>
      </div>
    </div>
  </div>
</section>

        {/*Contact Two  End*/}

        {/*Services One Start*/}
        <section className=" text-left-mobile relative block py-[120px] pb-[90px] bg-fixnix-primary z-10">
  <div className="absolute top-[10px] left-0 services-one-shape-1">
    <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
  </div>
  <div className="absolute top-[65px] right-0 services-one-shape-2">
    <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
  </div>
  <div className="container">
    <div className=" text-center mb-[49px]">
      <span className=" text-fixnix-lightpurple uppercase font-semibold text-[16px] leading-[16px] relative inline-block">
        What Awaits You on This Sacred Journey?
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className=" text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold mt-[14px]">
        Embark on a Transformative Path
      </h2>
      <p className="s pt-[20px]">
        Step into a realm where ancient wisdom and modern science converge, offering you profound insights into the universe and your inner self. This journey will awaken your spirit, expand your consciousness, and guide you toward deeper healing and enlightenment.
      </p>
    </div>

    <div className="row flex flex-wrap">
      {/* Service 1 */}
      <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
        <div className=" relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
          <div className=" relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
            <img src="assets/images/services/services-1-1.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
            <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
          </div>
          <div className=" p-[22px] pb-[30px]">
            <h3 className=" text-[24px] font-semibold leading-[34px]">
              
                Sufi Practices
              
            </h3>
            <p className=" mt-[15px] mb-[22px]">
              Learn spiritual meditation, dhikr, and sacred whirling to connect with divine energy and awaken the soul.
            </p>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
        <div className=" relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
          <div className="relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
            <img src="assets/images/services/services-1-2.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
            <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
          </div>
          <div className=" p-[22px] pb-[30px]">
            <h3 className=" text-[24px] font-semibold leading-[34px]">
              
                Sacred Geometry
              
            </h3>
            <p className=" mt-[15px] mb-[22px]">
              Explore the universe's hidden geometric patterns, uniting modern physics and ancient wisdom for universal harmony.
            </p>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
        <div className="relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
          <div className=" relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
            <img src="assets/images/services/services-1-3.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
            <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
          </div>
          <div className="p-[22px] pb-[30px]">
            <h3 className=" text-[24px] font-semibold leading-[34px]">
             
                Mindful Science
              
            </h3>
            <p className=" mt-[15px] mb-[22px]">
              Study the connection between spirit and mind, with Sufi wisdom guiding pathways to inner-outer unity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/*Services One End*/}

            </Layout>
        </>
    )
}