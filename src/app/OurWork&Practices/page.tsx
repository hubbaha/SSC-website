import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";

const WorkSlides = [
  {
    subTitle: "Wisdom in Action, Sufism in Practice",
    title: "Living the Teachings of<br/> Kashmiri Sufism",
    text: "Through devotion, education, and service, we bring Kashmiri Sufi wisdom to life,<br/> inspiring transformation and fostering spiritual harmony worldwide.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Sacred Practices, Modern Spiritual Engagement",
    title: "Our Commitment to Sufi<br/> Teachings & Growth",
    text: "We integrate ancient Sufi practices with contemporary understanding, offering a <br/>pathway to enlightenment, self-discovery, and communal well-being.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Faith, Reflection, Knowledge, Service, Unity",
    title: "Transforming Lives Through<br/> Sufi Traditions",
    text: " Our work blends Kashmiri Sufi wisdom with modern engagement, <br/>nurturing personal growth, spiritual depth, and social impact for all.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Humanity Through Sufi Wisdom",
    title: "Sufi Practices That <br/>Inspire and Uplift",
    text: " We honor Kashmiri Sufi traditions through meaningful practices, guiding individuals<br/> in mindfulness, ethical living, and spiritual development.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Sufi Knowledge, Action, and Transformation",
    title: "Bridging Tradition & <br/>Modern Spiritual Practice",
    text: "Our mission is to apply Kashmiri Sufi teachings in daily life, <br/>fostering inner peace, knowledge-sharing, and a united global community.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        headTitle="Our Team"
        wrapperCls="team-page-wrapper"
      >
        <Banner slides={WorkSlides}/>
        {/*Team Top Start*/}
        <section className="text-left-mobile team-top">
          <div className="container mx-auto px-4">
            <div className="text-center relative block mt-[-6px] mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[16px]  leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                Our Work & Practices
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>

              {/* Section Title */}
              <h2 className="mt-[14px] text-fixnix-darkpurple text-[28px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[48px] md:leading-[52px] font-semibold">
                Uniting Sufi Wisdom & Scientific Exploration for Harmony
              </h2>

              {/* Section Text */}
              <p className="pt-[20px] text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
                At the Sufi Science Centre - Kashmir Chapter, we stand as a
                bridge between the ancient wisdom of Sufism and the
                transformative powers of modern science. Rooted in the profound
                spiritual heritage of Kashmir, our work embodies the sacred
                dance of science and spirituality, bringing together the
                timeless principles of Sufi thought with contemporary scientific
                discoveries, innovative research, and enlightening exploration.
              </p>
            </div>
          </div>
        </section>

        {/*Team Top End*/}

        {/*Experience One Start*/}
        <section className="text-left-mobile relative block bg-fixnix-darkpurple py-[120px] z-[1]">
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
                Seeker and scientist
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                Inner exploration & divine connection through transformative
                spiritual practices.
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
                      Sacred Science
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Exploring quantum phenomena as reflections of the divine
                    order, sacred unity, and cosmic interconnectedness.
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
                      Divine Consciousness
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Unifying the soul and cosmos through Sufi practices,
                    aligning with universal consciousness and presence.
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
                      Holistic Healing
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Merging Sufi wisdom with energy, sound, meditation and
                    spiritual purification to restore balance and spiritual
                    well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                      Commitment to Kashmir
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      Preserving Kashmir’s Heritage through Spiritual and
                      Scientific Integration
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700">
                      Our center is steadfast in its commitment to preserving
                      and reviving the rich spiritual and scientific heritage of
                      Kashmir. By offering workshops, educational programs, and
                      research initiatives, we seek to provide a space where
                      individuals can deeply integrate spiritual wisdom with
                      modern scientific knowledge. Through this integration, we
                      aim to empower individuals not only in their personal
                      growth but also in contributing to the collective
                      well-being of the community.
                    </p>
                  </div>
                  <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {/* List Item 1 */}
                    <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500  hover:-translate-y-[10px] group ">
                      <div className="flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                        <span className="icon-checked"></span>
                      </div>
                      <div className="ml-6 sm:ml-6">
                        <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                          Empowering Kashmir's People
                        </h5>
                        <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                          Integrating knowledge for growth & well-being.
                        </p>
                      </div>
                    </li>

                    {/* List Item 2 */}
                    <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500  hover:-translate-y-[10px] group">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                          Inspiring New Seekers
                        </h5>
                        <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                          Fostering spiritual wisdom and scientific insight.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="text-left-mobile relative block bg-fixnix-darkpurple py-[120px] z-[1]">
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
                Spirituality and Science
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                Fusing spirituality and science for profound divine
                understanding & growth
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
                      Divine Geometry
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Exploring sacred patterns linking spirituality with
                    mathematical principles, revealing the universe's divine
                    symmetry.
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
                      Sustainable Harmony
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Encouraging eco-friendly living in deep sync with nature and
                    traditional Kashmiri sustainable practices.
                  </p>
                </div>
              </div>

              {/* Experience Three Single */}
              <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
                <div className="relative block">
                  <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                    <i className="icon-headphones"></i>
                  </span>
                </div>
                <div className="ml-[20px] sm:ml-[20px]">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                    <Link
                      href="contact"
                      className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
                    >
                      Divine Knowledge
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Uniting Sufism and modern science to deepen understanding,
                    promote personal transformation, and global healing.
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
                This Sacred Journey
                <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>

              {/* Section Title */}
              <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                Discovery of where worlds of science & spirituality meet
              </h2>

              {/* Section Text */}
              <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
                Whether you are a scientist, a spiritual seeker, or someone
                curious about the deeper mysteries of the universe, the Sufi
                Science Centre - Kashmir Chapter offers a sanctuary for those
                seeking to understand the divine harmony that governs all
                things. Together, we will explore the sacred science that unites
                us with the Divine, with each other, and with the cosmos,
                walking the path of wisdom, compassion, and light.
              </p>
              <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
                Exploring the sacred science that unites us with the Divine,
                cosmos, and each other through wisdom.
              </h2>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
