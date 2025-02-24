"use client";
import ModalVideo from "react-modal-video";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "@/components/sections/home3/Banner";
import { useState } from "react";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner></Banner>

      <section className="about-one">
        <div
          className="about-one__bg float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src="assets/images/resources/about-1-1.jpg" alt="" />
                  <div className="about-one__our-goal">
                    <p className="about-one__our-goal-sub-title">
                    For the Sufi:
                    </p>
                    <h3 className="about-one__our-goal-title">
                    "Nature is not separate from the divine but is a mirror of God's presence"
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Nature and Environment </span>
                  <h2 className="section-title__title">
                  The Divine Manifestation
                  </h2>
                </div>
                <p className="about-one__right-text-1">
                In the pristine valleys and majestic mountains of Kashmir, nature reveals itself as a reflection of the Divine. For centuries, Sufis have recognized the profound connection between the natural world and spiritual truth. Nature, in its purest form, is not just a physical entity but a manifestation of Divine energy. Every mountain, every river, every tree is imbued with a sacred essence, guiding us closer to understanding the Divine order.
                </p>
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                        The Divine Connection to Nature
                        </h3>
                        <p className="about-one__points-subtitle">
                        Nature as Divine Mirror: God’s Presence Everywhere
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                        Sufism and Ecological Wisdom
                        </h3>
                        <p className="about-one__points-subtitle">
                          Strengthening the spiritual bonds between us all
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" text-left-mobile relative block bg-fixnix-darkpurple py-[120px] z-[1]">
        <div
          className="absolute top-[20px] bottom-[20px] left-0 right-0 bg-no-repeat bg-center bg-cover z-[-1]"
          style={{
            backgroundImage:
              "url(assets/images/shapes/experience-one-shape-1.png)",
          }}
        ></div>
        <div className="container mx-auto">
          {/* Section Title */}
          <div className="text-center mb-[57px]">
            <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
            Sustainable Practices 
              <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2
              className="mt-[14px]  text-center  text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold
"
            >
              Sufi practice is the concept of balance—a balance that extends beyond the soul and into the world around us. 
            </h2>
          </div>

          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {/* Experience One Single */}
            <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
              <div className="relative block">
                <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                  <i className="icon-service"></i>
                </span>
              </div>
              <div className="ml-[20px] sm:ml-[20px]">
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                  <Link
                    href="services-details"
                    className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
                  >
                    Water Conservation
                  </Link>
                </h3>
                <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                Through traditional methods such as wazwan irrigation and natural spring management, we maintain a sustainable relationship with our water systems.
                </p>
              </div>
            </div>

            {/* Experience Two Single */}
            <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
              <div className="relative block">
                <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                  <i className="icon-service"></i>
                  <i className="icon-management"></i>
                </span>
              </div>
              <div className="ml-[20px] sm:ml-[20px]">
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                  <Link
                    href="team"
                    className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
                  >
                   Sustainable Agriculture
                  </Link>
                </h3>
                <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                By embracing traditional agricultural methods, we promote soil health and biodiversity, maintaining the sacred balance between land and people.
                </p>
              </div>
            </div>

            {/* Experience Three Single */}
            <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
              <div className="relative block">
                <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                  <i className="icon-headphones"></i>
                </span>
              </div>
              <div className="ml-[20px] sm:ml-[20px]">
                <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                  <Link
                    href="contact"
                    className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
                  >
                    Forest Preservation
                  </Link>
                </h3>
                <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                Sufis have long regarded trees as sacred beings, and it is through this sacred lens that we aim to protect Kashmir's rich forest ecosystems.
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
            A Call to Action
              <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
            Lets be the guardians of nature, preserving its sacred balance for the prosperity of the spirit and the earth.
            </h2>

            {/* Section Text */}
            <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
            We invite you to join us on this sacred journey to rediscover the profound connection between Sufism and the environment. As stewards of Kashmir's natural beauty, we are called not only to protect the land but also to honor the Divine presence within it. By returning to the teachings of our ancestors, we can safeguard the environment for future generations, ensuring that Kashmir remains a sanctuary of spiritual and ecological harmony. Our initiatives include the development of green technologies, eco-conscious tourism practices, and the promotion of environmental education programs that align with both spiritual reverence and scientific responsibility.
            </p>

            {/* Subheading */}
        
          </div>
        </div>
      </section>
    </Layout>
  );
}
