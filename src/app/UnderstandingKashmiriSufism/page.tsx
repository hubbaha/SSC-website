import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        headTitle="Our Team"
        wrapperCls="team-page-wrapper"
      >
        <Banner></Banner>
        {/*Team Top Start*/}
        <section className="text-left-mobile team-top">
          <div className="container mx-auto px-4">
            <div className="text-center relative block mt-[-6px] mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[16px]  leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                Understanding Kashmiri Sufism
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>

              {/* Section Title */}
              <h2 className="mt-[14px] text-fixnix-darkpurple text-[28px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[48px] md:leading-[52px] font-semibold">
                Uniting Kashmir Sufism & Modern Science
              </h2>

              {/* Section Text */}
              <p className="pt-[20px] text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
                The Sufi Science Centre - Kashmir Chapter blends ancient Sufi
                wisdom with modern scientific exploration. Rooted in Kashmir’s
                mystical heritage, it invites seekers on a transformative
                journey of spiritual awakening, connecting body, mind, and soul,
                while deepening understanding of existence, consciousness, and
                the universe, fostering holistic growth and promoting profound
                inner peace, balance, and harmony in life.
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
                Essence of Kashmiri sufism
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                Unity, Divine Light, and the Sacred Journey of Oneness,
                Healing,& Transformation.
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
                      The Concept of Unity
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Realizing interconnectedness and oneness with the world,
                    emanating from a singular divine source.
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
                      Spiritual Mindfulness
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Practicing mindfulness in worship and integrating it into
                    daily life fosters a profound connection to the Divine.
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
                      Humility in Action
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Embracing simplicity & fostering humility through actions
                    are seen as fundamental steps toward achieving
                    self-purification.{" "}
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
                      Spiritual Geography of Kashmir
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                      Exploring Kashmir’s Sacred Geography as Divine Reflection
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700">
                      Kashmir’s natural landscapes—its lakes, valleys, forests,
                      and mountains—reflect the divine presence. To truly
                      understand Kashmir’s Sufism, one must engage with the
                      land, walk the sacred paths of saints, and meditate at
                      serene locations like Dal Lake and Nigeen Lake, where
                      nature mirrors the depths of the soul.
                    </p>
                  </div>
                  <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {/* List Item 1 */}
                    <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500  hover:-translate-y-[10px] group ">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                        <span className="icon-checked"></span>
                      </div>
                      <div className="ml-6 sm:ml-6">
                        <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                          Sacred Kashmir Landscapes
                        </h5>
                        <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                          Divine presence reflected in lakes & mountains.
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
                          Meditation on Sacred Shores
                        </h5>
                        <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                          Reflecting by Dal & Nigeen Lake{" "}
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
                Spiritual Practices
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                How the spiritual practices are diverse & rooted in both Islamic
                & local traditions?
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
                      Zikr (Remembrance)
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Zikr, through repetitive chanting God’s names to attain
                    spiritual focus, inner peace, and connection with the
                    Divine.
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
                      Muraqaba (Meditation)
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Deep contemplation and meditation help foster a stronger
                    bond with the Divine presence and awareness.
                  </p>
                </div>
              </div>

              {/* Experience Three Single */}
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
                      Sama (Music & Dance)
                    </Link>
                  </h3>
                  <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    Listening to mystical music and participating in rhythmic
                    movements to achieve spiritual ecstasy.
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
                Your Journey Begins Here
                <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>

              {/* Section Title */}
              <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
                Embark on a Transformative Journey of Awakening
              </h2>

              {/* Section Text */}
              <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
                Our center provides a sacred space for seekers, scientists, and
                individuals yearning to understand existence. The Kashmir
                Chapter of the Sufi Science Centre serves as a guiding beacon,
                shedding light on the timeless wisdom of the Sufi tradition
                while embracing modern discoveries. Step into the world of Sufi
                Science and experience a profound journey of awakening, healing,
                and transformation.
              </p>

              {/* Subheading */}
              <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
                Discover the truth within, and awaken to the Divine Presence
                that surrounds us all.
              </h2>
            </div>
          </div>
        </section>

        {/* Team One End */}
      </Layout>
    </>
  );
}
