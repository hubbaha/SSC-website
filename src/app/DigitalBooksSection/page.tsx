"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/sections/home3/Banner";
import Welcome from "../../components/sections/home3/Welcome";
import About from "@/components/sections/home2/About";
const BooksSlides = [
  {
    subTitle: "Sacred Texts, Anytime, Anywhere",
    title: "Discover Sufi Wisdom <br/>in Digital Books",
    text: " Access an extensive collection of Sufi literature, manuscripts, and teachings <br/>in digital format, bringing centuries of wisdom to your fingertips.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Timeless Knowledge in Digital Form",
    title: "A Treasure of Sufi<br/> Literature Online",
    text: "Explore rare and contemporary Sufi texts, offering deep insights into<br/> spirituality, philosophy, and the mystical traditions of Kashmiri Sufism.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Read, Reflect, Learn, Grow, Transform",
    title: " The Gateway to Sufi<br/> Knowledge Online",
    text: "Enhance your spiritual journey with a curated selection of digital books, <br/>bridging Sufi heritage with modern understanding.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Wisdom Preserved, Digitally Accessible",
    title: " Unlock the Mystical <br/>World of Sufism",
    text: "Explore centuries of Sufi philosophy, poetry, and teachings in a vast digital<br/> library designed for seekers of truth and enlightenment.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "A Digital Library of Enlightenment",
    title: "Sufi Teachings at<br/> Your Fingertips",
    text: " Dive into a rich collection of sacred Sufi writings, available in<br/> digital format for convenient access and lifelong learning.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner slides={BooksSlides}/>

        {/* <Welcome /> */}
        <section className="relative block py-[80px] md:py-[100px] lg:py-[120px] z-[1]">
          <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] bottom-0 mb-0 sm:bg-white md:bg-white lg:bg-white xl:bg-fixnix-lightpurple 2xl:bg-fixnix-lightpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center z-[-1]"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
                <div className="relative block">
                  <div className="mb-7">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                      Welcome To
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">
                      Our Digital Books
                    </h2>
                  </div>
                  <p className="text-base md:text-lg font-semibold text-fixnix-darkpurple leading-[28px]">
                    We embrace the timeless teachings of Sufism through the lens
                    of modern technology, where Divine Wisdom meets the digital
                    age.
                  </p>
                  <p className="mt-4 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3">
                    Our Digital Books collection offers a sacred journey through
                    the mystical realms of Sufi science. These texts, carefully
                    curated from the rich tapestry of Kashmiri spiritual
                    heritage, bring to you a fusion of ancient Sufi philosophy,
                    mysticism, and scientific thought. With each page, you will
                    encounter the light of knowledge that transcends time and
                    space, leading you to the deeper truths of existence and the
                    divine.
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
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 flex flex-wrap items-center">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative flex flex-col space-y-6">
                <div className="relative">
                  <img
                    src="/assets/images/resources/about-2-1.jpg"
                    alt=""
                    className="w-[500px] rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
                    <img
                      src="/assets/images/resources/about-2-2.jpg"
                      alt=""
                      className="w-40 h-40 rounded-lg shadow-light-purple"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setOpen(true)}
                        className="bg-fixnix-lightpurple text-white p-4 rounded-full shadow-lg"
                      >
                        <span className="fa fa-play"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
              <div className="mb-6">
                <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                  Why Digital Books?
                  <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                </span>
                <h2 className="text-3xl font-bold mt-2">
                  The Digital Books of the Sufi Centre
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Provides an easily accessible and sustainable method to engage
                with the sacred knowledge of Sufism
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <span className="text-red-600 text-xl mr-4">✔</span>
                  <p className="text-lg font-semibold uppercase">
                    {" "}
                    Global Access
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 text-xl mr-4">✔</span>
                  <p className="text-lg font-semibold uppercase">
                    Instant Access
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 text-xl mr-4">✔</span>
                  <p className="text-lg font-semibold uppercase ">
                    Preservation of Tradition
                  </p>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Through digitalization, we ensure that the ancient wisdom of
                Kashmiri Sufism is preserved for future generations, while being
                available to all who wish to explore its depths.
              </p>
            </div>
          </div>

          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="Get7rqXYrbQ"
            onClose={() => setOpen(false)}
          />
        </section>
        <section className="team-top text-left-mobile">
          <div className="container mx-auto px-4text-left-mobile">
            <div className="text-center sm:text-left relative block mt-[-6px] mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                Our Books Collection
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>

              {/* Section Title */}

              {/* Section Text */}
              <p className="pt-[20px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
                Our collection includes a wide range of Sufi texts, written by
                spiritual luminaries and scholars whose teachings have shaped
                the spiritual landscape of Kashmir and beyond. These digital
                books offer insights into subjects such as the nature of
                reality, the soul’s journey and the science of divine love.
                Whether you are a novice or a seasoned seeker, these books will
                guide you on your path to spiritual enlightenment.
              </p>
            </div>
          </div>
        </section>

        {/* Product Start */}

        <section className="mb-28 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-6">
                <div className="p-4 border rounded-lg  bg-fixnix-lightpurple shadow-sm relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 pr-10  border rounded-lg bg-fixnix-lightpurple "
                  />
                  <i className="fa fa-search absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-100"></i>
                </div>
              </div>
              {/* Products */}
              <div className="md:col-span-3">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
                  <p>Showing 1–9 results</p>
                  <select className="p-2 border bg-gray-100 rounded-lg">
                    <option className="hover:bg-fixnix-lightpurple">
                      Sort by popular
                    </option>
                    <option>Sort by Price</option>
                    <option>Sort by Ratings</option>
                  </select>
                </div>
                <div className="grid grid-cols-1  shadow-sm sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Product Card */}
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="border shadow-light-purple  rounded-lg   p-4"
                      style={{ boxShadow: "fixnix-lightpurple" }} // Light purple shadow
                    >
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={`/assets/images/shop/produc${i + 1}.jpg`}
                          alt="Product"
                          className="w-full h-48 object-cover hover:scale-125"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-yellow-500">
                          {[...Array(5)].map((_, j) => (
                            <i key={j} className="fa fa-star"></i>
                          ))}
                        </div>
                        <h4 className="mt-2 font-semibold ">
                          <Link
                            href="product-details"
                            className="text-fixnix-darkpurple"
                          >
                            Product {i + 1}
                          </Link>
                        </h4>
                        <p className="text-lg font-bold text-gray-600">
                          ${(i + 1) * 10 + 20}.00
                        </p>
                        <div className="mt-3">
                          <Link
                            href="/ProductDetails"
                            className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white px-4 py-2 rounded-lg"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
