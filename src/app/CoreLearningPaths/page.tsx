"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Banner from "@/components/sections/home3/Banner";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  const LearningSlides = [
    {
      subTitle: "Wisdom, Growth, Enlightenment, Reflection, Mastery",
      title: " Explore the Foundations of<br/> Sufi Learning",
      text: " Follow structured learning paths rooted in Kashmiri Sufism, guiding you through <br/>spiritual wisdom, self-discovery, and transformative inner growth.",
      buttonText: "Read More",
      buttonLink: "/Home",
    },
    {
      subTitle: "Sacred Knowledge, Guided Spiritual Awakening",
      title: "Discover the Pathways to <br/>Spiritual Mastery",
      text: "Delve into the heart of Sufi teachings through curated learning paths, <br/>designed to nurture mindfulness, self-awareness, and deep spiritual insight.",
      buttonText: "Explore Now",
      buttonLink: "/Home",
    },
    {
      subTitle: "From Seeking to Understanding, Evolve Spiritually",
      title: "Step into the <br/>Essence of Sufism",
      text: "Embark on a structured journey through Kashmiri Sufi traditions, learning the principles<br/> of love, devotion, wisdom, and spiritual awakening.",
      buttonText: "Join Now",
      buttonLink: "/Home",
    },
    {
      subTitle: " Illuminate Your Path with Knowledge",
      title: "The Sufi Learning <br/>Paths Await You",
      text: "Explore foundational, intermediate, and advanced Sufi learning paths designed <br/>to awaken your consciousness and deepen your spiritual understanding.",
      buttonText: "Explore Now",
      buttonLink: "/Home",
    },
    {
      subTitle: "A Journey of Learning and Wisdom",
      title: "Guided Steps Toward <br/>Spiritual Enlightenment",
      text: "  Follow structured pathways in Kashmiri Sufism, blending sacred wisdom, ethical teachings,<br/>  and self-exploration for profound personal and spiritual growth.",
      buttonText: "Join Now",
      buttonLink: "/Join",
    },
  ];
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={LearningSlides}/>
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
                        Core Learning Paths
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                        Divine Unity Through Sacred Knowledge
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                        Welcome to the heart of Sufi Science, where sacred
                        wisdom and science converge to reveal existence’s
                        mysteries. The Sufi Science Center – Kashmir Chapter
                        invites you on a transformative journey, blending
                        Sufism’s timeless wisdom with modern discoveries,
                        exploring divine truths that permeate both seen and
                        unseen realms.
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
                            The Science of Divine Unity
                          </h5>
                          <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                            Unity, Interconnection, Science, Divine
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
                            The Laws of Creation
                          </h5>
                          <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                            Science, Sufism, consciousness, harmony.{" "}
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
                        Sufi Spirituality and Mysticism
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                        Love Awakening of Divine
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                        In Kashmir, where sacred mountains meet pristine lakes,
                        Sufi spirituality invites divine experience. This path
                        explores mysticism, focusing on love and oneness. Learn
                        from masters, discover spiritual purification stages
                        (Tazkiyah), and practice dhikr.
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
                        Divine patterns in nature & science
                      </h4>
                      <p>
                        Exploring divine patterns connecting spirituality,
                        nature, and modern quantum physics.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Sufi Geometry
                          </h5>
                          <p>
                            Understanding divine order reflected in nature’s
                            harmonious and sacred patterns.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Kashmiri Beauty
                          </h5>
                          <p>
                            Exploring sacred geometry in Kashmir’s art,
                            architecture, and landscapes.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Quantum Patterns
                          </h5>
                          <p>
                            Bridging spirituality and science through cosmic
                            structures and mathematical harmony.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Spiritual Nature
                          </h5>
                          <p>
                            Sacred patterns reveal deep connections between
                            divinity and universal laws.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row pl-5 bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
                  <div className="md:w-1/2 lg:w-7/12 pt-[123px] relative">
                    <div className="mb-[24px]">
                      <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">
                        Consciousness & the Soul
                      </h4>
                      <p>
                        Understanding the soul’s path back to the divine source.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            The Soul’s Journey
                          </h5>
                          <p>
                            Understanding the soul’s evolution, purpose, and
                            return to divine unity.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Nafs and Purification
                          </h5>
                          <p>
                            Refining the self through discipline, spiritual
                            practices, and inner transformation.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Expanding Consciousness
                          </h5>
                          <p>
                            Unlocking human potential through meditation,
                            prayer, and heightened awareness.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Union with the Divine
                          </h5>
                          <p>
                            Attaining enlightenment through devotion,
                            self-awareness, and divine connection.
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
        <section className="text-left-mobile relative block bg-fixnix-lightpurple overflow-hidden py-[120px] z-10">
          <div className="absolute inset-0 bg-center bg-cover mix-blend-multiply z-[-1]"></div>
          <div className="container">
            <div className="relative block">
              <div className=" text-center mb-[42px]">
                <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
                  Global Dialogue
                  <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
                  <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
                </span>
                <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                  Sharing Sufi Science with the World
                </h2>
                <p className="pt-[15px] sm:pt-[20px] text-gray-100 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
                  As Kashmir has long been a center of spiritual learning, it is
                  our mission to extend the knowledge of Sufi science to the
                  global community. This learning path invites you to
                  participate in international dialogues, conferences, and
                  collaborations where Sufi scholars and modern scientists can
                  come together to explore the confluence of the mystical and
                  the scientific. By sharing our insights with the world, we
                  contribute to the global understanding of the unity of
                  existence and the path of spiritual enlightenment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Contact Two  End*/}

        {/*Services One Start*/}
        <section className=" text-left-mobile relative block py-[120px] pb-[90px] bg-fixnix-primary z-10">
          <div className="absolute top-[10px] left-0 services-one-shape-1">
            <img src="assets/images/shapes/services-one-shape-1.png" alt="" />
          </div>
          <div className="absolute top-[65px] right-0 services-one-shape-2">
            <img src="assets/images/shapes/services-one-shape-2.png" alt="" />
          </div>
          <div className="container">
            <div className=" text-center mb-[49px]">
              <span className=" text-fixnix-lightpurple uppercase font-semibold text-[16px] leading-[16px] relative inline-block">
                Education for the Soul
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className=" text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold mt-[14px]">
                Integrating Sufi Science with Modern Thought
              </h2>
              <p className="s pt-[20px]">
                Exploring the integration of ancient Sufi wisdom with modern
                scientific knowledge, this path empowers individuals to navigate
                both the spiritual and material worlds, fostering a deeper
                understanding of life, consciousness, and the universe.
              </p>
            </div>

            <div className="row flex flex-wrap">
              {/* Service 1 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className=" relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
                  <div className=" relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
                    <img
                      src="assets/images/services/services-1-1.jpg"
                      alt=""
                      className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"
                    />
                    <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
                  </div>
                  <div className=" p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] font-semibold leading-[34px]">
                      Wisdom Integration
                    </h3>
                    <p className=" mt-[15px] mb-[22px]">
                      Bringing together Sufi teachings and modern scientific
                      knowledge for holistic understanding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className=" relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
                  <div className="relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
                    <img
                      src="assets/images/services/services-1-2.jpg"
                      alt=""
                      className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"
                    />
                    <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
                  </div>
                  <div className=" p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] font-semibold leading-[34px]">
                      Experiential Learning
                    </h3>
                    <p className=" mt-[15px] mb-[22px]">
                      Offering workshops, lectures, and courses combining
                      spirituality with scientific exploration and practice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="relative block bg-white shadow-[0_8px_29px_0_rgba(0,0,0,0.1)] mb-[30px] z-[2]">
                  <div className=" relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
                    <img
                      src="assets/images/services/services-1-3.jpg"
                      alt=""
                      className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"
                    />
                    <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
                  </div>
                  <div className="p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] font-semibold leading-[34px]">
                      Spiritual Science
                    </h3>
                    <p className=" mt-[15px] mb-[22px]">
                      Empowering seekers to unite divine reverence with
                      intellectual curiosity for deeper wisdom.
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
  );
}
