import Layout from "@/components/layout/Layout";
import Whychoose from "@/components/sections/home2/Whychoose";
import Banner from "@/components/sections/home3/Banner";
import Link from "next/link";
const MultimediaSlides = [
  {
    subTitle: " Exploring Humanity Through Sufi Wisdom",
    title: "The Science of Human <br/>Connection & Growth",
    text: " Discover how Sufi teachings illuminate psychology, behavior, and human potential, <br/>fostering wisdom, empathy, and spiritual well-being.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Understanding Self, Society, and Spirituality",
    title: "The Sufi Perspective<br/> on Human Nature",
    text: "Learn how Kashmiri Sufism integrates psychology, ethics, and consciousness to<br/> elevate human understanding and social harmony.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Mind, Body, Soul, Unity, Purpose",
    title: "Unraveling the Mysteries<br/> of Human Experience",
    text: " Sufi philosophy explores human sciences by merging intellect, emotions, and <br/>spirituality to create a balanced, enlightened existence.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Humanity’s Journey to Inner Fulfillment",
    title: "  The Science of Being<br/> and Becoming",
    text: " Through Sufi teachings, understand human psychology, relationships, and consciousness<br/> to unlock a deeper connection to self and society.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Bridging Science, Spirit, and Humanity",
    title: "Exploring Human Nature <br/>Through Sufi Insights",
    text: "  Delve into Sufi perspectives on psychology, emotions, and consciousness, guiding<br/> personal transformation and the understanding of human potential.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];
export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={MultimediaSlides}/>
      {/* Blog Two Start */}
      <section className="relative block py-[120px] text-left-mobile">
        <div className="container mx-auto">
          <section className="relative block pb-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                Human Science
                  <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                  <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                </span>
                <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
                Sacred journey of self-discovery and transformation
                </h2>
                <p className="text-gray-600 mt-3">
                In the Sufi tradition, Human Science is not merely the study of the physical form but an exploration of the soul’s divine journey. The human being, a microcosm of the universe, carries within it the potential for divine union. The Sufi path teaches that the soul is a reflection of the Divine light, and through purification and self-awareness, one can transcend the mundane and awaken to the highest truth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "icon-award",
                    title: "The Divine Reflection",
                    desc: "The soul reflects Divine light, embodying potential for spiritual union and transcendence.",
                  },
                  {
                    icon: "icon-customer-service",
                    title: "Journey of the Self",
                    desc: "The self evolves through awakening, purification, enlightenment, and divine union.",
                  },
                  {
                    icon: "icon-security",
                    title: "The Inner Cosmos",
                    desc: "Sufi Human Science explores the inner universe through heart and mind.",
                  },
                  {
                    icon: "icon-computer-1",
                    title: " Role of the Murshid",
                    desc: "The Murshid guides seekers through spiritual stages to achieve divine union.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white shadow-light-purple border border-transparent rounded-lg p-6 transition duration-500 hover:border-fixnix-lightpurple hover:-translate-y-2 hover:translate-x-2"
                  >
                    <div className="text-fixnix-lightpurple text-5xl">
                      <span className={item.icon}></span>
                    </div>
                    <div className="ml-5">
                      <div className="text-xl font-semibold text-fixnix-darkpurple hover:text-fixnix-lightpurple transition duration-500">
                        <h2 className="text-fixnix-lightpurple">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

             
            </div>
          </section>
          {/* <Whychoose></Whychoose> */}
         </div>
          
      </section>
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
              The Sacred Temple
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2
                className="mt-[14px]  text-center  text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold
"
              >
                The Sufi perspective on the body as a divine vessel and the path to holistic well-being.
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
                       Divine Vessel
                    </Link>
                  </h3>
                  <p className="text-fixnix-white group-hover:text-white sm:text-[16px]">
                  This holistic approach integrates spiritual practices and modern wellness for true well-being.
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
                      Sacred Healing
                    </Link>
                  </h3>
                  <p className="text-fixnix-white group-hover:text-white sm:text-[16px]">
                  Rooted in ancient Kashmiri traditions, Sufi healing practices bridge spiritual & physical realms. 
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
                       Quantum Consciousness
                    </Link>
                  </h3>
                  <p className="text-fixnix-white group-hover:text-white sm:text-[16px]">
                  Consciousness transcends the body, connecting to universal Divine intellect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section><section className="text-left-mobile team-top py-[40px] sm:py-[60px] md:py-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            Awakening the Divine Potential
              <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
            A sanctuary where you can explore the depths of Human Science and uncover the divine mysteries within.
            </h2>

            {/* Section Text */}
            <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
            Human Science, as explored in the Sufi Science Explorer - Kashmir Chapter, teaches us that every individual holds within them the potential to be a reflection of the Divine. The human being is not just a creature of flesh and blood but a vessel through which divine attributes—such as compassion, mercy, love, and wisdom—can manifest. The purpose of human life is not to seek fleeting pleasures but to awaken to the true nature of the self and fulfill the divine purpose for which one was created.
            </p>

            {/* Subheading */}
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
            A journey of self-discovery, guided by the light of Sufi teachings.
            </h2>
          </div>
        </div>
      </section>
      {/* Blog Two End */}
    </Layout>
  );
}
