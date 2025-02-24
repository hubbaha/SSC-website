"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Banner from "@/components/sections/home3/Banner";
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
        {/*Core Services Start*/}
        <Banner></Banner>
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
                Foundational Sciences
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className=" text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold mt-[14px]">
                That shape the very essence of existence
              </h2>
              <p className="text-gray-700 pt-[20px]">
                In the sacred land of Kashmir, where the timeless wisdom of Sufi
                mysticism intertwines with the natural world. These sciences,
                deeply rooted in the spiritual traditions of the land, serve as
                a bridge between the unseen mysteries of the universe and the
                observable world. At the Sufi Science Center, we delve into the
                heart of these teachings, where science and spirituality meet in
                harmony, guiding us toward a deeper understanding of life,
                energy, and consciousness.
              </p>
            </div>

            <div className="row flex flex-wrap">
              {/* Service 1 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className=" relative block bg-fixnix-lightpurple shadow-light-purple mb-[30px] z-[2] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                  {/* <div className=" relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
            <img src="assets/images/services/services-1-1.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
            <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
          </div> */}
                  <div className=" p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] text-white transition-all duration-[500ms]  font-semibold leading-[34px]">
                      Geometry of the Universe
                    </h3>
                    <p className=" mt-[15px] mb-[22px] text-white">
                      The cosmos is a living manifestation of divine geometry—a
                      sacred order woven into every fiber of creation. This
                      sacred geometry is the language through which the Creator
                      expresses divine harmony, guiding the movement of planets,
                      the growth of plants, and the rhythm of the human heart.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="relative block bg-fixnix-lightpurple shadow-light-purple mb-[30px] z-[2] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                  {/* <div className="relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
            <img src="assets/images/services/services-1-2.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
            <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
          </div> */}
                  <div className=" p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] text-white transition-all duration-[500ms] font-semibold leading-[34px]">
                      Science of Light & Energy
                    </h3>
                    <p className=" mt-[15px] mb-[22px] text-white">
                      In Sufi mysticism, light is a profound symbol of the
                      Divine's presence and wisdom. The light of the heart
                      illuminates the path to knowledge, while the light of the
                      universe reflects the infinite beauty of the Creator. But
                      beyond its meaning, light is a real force—a form of energy
                      that permeates everything.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="relative block bg-fixnix-lightpurple shadow-light-purple mb-[30px] z-[2] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-darkpurple">
                  {/* <div className=" relative block overflow-hidden bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] z-[1]">
            <img src="assets/images/services/services-1-3.jpg" alt="" className="w-full rounded-tl-[5px] rounded-tr-[5px] transition-all ease-in-out duration-[500ms]"/>
            <div className="absolute top-[-100%] bottom-[100%] left-0 right-0 bg-fixnix-lightpurple rounded-tl-[5px] rounded-tr-[5px] mix-blend-multiply transition-all ease-in-out duration-[600ms] z-[1]"></div>
          </div> */}
                  <div className="p-[22px] pb-[30px]">
                    <h3 className=" text-[24px] text-white transition-all duration-[500ms]  font-semibold leading-[34px]">
                      Sacred Sound & Vibrations
                    </h3>
                    <p className="text-white mt-[15px] mb-[22px]">
                      Sound is not merely an audible phenomenon; it is the
                      vibrational expression of the Divine. In Sufism, sound is
                      used as a tool for spiritual awakening. The sacred
                      vibrations produced in these practices align the
                      individual’s soul with the cosmic resonance, tuning it to
                      the frequencies of the Divine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block pb-20 mt-20 pt-10 bg-fixnix-darkpurple text-left-mobile ">
          <div className="container mx-auto px-4">
            <div className="text-center my-12">
              <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-white font-semibold uppercase z-[1]">
                The Path of Knowledge & Divine Wisdom
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-white"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-white"></span>
              </span>
              <h2 className="text-3xl font-bold text-fixnix-white mt-2">
                The knowledge that transcends the intellect and touches the soul
              </h2>
              <p className="text-fixnix-white mt-3">
                At the Sufi Science Center, we honor the sacred unity of science
                and spirituality. Explore these foundational sciences, where the
                divine mysteries of the universe meet the rational insights of
                modern science. A journey to unlock the hidden wisdom that lies
                within us and in the world around us. It emphasizes the
                importance of direct experience of the Divine, encouraging
                seekers to cultivate an inner knowing that guides them in both
                their spiritual and worldly lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "icon-award",
                  title: "Consciousness",
                  desc: "Through the awakening of consciousness, seekers experience the world as a unified whole, deeply connected to the Divine.",
                },
                {
                  icon: "icon-customer-service",
                  title: "State of the soul ",
                  desc: "Neuroscience, psychology, and spiritual traditions converge here to reveal the profound potential of the human soul.",
                },
                {
                  icon: "icon-security",
                  title: "The Laws of Nature",
                  desc: "Sufism teaches that universe is governed by universal laws, that dictate the balance of nature and the order of all creation.",
                },
                {
                  icon: "icon-computer-1",
                  title: "Sufi and Scientific Perspectives",
                  desc: "The harmony between Sufi teachings on the laws of nature & modern principles like the laws of thermodynamics.",
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
                      <h2 className="text-fixnix-lightpurple">{item.title}</h2>
                    </div>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="services-two">
          <section className="relative pb-20 bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                      The Soul and the Elements
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
                      The soul is a reflection of the Divine
                    </h2>
                  </div>
                  <p className="text-gray-700 mt-4">
                    According to Sufi teachings, the soul is a reflection of the
                    Divine, a spark of light that exists beyond the physical
                    realm. It is through the purification of the soul that one
                    attains true knowledge and enlightenment. In this sacred
                    journey, the elements—earth, water, fire, and air—play an
                    integral role, representing both the material and spiritual
                    aspects of our existence.
                  </p>
                  <p className="text-gray-700 mt-2">
                    At the Sufi Science Center, we study the relationship
                    between the soul and the elements, recognizing that each
                    element holds specific energies and qualities that
                    correspond to different aspects of the self. Just as the
                    body is composed of these elements, so too is the soul
                    influenced by their spiritual essence. By understanding
                    these connections, we seek to harmonize the inner world with
                    the outer world, creating balance and peace.
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
                        className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-purple-700"
                      >
                        <span className="fa fa-play text-lg"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Modal Video */}
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="Get7rqXYrbQ"
          onClose={() => setOpen(false)}
        />

        {/*Services One End*/}
      </Layout>
    </>
  );
}
