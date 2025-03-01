"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/sections/home3/Banner";
import Welcome from "../../components/sections/home3/Welcome";
import About from "@/components/sections/home2/About";
import Image from "next/image";
const MindSlides = [
  {
    subTitle: "Awaken the Mind, Elevate Consciousness",
    title: "Exploring the Depths of <br/>Inner Awareness",
    text: " Unlock the mysteries of the mind and consciousness through Sufi wisdom,<br/> blending spirituality, psychology, and higher states of awareness.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Beyond Thought, Into Spiritual Awakening",
    title: "The Science of<br/> Mindful Awareness",
    text: "Sufi teachings reveal the connection between mind, soul, and consciousness,<br/> guiding seekers toward inner balance and enlightenment.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Consciousness, Reflection, Enlightenment, Truth, Growth",
    title: "The Path to <br/>Self-Realization Begins",
    text: "Discover the power of the mind in shaping reality, expanding awareness, and attaining<br/> spiritual clarity through Kashmiri Sufi insights.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Inner Peace Through Higher Awareness",
    title: " Unraveling the Mysteries <br/>of the Mind",
    text: " Explore the Sufi understanding of consciousness, where thought, meditation, <br/>and divine connection lead to profound self-awareness and wisdom.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Mind, Soul, Awareness, Truth, Transcendence",
    title: " Journey Into Consciousness <br/>and Self-Discovery",
    text: " Through Kashmiri Sufi wisdom, explore the layers of consciousness, unlocking the mind’s potential for <br/>transformation and spiritual enlightenment.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
         <Banner slides={MindSlides}/>

        {/* <Welcome /> */}
        <section className="relative block py-[80px] md:py-[100px] lg:py-[120px] z-[1]">
          <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] bottom-0 mb-0 sm:bg-white md:bg-white lg:bg-white xl:bg-fixnix-lightpurple 2xl:bg-fixnix-lightpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center z-[-1]"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
                <div className="relative block">
                  <div className="mb-7">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    Mind and Consciousness
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">
                      The Divine Journey Within
                    </h2>
                  </div>
                  <p className="text-base md:text-lg font-semibold text-fixnix-darkpurple leading-[28px]">
                  In the serene valleys of Kashmir, where the mist kisses the mountain peaks and the rivers echo ancient wisdom, the exploration of mind and consciousness has always been a sacred pursuit. 
                  </p>
                  <p className="mt-4 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3">
                  At the heart of Sufi teachings lies the belief that the mind is not a mere collection of thoughts but a vessel for experiencing the Divine. Consciousness, in its purest form, is the reflection of the divine light within every being. This sacred wisdom, passed down through generations of enlightened Sufi masters, invites seekers to step beyond the surface of ordinary existence and dive into the depths of spiritual realization.Sufi Science, as taught through Kashmir's mystical heritage, provides a gateway to unraveling the mysteries of the mind and consciousness, guiding us toward an eternal understanding of our true essence.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 pl-0 lg:pl-12 relative">
                <div className="relative block rounded-lg overflow-hidden">
                  <img
                    src="/assets/images/resources/welcome-one-img-1.jpg"
                    alt=""
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <a
                      onClick={() => setOpen(true)}
                      className="cursor-pointer flex items-center justify-center w-16 md:w-20 h-16 md:h-20 text-sm md:text-lg text-white bg-opacity-40 bg-fixnix-lightpurple rounded-full transition-all duration-500 hover:text-fixnix-lightpuple"
                    >
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
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="Get7rqXYrbQ"
          onClose={() => setOpen(false)}
        />
        {/* <About></About> */}
        <section className=" text-left-mobile relative block bg-fixnix-white py-[120px] z-[1]">
          <div
            className="absolute top-[0px] bottom-[20px] left-0 right-0 bg-no-repeat bg-center bg-cover z-[-1]"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
            }}
          ></div>
          <div className="container mx-auto">
            {/* Section Title */}
            <div className="text-center mb-[57px]">
              <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                The Mind as a Reflection of Divine Light
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2
                className="mt-[14px]  text-center  text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold
"
              >
                The mind is seen as a reflection of the Divine, a mirror through which the eternal truth reveals itself
              </h2>
            </div>

            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {/* Experience One Single */}
              <div className="relative flex items-center bg-fixnix-lightpurple  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                <div className="relative block">
                  <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-white text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                    <i className="icon-service"></i>
                  </span>
                </div>
                <div className="ml-[20px] sm:ml-[20px]">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                    <Link
                      href="services-details"
                      className="text-fixnix-white transition-all duration-[500ms] group-hover:text-white"
                    >
                      View of Consciousness
                    </Link>
                  </h3>
                  <p className="text-fixnix-white group-hover:text-white sm:text-[16px]">
                  Sufism sees consciousness as a boundless Divine essence,  merging with universal awareness.
                  </p>
                </div>
              </div>

              {/* Experience Two Single */}
              <div className="relative flex items-center bg-fixnix-lightpurple  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                <div className="relative block">
                  <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-white text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                    <i className="icon-service"></i>
                    <i className="icon-management"></i>
                  </span>
                </div>
                <div className="ml-[20px] sm:ml-[20px]">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                    <Link
                      href="team"
                      className="text-fixnix-white transition-all duration-[500ms] group-hover:text-white"
                    >
                      Kashmiri Mystics
                    </Link>
                  </h3>
                  <p className="text-fixnix-white group-hover:text-white sm:text-[16px]">
                  Lal Ded and Shams-ud-Din reveal that true knowledge arises from the soul’s inner light, bridging temporal and eternal realms.
                  </p>
                </div>
              </div>

              {/* Experience Three Single */}
              <div className="relative flex items-center bg-fixnix-lightpurple  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                <div className="relative block">
                  <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-white text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                    <i className="icon-headphones"></i>
                  </span>
                </div>
                <div className="ml-[20px] sm:ml-[20px]">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                    <Link
                      href="contact"
                      className="text-fixnix-white transition-all duration-[500ms] group-hover:text-white"
                    >
                       Mysticism & Neuroscience
                    </Link>
                  </h3>
                  <p className="text-fixnix-white group-hover:text-white sm:text-[16px]">
                  Combining Sufi practices like whirling with quantum studies, the center fosters unity with the Divine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-left-mobile team-top py-[40px] sm:py-[60px] md:py-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            A Journey of Awakening
              <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
            The exploration of mind and consciousness is not merely an intellectual pursuit, but a spiritual journey.
            </h2>

            {/* Section Text */}
            <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
            It is a journey that leads to the discovery of the soul’s true nature, unveiling the divine wisdom that resides within us all. Through the guidance of our esteemed Sufi scholars, meditators, and teachers, we invite you to walk this path of inner awakening, where the boundaries of the self dissolve, and you experience the oneness of all creation.In the tranquil embrace of Kashmir’s hills and valleys, let the teachings of Sufi science guide you on the path to self-realization, where the light of your consciousness merges with the divine radiance of the universe. 
            </p>

            {/* Subheading */}
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
            A journey toward the eternal truth that lies within every soul.
            </h2>
          </div>
        </div>
      </section>
        
      </Layout>
    </>
  );
}
