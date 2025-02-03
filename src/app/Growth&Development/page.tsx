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
              Growth and Development
                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
              Embracing the Path of Growth
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
              Sufi science is a transformative journey of the soul, deepening one's connection to the Divine and the natural world. Rooted in Kashmir’s spiritual traditions, it emphasizes heart purification and unity. The Sufi Science Center guides seekers toward inner and outer harmony, nurturing spiritual, mental, and emotional growth.
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
                  Journey of the Soul
                  </h5>
                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                  A transformative path of spiritual growth.
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
                  Inner and Outer Harmony
                  </h5>
                  <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                  Balancing spirituality, mind, and emotions </p>
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
            The Path of Development
                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
              Harmonizing Spirituality and Growth
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
              True development in Sufism unfolds inner potential, integrating spirituality with science. At the Sufi Science Center, we nurture sustainable growth, emphasizing service, interconnectedness, and divine balance for individual and collective transformation.</p>
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
                    <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">Integrating Spiritual & Scientific Growth</h4>
                    <p>Uniting Mystical Wisdom with Scientific Exploration for Deeper Understanding.</p>
                </div>
                <ul className="space-y-[17px] pb-[17px]">
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Spiritual Science</h5>
            <p>Discover how ancient Sufi teachings align with modern scientific discoveries.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Kashmir’s Wisdom</h5>
            <p>From Shah Hamdan’s wisdom to quantum physics, explore Kashmir’s intellectual heritage.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Deep Awareness</h5>
            <p>Delve into meditation, sacred geometry, and science to understand the universe’s mysteries.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Truth Exploration</h5>
            <p>The Sufi Science Center offers a space to explore deeper truths and connections.</p>
        </div>
    </li>
</ul>

            </div>
        </div>
        <div className="flex flex-col md:flex-row  bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
            <div className="md:w-1/2 lg:w-7/12 pt-[123px] relative">
                <div className="mb-[24px]">
                    <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">Nurturing Your Growth</h4>
                    <p>Cultivating Wisdom, Harmony, and Personal Transformation.</p>
                </div>
                <ul className="space-y-[17px] pb-[17px]">
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Holistic Learning</h5>
            <p>Blending ancient Sufi wisdom with modern science for a balanced, insightful journey.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Spiritual Growth</h5>
            <p>Guiding self-discovery to foster inner peace, purpose, and deeper connection.
</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Transformative Programs</h5>
            <p>Workshops and retreats designed to nurture emotional, and spiritual development.</p>
        </div>
    </li>
    <li className="flex justify-between border-b border-gray-300 pb-[17px]">
        <div>
            <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">Lasting Impact</h5>
            <p>Empowering individuals to create meaningful change in their lives and communities.</p>
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
      The Path Ahead
        <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
        <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
      </span>
      <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      Let the path of growth & development illuminate your soul.
      </h2>
      <p className="pt-[15px] sm:pt-[20px] text-gray-100 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
      As you step onto this path, know that growth and development are ongoing processes—an eternal journey toward becoming the fullest expression of yourself. It is a journey that will continue to unfold, and at the Sufi Science Center - Kashmir Chapter, we are here to walk with you every step of the way.
Here, in the land of mystics, we blend the ancient with the modern, the spiritual with the scientific, to guide you on your journey toward a more enlightened, harmonious, and sustainable existence.

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
      Awakening the Mind and Soul
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold mt-[14px]">
      Bridging Sufi Wisdom and Scientific Discovery
      </h2>
      <p className="s pt-[20px]">
      Uniting the spiritual depth of Sufi traditions with modern scientific exploration, this journey offers insight into the mysteries of consciousness, the universe, and personal transformation through a harmonious blend of knowledge and faith.
      </p>
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
              Knowledge Synthesis
            </h3>
            <p className="mt-[15px] mb-[22px]">
            Harmonizing spiritual enlightenment and scientific advancements for a holistic worldview.
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
              Transformative Learning
            </h3>
            <p className="mt-[15px] mb-[22px]">
            Interactive workshops and immersive experiences bridging spiritual practice with scientific inquiry.
            </p>
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
              Conscious Exploration
            </h3>
            <p className="mt-[15px] mb-[22px]">
            Empowering seekers to unveil deeper realities by merging faith and scientific discovery.
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