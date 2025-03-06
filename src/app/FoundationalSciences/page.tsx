"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";
const ScienceSlides = [
  {
    subTitle: "Exploring Knowledge, Rooted in Wisdom",
    title: " Unveiling the Core of<br/> Sufi Science",
    text: "Discover the fundamental sciences that bridge spirituality and intellect,<br/> forming the foundation of Kashmiri Sufi wisdom and enlightenment.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Science, Spirituality, Harmony, Truth, Understanding",
    title: "The Scientific Foundations of<br/> Sufi Thought",
    text: "Explore the principles of foundational sciences in Sufism, where reason,<br/> observation, and divine knowledge unite in harmony.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Timeless Wisdom, Scientific Exploration, Enlightenment",
    title: "Connecting Spirituality with<br/> Scientific Inquiry",
    text: "Unravel the essential sciences that support the philosophical, metaphysical, <br/>and intellectual traditions of Kashmiri Sufism.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Sacred Knowledge, Scientific Inquiry, Truth",
    title: " Bridging Science and <br/>Spiritual Wisdom",
    text: "Foundational sciences in Sufism offer a deeper understanding of nature, consciousness,<br/> and the universe through spiritual and intellectual exploration.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Ancient Science, Modern Spiritual Awakening",
    title: " Discover the Science Behind<br/> Sufi Mysticism",
    text: "  Learn how Kashmiri Sufi traditions incorporate scientific reasoning, natural laws,<br/> and divine knowledge to explore the mysteries of existence.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];
const blogTitles = [
  "Spiritual Foundations",
  "Mystical Cosmology",
  "Divine Numerology",
  "Attribute Studies",
  "Soul Psychology",
  "Unity Laboratory"
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
        {/*Core Services Start*/}
        <Banner slides={ScienceSlides}/>
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
          {/* <div className="text-left mb-12">
            <span className="relative text-left-mobile inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-bold uppercase z-[1]">
            Foundational Sciences
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
             
            </span>
            <h2 className="text-4xl font-bold text-fixnix-darkpurple mt-3 text-left-mobile">
              Our Research Focus
            </h2>
            <p className="text-gray-600 my-2 text-left-mobile">
            The Foundational Matrices serve as a structured framework for exploring the intersection of mysticism, science, and consciousness. Rooted in classical Sufi knowledge yet adapted for the modern seeker, this study unveils the hidden order of existence through mathematical, cosmological, and psychological dimensions.
            </p>
            <p className="text-gray-600 my-2 text-left-mobile">
            At the Kashmir Sufi Science Centre, under the Sufi Science Explorer Module, this structured approach provides seekers with a scientific yet experiential path to understanding divine reality, soul dynamics, and cosmic harmony.
            </p>
        </div> */}
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    Foundational Matrices
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <p className="text-gray-700 mt-4">
                  The Foundational Matrices serve as a structured framework for exploring the intersection of mysticism, science, and consciousness. Rooted in classical Sufi knowledge yet adapted for the modern seeker, this study unveils the hidden order of existence through mathematical, cosmological, and psychological dimensions.
                  </p>
                  <p className="text-gray-700 mt-2">
                  At the Kashmir Sufi Science Centre, under the Sufi Science Explorer Module, this structured approach provides seekers with a scientific yet experiential path to understanding divine reality, soul dynamics, and cosmic harmony.
                  </p>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                    <img
                      src="assets/images/resources/Collaboration1.png"
                      alt="Repair Services"
                      className="w-[350px] h-[350px] mix-blend-multiply"
                    />
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Counter Section */}
          </section>
        <Features></Features>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogTitles.map((title, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <div className="relative">
        <img
          src={`assets/images/blog/blog-1-${index + 1}.jpg`}
          alt={title}
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <Link href="/Details" className="text-white text-2xl">
            View Details
          </Link>
        </div>
      </div>
      <div className="p-4">
        
        <h3 className="text-xl text-center font-semibold text-fixnix-darkpurple mb-3">
          <Link
            href="/Details"
            className="text-fixnix-darkpurple hover:text-fixnix-lightpurple"
          >
            {title}
          </Link>
        </h3>
        <div className="flex justify-center">
        <Link
         href="/Details"
         className="inline-block bg-fixnix-lightpurple text-white hover:bg-fixnix-darkpurple px-2 py-1 rounded-md"
         >
         Unveil Insights
         </Link>
        </div>

      </div>
    </div>
  ))}
</div>

          
        </div>
      </div>
        

        {/*Services One End*/}
      </Layout>
    </>
  );
}
