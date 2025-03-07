"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Banner from "@/components/sections/home3/Banner";
const PhilosophySlides = [
  {
    subTitle: "Wisdom, Morality, Reflection, Truth, Harmony",
    title: "Unveiling the Ethical<br/> Foundations of Sufism",
    text: " Explore the philosophical and ethical teachings of Sufism, where spirituality and morality<br/> unite to guide a life of integrity and purpose.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "The Path of Virtue and Wisdom",
    title: "Sufi Ethics:<br/> A Code for Life",
    text: "Discover the timeless ethical principles of Kashmiri Sufism, emphasizing love,<br/> justice, humility, and the pursuit of higher truth.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Conscious Living Through Sufi Wisdom",
    title: "Philosophy Rooted in<br/> Spiritual Consciousness",
    text: "Sufi thought blends deep philosophical inquiry with moral clarity, guiding seekers <br/>toward ethical action, compassion, and enlightenment.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Truth, Justice, Compassion, Integrity, Honor",
    title: "  Ethical Teachings for<br/> a Balanced Life",
    text: " Learn how Sufi philosophy shapes ethical behavior, offering wisdom on justice,<br/> responsibility, and self-awareness in a complex world.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Living Ethics, Inspired by Sufism",
    title: " Spiritual Morality in <br/>Kashmiri Sufi Thought",
    text: " Sufi ethics encourage a life of sincerity, kindness, and wisdom,<br/> fostering harmony between self, society, and the divine.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        {/*Core Services Start*/}
         <Banner slides={PhilosophySlides}/>
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
              Philosophy and Ethics
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className=" text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold mt-[14px]">
             The eternal dance between science & spiritual wisdom
              </h2>
              <p className="s pt-[20px]">
              At the core of Sufi thought is the unity of all existence—the belief that the Divine permeates every aspect of the universe, from the minutiae of nature to the vastness of the cosmos. Sufism teaches us that the boundaries between science and ethics are interconnected through a profound unity that reflects the essence of the Divine. Philosophy and Ethics of Sufi Science, where the pursuit of knowledge transcends the material realm and ascends towards understanding.
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
                    Compassion & Justice
                    </h3>
                    <p className=" mt-[15px] mb-[22px]">
                    Ethical behavior means acting with justice and mercy, whether towards people, animals, or the environment
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
                    Truth & Integrity
                    </h3>
                    <p className=" mt-[15px] mb-[22px]">
                    Ethical living requires not just honesty in speech but also integrity in thought and action.
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
                    Humility & Service
                    </h3>
                    <p className=" mt-[15px] mb-[22px]">
                    The Sufi adherent lives with a sense of profound humility, recognizing the fragility of the ego and the eternal nature of the soul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-left-mobile relative block bg-fixnix-lightpurple overflow-hidden py-[120px] z-10">
          <div className="absolute inset-0 bg-center bg-cover mix-blend-multiply z-[-1]"></div>
          <div className="container">
            <div className="relative block">
              <div className=" text-center mb-[42px]">
                <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
                Science as a Spiritual Pursuit
                  <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
                  <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-darkpurple"></span>
                </span>
                <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                True science is a spiritual pursuit
                </h2>
                <p className="pt-[15px] sm:pt-[20px] text-gray-100 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
                Here, science is not seen merely as the pursuit of empirical knowledge but as the uncovering of the divine order embedded within the fabric of creation. The study of physics, biology, mathematics, and astronomy is viewed as a means to connect the seeker to the Divine Wisdom that flows through all aspects of existence. Explore the divine mysteries of the universe not through detached observation but through inner awakening.
                </p>
                <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
                “Don’t be satisfied with stories, how things have gone with others. Unfold your own myth,”  -Rumi
              </h2>
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
                      The Ethical Teachings of the Sufi Path
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      An embodiment of divine love 
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                      Ethics, in the Sufi tradition, is not a mere set of rules; it is a way of being—an embodiment of divine love and compassion. The Sufi seeker lives by the principles of mercy, truth, and humility, which transcend the material world and lead the heart to spiritual purity. Ethical conduct is integral to the purification of the soul (Tazkiyah) and the realization of true knowledge.
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
                      Compassion in Action
                      </h4>
                      <p>
                      Embrace kindness and justice, honoring the divine spark in all beings and nature.
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Justice and Mercy
                          </h5>
                          <p>
                          Act with fairness and compassion, upholding ethical behavior as a divine duty.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Living in Truth
                          </h5>
                          <p>
                          Align thoughts, words, and actions with the divine principle of truth (Haq).
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Integrity in Practice
                          </h5>
                          <p>
                          Cultivate honesty and authenticity, reflecting divine truth in every aspect of life.
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                          Humility and Service
                          </h5>
                          <p>
                          Serve humanity with humility, recognizing the interconnectedness of all life and souls.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="flex flex-col md:flex-row pl-5 bg-gray-100 p-0 pb-[52px] mb-[110px] relative z-10">
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
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/*Pricing One End*/}

        {/*Contact Two Start*/}
        

        {/*Contact Two  End*/}

        {/*Services One Start*/}
        
        {/*Services One End*/}
      </Layout>
    </>
  );
}
