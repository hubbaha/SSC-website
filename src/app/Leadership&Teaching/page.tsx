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
            Leadership and Teaching
              <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
            At the Heart of Kashmir's Spiritual Wisdom
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
            In the heart of Kashmir, the Sufi Science Center merges ancient Sufi wisdom with modern science, guiding seekers on a transformative journey of spiritual awakening and intellectual discovery. Through sacred teachings and spiritual leadership, we illuminate the path to inner harmony, universal truth, and collective growth.
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
                Illuminating the Path of Wisdom
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                Sufi leadership blends spirituality with wisdom.
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
                Bridging Mysticism and Knowledge
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                Sufi science integrates intellect and evolution. </p>
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
          Sufi Leadership 
              <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
            A Beacon of Divine Light
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
            Sufi leadership embodies humility, service, and compassion, guiding others through inner wisdom and divine grace. Our programs inspire individuals to nurture their spiritual growth, fostering interconnectedness and selfless service.</p>
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
                  <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]"> Illuminating the Path to Divine Presence</h4>
                  <p>Like a quiet lamp, a Sufi leader illuminates the path to divine presence, helping others discover the sacredness in all things.</p>
              </div>
              <ul className="space-y-[17px] pb-[17px]">
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Humility Strength</h5>
          <p>Sufi leaders empower others through humble service, not seeking recognition.</p>
      </div>
  </li>
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Divine Wisdom</h5>
          <p>Leaders guide through inner wisdom, shaped by divine grace and insight.</p>
      </div>
  </li>
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Love Patience</h5>
          <p>Nurturing others' souls with love and patience for spiritual growth.</p>
      </div>
  </li>
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Selfless Service</h5>
          <p>Our programs inspire service through knowledge, wisdom, and selfless actions.</p>
      </div>
  </li>
</ul>

          </div>
      </div>
      <div className="flex flex-col pl-5 md:flex-row  bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
          <div className="md:w-1/2 lg:w-7/12 pt-[123px] relative">
              <div className="mb-[24px]">
                  <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">Teaching as a Sacred Art</h4>
                  <p>Teaching awakens souls, unites spiritual wisdom with modern understanding and growth.</p>
              </div>
              <ul className="space-y-[17px] pb-[17px]">
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Sacred Responsibility</h5>
          <p>Teaching in Sufism awakens the soul, helping others see the unseen .</p>
      </div>
  </li>
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Learning Experience</h5>
          <p>We blend Sufi spiritual practices with modern science to foster deep understanding.
</p>
      </div>
  </li>
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Sciences of the Universe</h5>
          <p>Our courses and workshops illuminate ancient truths through contemporary scientific insights.</p>
      </div>
  </li>
  <li className="flex justify-between border-b border-gray-300 pb-[17px]">
      <div>
          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Divine Truths</h5>
          <p>We teach how to integrate spiritual practices like dhikr and meditation into daily life.</p>
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
    A Call to Seekers
      <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
      <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
    </span>
    <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
    Step forward with an open heart and a receptive mind.
    </h2>
    <p className="pt-[15px] sm:pt-[20px] text-gray-100 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
    In the rich tradition of Kashmiri Sufism, we offer a space where leadership is born from service, where teaching is rooted in love, and where the journey of the soul is illuminated by the divine light of truth.
This is an invitation to step into a world where the sacred & scientific are one, where you are not only a seeker but also a guide for others, and where your personal journey is deeply intertwined with collective journey of humanity. Awaken your soul, expand your consciousness, and become a leader of the divine sciences in the land where mysticism and science meet.


    </p>
    </div>
  </div>
</div>
</section>

      {/*Contact Two  End*/}

      {/*Services One Start*/}
      <section className="text-left-mobile relative block py-[120px] pb-[90px] bg-fixnix-primary z-10">
<div className="absolute top-[10px] left-0 services-one-shape-1">
  <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
</div>
<div className="absolute top-[65px] right-0 services-one-shape-2">
  <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
</div>
<div className="container">
  <div className="text-center mb-[49px]">
    <span className="text-fixnix-lightpurple uppercase font-semibold text-[16px] leading-[16px] relative inline-block">
    Nurturing Future Sufi Scholars
      <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
    </span>
    <h2 className="text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold mt-[14px]">
    Fostering Sufi Scientists for Spiritual and Scientific Growth
    </h2>
    <p className="s pt-[20px]">Empowering youth to integrate spirituality with science, our programs foster leaders who will inspire positive transformation, bridging the material and spiritual realms for holistic growth.</p>
  </div>

  <div className="row flex flex-wrap">
    {/* Service 1 */}
    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
      <div className="relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
        <div className="relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
          <img src="assets/images/services/services-1-1.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
          <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
        </div>
        <div className="p-[22px] pb-[30px]">
          <h3 className="text-[24px] font-semibold leading-[34px]">
          Scientific Inquiry
          </h3>
          <p className="mt-[15px] mb-[22px]">
          We combine ancient spiritual teachings with modern scientific exploration to guide transformative leaders.
          </p>
        </div>
      </div>
    </div>

    {/* Service 2 */}
    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
      <div className="relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
        <div className="relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
          <img src="assets/images/services/services-1-2.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
          <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
        </div>
        <div className="p-[22px] pb-[30px]">
          <h3 className="text-[24px] font-semibold leading-[34px]">
          Inspiring Responsibility
          </h3>
          <p className="mt-[15px] mb-[22px]">
          Our programs instill a sense of responsibility to understand and nurture both the physical and spiritual realms.</p>
        </div>
      </div>
    </div>

    {/* Service 3 */}
    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
      <div className="relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
        <div className="relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
          <img src="assets/images/services/services-1-3.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
          <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
        </div>
        <div className="p-[22px] pb-[30px]">
          <h3 className="text-[24px] font-semibold leading-[34px]">
          Divine Purpose
          </h3>
          <p className="mt-[15px] mb-[22px]">
          We empower individuals to explore the mysteries of the universe, revealing the divine truths behind all that exists.
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