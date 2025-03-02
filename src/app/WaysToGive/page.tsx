"use client";
import ModalVideo from "react-modal-video";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "@/components/sections/home3/Banner";
import { useState } from "react";
const WaysSlides = [
  {
    subTitle: "Give with Purpose, Transform Lives",
    title: " Support Sufi Knowledge<br/> & Spiritual Growth",
    text: "Your generosity helps preserve Kashmiri Sufi traditions, fund research,<br/> and provide spiritual education to seekers worldwide.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Empower, Uplift, Sustain, Preserve, Share",
    title: " Make an Impact with<br/> Your Contribution",
    text: " Support our mission by donating, sponsoring projects, or contributing resources<br/> to keep the wisdom of Sufism alive for future generations.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: " Give from the Heart, Inspire Change  ",
    title: "Your Support Fuels<br/> Spiritual Education",
    text: " Join hands in preserving Sufi wisdom by supporting initiatives that <br/>spread knowledge, foster community, and sustain sacred teachings.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Sustaining Wisdom, One Gift at a Time",
    title: "Donate to Keep Sufi<br/> Teachings Alive",
    text: "Every contribution strengthens our work in research, learning, and community<br/> engagement—helping souls connect with timeless Sufi wisdom.",
    buttonText: "Explore Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Preserve, Educate, Inspire, Give, Grow",
    title: "Support Sufi Science for<br/> Future Generations",
    text: "Be part of a movement that nurtures spiritual enlightenment, preserves traditions, <br/>and fosters a community of seekers and scholars.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];


export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={WaysSlides}/>

      <section className="about-one">
        <div
          className="about-one__bg float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",          }}
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
                  <img
  src="assets/images/resources/about-1-1.jpg"
  alt=""
  className="h-[600px] w-auto"
/>

                  <div className="about-one__our-goal">
                    <p className="about-one__our-goal-sub-title">
                      Words of Rumi:
                    </p>
                    <h3 className="about-one__our-goal-title">
                      "When you let go of what you are, you become what you
                      might be."
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Ways to Give </span>
                  
                </div>
                
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                        Donate to SSC
                        </h3>
                        <p className="about-one__points-subtitle">
                        Empower knowledge, nurture spiritual wisdom.
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
                        Sponsor a Sufi Scholar
                        </h3>
                        <p className="about-one__points-subtitle">
                        Support learning, illuminate future paths
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                        Preserve Sacred Sufi Art
                        </h3>
                        <p className="about-one__points-subtitle">
                        Safeguard heritage, sustain artistic traditions.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                        Sponsor Sacred Sufi Events
                        </h3>
                        <p className="about-one__points-subtitle">
                        Celebrate spirituality, foster divine connections.
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
    
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative flex flex-col space-y-6">
              <Link href="/DonationForm" className="relative">
                <img
                  src="/assets/images/resources/Donate.png"
                  alt=""
                  className="w-[500px] rounded-lg shadow-lg"
                />
                
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            <div className="mb-6">
              <span className="relative inline-block  font-bold sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple  uppercase z-[1]">
              Donate to SSC
                <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-3xl font-bold mt-2">
              Empower knowledge, nurture spiritual wisdom, and support the advancement of Sufi scholarship and research.
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
            Your contribution enables the Sufi Science Centre to sustain its mission of fostering intellectual and spiritual growth. By donating, you help fund research, educational initiatives, and outreach programs dedicated to preserving and expanding the rich legacy of Sufi knowledge.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Support research on Sufi philosophy.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Expand outreach for spiritual education.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase ">
                Preserve and promote sacred wisdom.
                </p>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
            Your generosity fuels a movement that blends knowledge and spirituality, ensuring that the teachings of Sufism continue to inspire and guide seekers worldwide.
            </p>
          </div>
        </div>

       
      </section>
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative flex flex-col space-y-6">
              <Link href="/DonationForm" className="relative">
                <img 
                  src="/assets/images/resources/Donate.png"
                  alt=""
                  className="w-[500px] rounded-lg shadow-lg"
                />
                
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            <div className="mb-6">
              <span className="relative inline-block text-sm sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple font-bold uppercase z-[1]">
              Sponsor a Sufi Scholar
                <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-3xl font-bold mt-2">
              Support learning, illuminate paths, and empower future scholars.
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
            By sponsoring a Sufi scholar or student, you provide crucial financial assistance for academic pursuits, research, and training in mystical traditions. Your support ensures the continuity of sacred wisdom and empowers future thought leaders in Sufi philosophy.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Provide financial aid for scholars.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Ensure sacred wisdom is preserved.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase ">
                Empower future leaders in spirituality.
                </p>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
            Your sponsorship nurtures the next generation of Sufi scholars, preserving and expanding sacred teachings.
            </p>
          </div>
        </div>

        
      </section>
    
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative flex flex-col space-y-6">
              <Link href="/DonationForm" className="relative">
                <img
                  src="/assets/images/resources/Donate.png"
                  alt=""
                  className="w-[500px] rounded-lg shadow-lg"
                />
                
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            <div className="mb-6">
              <span className="relative inline-block text-sm sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple font-bold uppercase z-[1]">
              Preserve Sacred Sufi Art
                <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-3xl font-bold mt-2">
              Safeguard heritage, sustain traditions, protect sacred craftsmanship.
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
            Your contribution plays a pivotal role in preserving centuries-old Sufi artistic expressions, including calligraphy, architecture, and handcrafted artifacts. By supporting this initiative, you help artisans sustain their craft while ensuring that sacred art continues to inspire future generations.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Support artisans preserving traditional crafts.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Ensure sacred art remains valued.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase ">
                Promote appreciation of cultural heritage.
                </p>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
            Your support protects the timeless beauty of sacred art, ensuring its legacy remains intact.
            </p>
          </div>
        </div>

        
      </section>
     
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative flex flex-col space-y-6">
              <Link href="/DonationForm" className="relative">
                <img
                  src="/assets/images/resources/Donate.png"
                  alt=""
                  className="w-[500px] rounded-lg shadow-lg"
                />
                
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            <div className="mb-6">
              <span className="relative inline-block text-sm sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple font-bold uppercase z-[1]">
              Sponsor Sacred Events
                <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-3xl font-bold mt-2">
              Celebrate spirituality, foster unity, support sacred gatherings.
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
            By sponsoring sacred events, you enable the organization of spiritual retreats, lectures, and cultural ceremonies that promote unity, contemplation, and personal growth. Your support helps facilitate meaningful engagements that strengthen the Sufi community and beyond.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Enable gatherings for spiritual connection.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase">
                Support events promoting inner peace.
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-600 text-xl mr-4">✔</span>
                <p className="text-lg font-semibold uppercase ">
                Encourage transformative sacred experiences.
                </p>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
            Your support for sacred events strengthens spiritual connections, fostering enlightenment and communal harmony.
            </p>
          </div>
        </div>

       
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
              Your generosity ensures that this sacred mission continues,
              touching lives and spreading light across the world.
              <br />
              Let us know how you wish to contribute, and we will guide you on
              your journey of sacred service.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/DonationForm" className="thm-btn main-slider-two__btn">
              {" "}
              Donate Now{" "}
            </Link>
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
              Together, we walk the path of spiritual awakening, sharing the
              light of wisdom, compassion, and peace.
            </h2>

            {/* Section Text */}
            <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              We see each one of you as a partner on this sacred journey.
              Whether you offer through your time, resources, or prayers, your
              contribution is an offering to the Divine that flows through all
              things.May your giving be a reflection of the Divine generosity
              that fills your heart, and may you be blessed with the peace that
              comes from knowing your support is nurturing the sacred traditions
              of Kashmir, keeping them alive for generations.
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
