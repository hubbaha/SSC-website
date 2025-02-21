'use client'
import ModalVideo from 'react-modal-video'
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "@/components/sections/home3/Banner";
import { useState } from 'react';



export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <Layout headerStyle={2} footerStyle={1}>
            <Banner></Banner>
            
            <section className="about-one">
            <div className="about-one__bg float-bob-y"
                style={{ backgroundImage: 'url(assets/images/backgrounds/about-one-bg-img-1.jpg)' }} >
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-one__left">
                            <div className="about-one__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-1-1.jpg" alt=""/>
                                <div className="about-one__our-goal">
                                    <p className="about-one__our-goal-sub-title">Words of Rumi:</p>
                                    <h3 className="about-one__our-goal-title">"When you let go of what you are, you become what you might be."</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Ways to Give </span>
                                <h2 className="section-title__title">Path of Divine Generosity</h2>
                            </div>
                            <p className="about-one__right-text-1">In the sacred journey of Sufi Science, giving is not just an act, but a reflection of the Divine Light within us. As the river flows, offering its waters to all who thirst, so too must we share the blessings that we have received. The Sufi tradition teaches us that the act of giving purifies the heart, elevates the soul, and connects us to the divine presence.</p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="about-one__points-single">
                                        <div className="about-one__points-icon">
                                            <span className="icon-repair"></span>
                                        </div>
                                        <div className="about-one__points-text">
                                            <h3 className="about-one__points-title">Share Our Message</h3>
                                            <p className="about-one__points-subtitle">Spreading the wisdom of Kashmir’s spiritual heritage</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-one__points-single">
                                        <div className="about-one__points-icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="about-one__points-text">
                                            <h3 className="about-one__points-title">Offer a Blessings Contribution</h3>
                                            <p className="about-one__points-subtitle">Strengthening the spiritual bonds between us all</p>
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
      backgroundImage: "url(assets/images/shapes/experience-one-shape-1.png)",
    }}
  ></div>
  <div className="container mx-auto">
    {/* Section Title */}
    <div className="text-center mb-[57px]">
    <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
    become part of this blessed journey
        <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px]  text-center  text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold
">
      Your contribution, no matter how small or large, is an expression of your connection to the Divine.
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
              Donate to the SSC
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          Your donation supports the ongoing work of safeguarding our spiritual teachings, sacred arts, and the profound traditions that continue to inspire souls.
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
             Sponsor a Sufi Scholar 
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          By supporting the education and training of future spiritual leaders, healers, and teachers, you ensure the continuation of sacred knowledge.
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
              Sponsor Sacred Events 
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          By sponsoring an event, you enable us to bring together seekers from all corners of the world to share in the beauty of Sufi teachings, practices, and arts.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<ModalVideo channel='youtube' isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
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
                  <button onClick={() => setOpen(true)} className="bg-fixnix-lightpurple text-white p-4 rounded-full shadow-lg">
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
          Why Donate To SSC?
                                <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                                 </span>
            <h2 className="text-3xl font-bold mt-2">
            Preserve, educate, empower, inspire.
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
          Donating to the Sufi Science Centre (SSC) is more than just giving—it’s a way to preserve ancient wisdom, empower communities, and keep the spiritual legacy of Kashmir alive. 
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-red-600 text-xl mr-4">✔</span>
              <p className="text-lg font-semibold uppercase">Connecting like-minded souls to the Sufi path</p>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 text-xl mr-4">✔</span>
              <p className="text-lg font-semibold uppercase">Making spiritual gatherings accessible to all</p>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 text-xl mr-4">✔</span>
              <p className="text-lg font-semibold uppercase ">Supporting local artisans craft techniques</p>
            </li>
          </ul>
          <p className="text-lg text-gray-700 mb-6">
          SSC is dedicated to protecting and reviving the ancient spiritual teachings of Kashmir, a region known for its deep-rooted Sufi traditions. Your support ensures that this knowledge is passed down to future generations.
          </p>
          
        </div>
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
    </section>
            {/* Product End */}
                  {/*Contact Two Start*/}
        <section className="relative bg-[var(--fixnix-darkpurple)] py-24 text-left-mobile">
  <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
  <div className="container">
  <div className="text-center mb-12">
        <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
        How to Get Involved
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-white"></span>
      </span>
      <h2 className="text-[var(--fixnix-white)] text-3xl mt-2 font-bold">
        To contribute, please reach out to us
      </h2>
      <p className="text-[var(--fixnix-white)] mt-2">
      Your generosity ensures that this sacred mission continues, touching lives and spreading light across the world.
        <br />
        Let us know how you wish to contribute, and we will guide you on your journey of sacred service.
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
      <Link href="/DonationForm" className='thm-btn main-slider-two__btn'> Donate Now </Link>
    </div>
  </div>
</section>
<section className="text-left-mobile team-top py-[40px] sm:py-[60px] md:py-[80px]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
      {/* Section Tagline */}
      <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
      Become a Divine Partner
        <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      Together, we walk the path of spiritual awakening, sharing the light of wisdom, compassion, and peace.
      </h2>

      {/* Section Text */}
      <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
      We see each one of you as a partner on this sacred journey. Whether you offer through your time, resources, or prayers, your contribution is an offering to the Divine that flows through all things.May your giving be a reflection of the Divine generosity that fills your heart, and may you be blessed with the peace that comes from knowing your support is nurturing the sacred traditions of Kashmir, keeping them alive for generations.
      </p>

      {/* Subheading */}
      <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
      We invite you to bring your light to our sacred mission.
      </h2>
    </div>
  </div>
</section>
        </Layout>
    );
}
