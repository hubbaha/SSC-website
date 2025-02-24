"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Price List">
        {/*Core Services Start*/}
        <section className="relative block py-[120px] z-[1]">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/core-services-bg.jpg)",
            }}
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
                        Welcome to the Sufi Science Center – Kashmir Chapter,
                        where the sacred wisdom of Sufism meets the wonders of
                        modern science. Here in the tranquil and mystic land of
                        Kashmir, a place where the Divine Presence is felt in
                        every breeze, every mountain, and every stream, your
                        journey towards spiritual enlightenment and scientific
                        discovery begins.
                      </p>
                    </div>
                    <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
                      {/* List Item 1 */}
                      <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 ">
                        <div className="flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 group-hover:bg-white group-hover:text-fixnix-lightpurple">
                          <span className="icon-checked"></span>
                        </div>
                        <div className="ml-6 sm:ml-6">
                          <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 group-hover:text-white group-hover:bg-black">
                            Sacred Wisdom of Sufism
                          </h5>
                          <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                            Nurturing soul, awakening spirit in Kashmir.
                          </p>
                        </div>
                      </li>

                      {/* List Item 2 */}
                      <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 group-hover:bg-white">
                          <span className="icon-repair"></span>
                        </div>
                        <div className="ml-4 sm:ml-6">
                          <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 group-hover:text-white">
                            Bridging Science and Spirituality
                          </h5>
                          <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                            Science meets Sufism for understanding.{" "}
                          </p>
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
                        In Kashmir, the heart of the ancient Sufi tradition,
                        embark on a transformative journey where the soul’s
                        longings meet the wisdom of the natural world. This
                        journey transcends boundaries, revealing spirituality
                        and science as two sides of same coin – pathways leading
                        to Divine Truth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block py-[120px] pt-10">
              <div className="mb-[52px]">
                <div className="flex flex-col md:flex-row bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
                  <div className="md:w-1/2 lg:w-5/12">
                    <div className="relative mr-[45px] rounded-lg">
                      <Image
                        src="/assets/images/resources/pricing-one-img-1-1.jpg"
                        alt=""
                        className="w-full rounded-lg"
                        width={500} // specify the width
                        height={300} // specify the height
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 lg:w-7/12 pt-[123px] relative">
                    <div className="mb-[24px]">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
                        The Call to Begin
                      </h4>
                      <p>
                        Embark on a transformative journey, connecting inner
                        spiritual awakening with outer exploration.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Inner Awakening
                          </h5>
                          <p>
                            Refine the soul through practices like meditation,
                            Dhikr, and whirling.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Divine Connection
                          </h5>
                          <p>
                            Deepen connection to the divine and higher spiritual
                            purpose.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            New Vision
                          </h5>
                          <p>
                            Discover hidden patterns shaping existence with
                            renewed spiritual vision.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Sacred Harmony
                          </h5>
                          <p>
                            Unveil harmony between divine love and universal
                            scientific principles.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
                  <div className="md:w-1/2 lg:w-7/12 pt-[123px] relative">
                    <div className="mb-[24px]">
                      <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">
                        The Kashmir Chapter
                      </h4>
                      <p>
                        Tradition and innovation merge, creating a dynamic blend
                        of progress, heritage, creativity, and transformation.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Kashmiri Wisdom
                          </h5>
                          <p>
                            Spiritual practice blends with modern scientific
                            exploration for truth.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Holistic Learning
                          </h5>
                          <p>
                            Integrating spiritual growth and intellectual
                            expansion in immersive programs.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Sacred Knowledge
                          </h5>
                          <p>
                            Combining Sufi tradition with scientific inquiry for
                            transformative understanding.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Unified Quest
                          </h5>
                          <p>
                            Fostering collaboration between spiritual seekers
                            and scientific minds.
                          </p>
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
                        width={500} // specify the width
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
        <section className="contact-two bg-fixnix-darkpurple ">
          {/* <div className="contact-two-bg jarallax"
                style={{ backgroundImage: 'url(assets/images/backgrounds/contact-two-bg.jpg)' }} ></div> */}
          <div className="container">
            <div className="contact-two__inner">
              <div className="section-title section-title--two text-center">
                <span className="section-title__tagline text-fixnix-darkpurple">
                  Start Your Journey Today
                </span>
                <h2 className="section-title__title ">
                  Your journey into the heart of Sufi science begins
                </h2>
                <p className=" section-title__text">
                  With each step, you will uncover new dimensions of
                  understanding, not only of the world around you but also of
                  the divine presence within. The ancient Sufi wisdom and modern
                  scientific discoveries are not separate but two expressions of
                  the same Divine Truth. Through this journey, we will awaken
                  hidden knowledge and power, fostering personal transformation,
                  collective healing, and the realization of Divine Unity that
                  connects and sustains all of creation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Two  End*/}

        {/*Services One Start*/}
        <section className="services-one">
          <div className="services-one-shape-1 float-bob-x">
            <img src="assets/images/shapes/services-one-shape-1.png" alt="" />
          </div>
          <div className="services-one-shape-2 float-bob-y">
            <img src="assets/images/shapes/services-one-shape-2.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">
                What Awaits You on This Sacred Journey?
              </span>
              <h2 className="section-title__title">
                Embark on a Transformative Path
              </h2>
              <p className="section-title__text">
                Step into a realm where ancient wisdom and science converge,
                awakening your spirit, expanding consciousness, and guiding you
                toward divine unity and transformation.
              </p>
            </div>
            <div className="row">
              {/*Services One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="services-one__single">
                  <div className="services-one__img">
                    <img src="assets/images/services/services-1-1.jpg" alt="" />
                  </div>
                  <div className="services-one__content">
                    <h3 className="services-one__title">
                      <Link href="services-details">Laptop Repair</Link>
                    </h3>
                    <p className="services-one__text">
                      Duis aute irure dolor in repreh enderit in volup tate
                      velit esse cillum dolore fugiat nulla dolor atur
                    </p>
                  </div>
                </div>
              </div>
              {/*Services One Single Start*/}
              {/*Services One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="services-one__single">
                  <div className="services-one__img">
                    <img src="assets/images/services/services-1-2.jpg" alt="" />
                  </div>
                  <div className="services-one__content">
                    <h3 className="services-one__title">
                      <Link href="services-details">Phone Repair</Link>
                    </h3>
                    <p className="services-one__text">
                      Duis aute irure dolor in repreh enderit in volup tate
                      velit esse cillum dolore fugiat nulla dolor atur
                    </p>
                  </div>
                </div>
              </div>
              {/*Services One Single Start*/}
              {/*Services One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="services-one__single">
                  <div className="services-one__img">
                    <img src="assets/images/services/services-1-3.jpg" alt="" />
                  </div>
                  <div className="services-one__content">
                    <h3 className="services-one__title">
                      <Link href="services-details">Tablet Repair</Link>
                    </h3>
                    <p className="services-one__text">
                      Duis aute irure dolor in repreh enderit in volup tate
                      velit esse cillum dolore fugiat nulla dolor atur
                    </p>
                  </div>
                </div>
              </div>
              {/*Services One Single Start*/}
            </div>
          </div>
        </section>
        {/*Services One End*/}
      </Layout>
    </>
  );
}
