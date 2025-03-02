"use client";
import CounterUp from "../../components/elements/CounterUp";
import Layout from "../../components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Skill from "@/components/sections/home2/Skill";
import Banner from "@/components/sections/home3/Banner";
const CollaborationSlides = [
  {
    subTitle: "Harnessing Energy, Expanding Consciousness, Awakening",
    title: " Exploring Sufi Tools for <br/>Inner Transformation",
    text: "Discover ancient Sufi spiritual technologies—meditation, breathwork, and sound—designed<br/> to elevate consciousness and connect with the divine.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Sacred Practices for Inner Awakening",
    title: " Unlocking the Secrets<br/> of Sufi Science",
    text: " Experience the transformative power of spiritual technologies, where Sufi wisdom merges<br/> with energy, vibration, and the science of the soul.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Energy, Sound, Breath, Mind, Connection ",
    title: "Ancient Sufi Techniques<br/> for Spiritual Growth",
    text: "Explore mystical tools like dhikr, sacred geometry, and sound healing that enhance<br/> awareness, balance energy, and deepen spiritual connection.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "The Science of Divine Connection",
    title: " Harnessing Sufi Knowledge<br/> for Spiritual Evolution",
    text: "Sufi spiritual technologies integrate breath control, rhythmic chanting, and focused intention to <br/>activate higher states of consciousness and enlightenment.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: " Mystical Science of Sufi Practices",
    title: "The Art of Spiritual <br/>Energy Mastery",
    text: "Through ancient Sufi methods, learn how to channel divine energy,<br/> purify the soul, and align with the universal flow.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: number) => {
    // Type the key parameter as a number
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: isActive.key, // Include the key when updating the state
      });
    } else {
      setIsActive({
        status: true,
        key, // Make sure to pass the key value when updating
      });
    }
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner slides={CollaborationSlides}/>
        {/*Services Two Start*/}
        <section className="services-two">
          <section className="relative pb-20 bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                      Spiritual Technologies
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
                    Bridging the Divine and the Scientific
                    </h2>
                  </div>
                  <p className="text-gray-700 mt-4">
                  At the heart of Kashmir's timeless spirituality lies a sacred knowledge—an ancient wisdom that blends the mystical and the scientific, the spiritual and the technological. The Sufi Science Explorer - Kashmir Chapter is a journey into this profound realm of Spiritual Technologies, where divine insight meets modern innovation to unlock the deepest mysteries of existence.
                  </p>
                  <p className="text-gray-700 mt-2">
                  Spiritual Technologies are more than just metaphysical tools—they are pathways to the soul’s ultimate awakening, offering a blueprint for living harmoniously with the universe. Rooted in centuries-old Sufi traditions, these sacred practices and knowledge systems provide a unique lens to understand not only the unseen aspects of our world but also the hidden energies that govern the cosmos.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[425px] h-[500px]  bg-fixnix-lightpurple">
                    <img
                      src="assets/images/resources/skill-1-1.jpg"
                      alt="Repair Services"
                      className="w-[425px] h-[500px] mix-blend-multiply"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setOpen(true)}
                        className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-fixnix-lightpurple"
                      >
                        <span className="fa fa-play text-lg"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter Section */}
          </section>

          {/* Modal Video */}
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="Get7rqXYrbQ"
            onClose={() => setOpen(false)}
          />
          
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
            The Pillars of Sufi Spiritual Technologies
              <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2
              className="mt-[14px]  text-center  text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold
"
            >
              Unveiling the Divine: Sufi Spiritual Technologies for Inner Harmony and Cosmic Connection
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
                    Sacred Geometry
                  </Link>
                </h3>
                <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                Explore cosmic patterns, unlock balance, and heal through the symmetry of divine design.
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
                   Sound Alchemy
                  </Link>
                </h3>
                <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                Channel sacred vibrations, transcend boundaries, and awaken higher realms.
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
                    Eternal Presence
                  </Link>
                </h3>
                <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                Expand consciousness, dissolve ego, and merge with the Divine in the timeless present moment.
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
            The Sacred Sanctuary of Sufi Spiritual Technologies
              <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
            Where Nature Meets the Divine: Amplifying Mystical Energies in Kashmir’s Serene Landscapes
            </h2>

            {/* Section Text */}
            <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
            Kashmir, with its breathtaking natural beauty and profound spiritual heritage, serves as the ideal setting for exploring Sufi Spiritual Technologies. The Valley’s snow-capped mountains, pristine lakes, and lush forests act as natural amplifiers for the sacred vibrations that permeate the region. Through practices like dhikr amidst the Himalayas or whirling by Dal Lake, seekers deepen their connection to the Divine, transforming both themselves and their surroundings. Our workshops and trainings aim to revive these timeless spiritual technologies, fostering balance, peace, and spiritual fulfillment in a world yearning for reconnection with the sacred.
            </p>

            {/* Subheading */}
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
            A gateway to the Divine, and where your soul’s deepest aspirations can unfold.
            </h2>
          </div>
        </div>
      </section>

        {/*Why Choose One End*/}
      </Layout>
    </>
  );
}
