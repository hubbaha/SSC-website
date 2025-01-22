
import Layout from "../../components/layout/Layout"
import CounterUp from "../../components/elements/CounterUp"
import Link from "next/link"
import Image from "next/image"
export default function Home() {

    return (
        <>
        <Layout 
  headerStyle={2} 
  footerStyle={1} 
  breadcrumbTitle="Team" 
  headTitle="Our Team" 
  wrapperCls="team-page-wrapper"
>
         {/*Team Top Start*/}
         <section className="team-top">
  <div className="container mx-auto">
    <div className="text-center relative block mt-[-6px] mb-[49px] z-[1]">
      {/* Section Tagline */}
      <span className="relative inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
      Purpose & Direction
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold">
      To bridge Sufism’s wisdom with<br/> science’s evolving understanding. 
      </h2>

      {/* Section Text */}
      <p className="pt-[20px] text-gray-600">
      Our purpose is to create a sanctuary for knowledge seekers, where the path of the soul intertwines with the precision of scientific thought.<br/> Here, we honor the sacred connection between the seen and unseen, the known and unknown, understanding that true wisdom transcends<br/> the boundaries of any single discipline. In the Sufi tradition, the Divine is immanent in all creation, and by contemplating the<br/> mysteries of the universe, we come closer to the ultimate Truth that binds all things together.
      </p>
    </div>
  </div>
</section>

        {/*Team Top End*/}

        {/*Experience One Start*/}
        <section className="relative block bg-fixnix-darkpurple py-[120px] z-[1]">
  <div
    className="absolute top-[20px] bottom-[20px] left-0 right-0 bg-no-repeat bg-center bg-cover z-[-1]"
    style={{
      backgroundImage: "url(assets/images/shapes/experience-one-shape-1.png)",
    }}
  ></div>
  <div className="container mx-auto">
    {/* Section Title */}
    <div className="text-center mb-[57px]">
    <span className="relative inline-block text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
        A Vision for the Future
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[42px] leading-[52px] font-semibold">
      Honoring Kashmir’s legacy, uniting spirituality, <br/>
      science, and global progress.<br/> 
      </h2>
    </div>

    {/* Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {/* Experience One Single */}
      
<div className="relative flex items-center bg-[#ffff] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
  <div className="relative block">
    <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
      <i className="icon-service"></i>
    </span>
  </div>
  <div className="ml-[20px]">
    <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
      <Link
        href="services-details"
        className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
      >
        Global Recognition
      </Link>
    </h3>
    <p className="text-fixnix-lightpurple group-hover:text-white">
    Seeking global recognition of Kashmir's spiritual and scientific heritage, blending ancient wisdom with modernity.
    </p>
  </div>
</div>


      {/* Experience Two Single */}
      <div className="relative flex items-center bg-[#ffff] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
        <div className="relative block">
          <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
      <i className="icon-service"></i>
            <i className="icon-management"></i>
          </span>
        </div>
        <div className="ml-[20px]">
          <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
            <Link
              href="team"
              className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
            >
             Bridging Generations
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
          Inspiring future generations to explore the harmony between spirituality and science, ensuring lasting cultural preservation.
          </p>
        </div>
      </div>

      {/* Experience Three Single */}
      <div className="relative flex items-center bg-[#ffff] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
        <div className="relative block">
          <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
            <i className="icon-headphones"></i>
          </span>
        </div>
        <div className="ml-[20px]">
          <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
            <Link
              href="contact"
              className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
            >
              Sustainable Legacy
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
          Fostering a balanced, ethical approach to modern challenges, drawing from ancient wisdom for global impact.
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
            Bridging Spirituality and Science
              <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
            Unifying Sufi wisdom with modern scientific discovery.
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
            The Centre seeks to integrate Sufi spiritual practices with modern science, showing how these two realms complement each other. By studying quantum physics, sacred geometry, and consciousness, it aims to create a unified approach to understanding the mysteries of existence and reality’s true nature. Sufi teachings focus on the inherent goodness of all people, promoting love and understanding beyond religious and cultural divides.
            </p>
          </div>
          <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* List Item 1 */}
            <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 ">
              <div className="flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 group-hover:bg-white group-hover:text-fixnix-lightpurple">
                <span className="icon-checked"></span>
              </div>
              <div className="ml-6 sm:ml-6">
                <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 group-hover:text-white group-hover:bg-black">
                Kashmir’s Sacred Wisdom
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                Preserving Kashmir’s cultural and spiritual heritage.
                </p>
              </div>
            </li>

            {/* List Item 2 */}
            <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md  transition-all duration-500">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 group-hover:bg-white">
                <span className="icon-repair"></span>
              </div>
              <div className="ml-4 sm:ml-6">
                <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 group-hover:text-white">
                Fostering Global Dialogue
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                Encourage collaboration between mystics & scientists.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<section className="relative block bg-fixnix-darkpurple py-[120px] z-[1] ">
  <div
    className="absolute top-[20px] bottom-[20px] left-0 right-0 bg-no-repeat bg-center bg-cover z-[-1]"
    style={{
      backgroundImage: "url(assets/images/shapes/experience-one-shape-1.png)",
    }}
  ></div>
  <div className="container mx-auto">
    {/* Section Title */}
    <div className="text-center mb-[57px]">
    <span className="relative inline-block text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
       Global Initiatives 
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[42px] leading-[52px] font-semibold">
      Raising global awareness of Kashmir’s Sufi <br/>scholars’ spiritual and scientific contributions.
      </h2>
    </div>

    {/* Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {/* Experience One Single */}
      
<div className="relative flex items-center bg-[#ffff] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
  <div className="relative block">
    <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
      <i className="icon-service"></i>
    </span>
  </div>
  <div className="ml-[20px]">
    <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
      <Link
        href="services-details"
        className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
      >
        Knowledge Sharing
      </Link>
    </h3>
    <p className="text-fixnix-lightpurple group-hover:text-white">
    The Centre highlights Kashmir's Sufi scholars’ contributions globally, fostering international research and collaboration.
    </p>
  </div>
</div>


      {/* Experience Two Single */}
      <div className="relative flex items-center bg-[#ffff] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
        <div className="relative block">
          <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
      <i className="icon-service"></i>
            <i className="icon-management"></i>
          </span>
        </div>
        <div className="ml-[20px]">
          <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
            <Link
              href="team"
              className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
            >
             Global Challenges 
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
          Kashmiri Sufi teachings address modern ethical, environmental, and peace-related challenges, offering sustainable solutions.</p>
        </div>
      </div>

      {/* Experience Three Single */}
      <div className="relative flex items-center bg-[#ffff] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
        <div className="relative block">
          <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
            <i className="icon-headphones"></i>
          </span>
        </div>
        <div className="ml-[20px]">
          <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
            <Link
              href="contact"
              className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
            >
              Spiritual Integration
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
          Cultural exchanges promote understanding between science and spirituality, guiding towards a harmonious global future.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="team-top">
  <div className="container mx-auto">
    <div className="text-center relative block mt-[-6px] mb-[49px] z-[1]">
      {/* Section Tagline */}
      <span className="relative inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
      science meets the soul
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold">
      Join us in uncovering the profound <br/>mysteries that await
      </h2>

      {/* Section Text */}
      <p className="pt-[20px] text-gray-600">
      At the Sufi Science Centre - Kashmir Chapter, we are more than just seekers of knowledge—we are travelers on a sacred journey.<br/> This journey calls us to rediscover the wisdom embedded within the very fabric of existence, to heal and transform ourselves, <br/>and to create a lasting impact on the world. As we walk this path, we are guided by the timeless light of the Divine.
      </p>
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[18px] leading-[52px] font-semibold">
      A space where the divine mysteries of the universe are revealed through the pure lens of Sufi wisdom.
      </h2>
    </div>
  </div>
</section>
  


            </Layout>
            
        </>
    )
}