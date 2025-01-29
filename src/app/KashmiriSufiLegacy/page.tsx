
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
         <section className="team-top text-left-mobile">
  <div className="container mx-auto px-4">
    <div className="text-center relative block mt-[-6px] mb-[49px] z-[1]">
      {/* Section Tagline */}
      <span className="relative inline-block text-[16px]  leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
        Kashmiri Sufi Legacy
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      {/* Section Title */}
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[28px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[48px] md:leading-[52px] font-semibold">
      A Journey through the
      Mystical Heritage of Kashmir
      </h2>

      {/* Section Text */}
      <p className="pt-[20px] text-left text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
      
       
Kashmir’s Sufi heritage blends spiritual wisdom, poetry, music, and sacred sciences, transcending time & place. Mystics like Shah Hamdan and Nund Rishi teach self-realization as an ever-present reality. This legacy views the world as interconnected through the divine breath, shaping Kashmir’s spirituality, art, & philosophy. Rooted in unity, it inspires coexistence, illuminating the bond between humanity, nature, & the Divine
      </p>
    </div>
  </div>
</section>

        {/*Team Top End*/}

        {/*Experience One Start*/}
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
    the Confluence of Sufism and Science
        <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      
Ancient wisdom traditions emphasize spiritual growth, balance, & exploration
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
        Sacred Knowledge
      </Link>
    </h3>
    <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
    Ancient Sufis harmonized spiritual truths with the natural world's intricate divine patterns and cosmic order.
    </p>
  </div>
</div>


      {/* Experience Two Single */}
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
              Cosmic Exploration
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          Kashmir Sufis embraced sacred geometry and astrology, intertwining them with spiritual practices and insights.
          </p>
        </div>
      </div>

      {/* Experience Three Single */}
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
              Modern Harmony
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          Merging Sufi wisdom with scientific thought provides profound insights into consciousness, universe & nature.
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
            Historical Significance
              <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
            Kashmiri Sufi legacy fosters peace, harmony, and cultural exchange
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
            Kashmiri Sufism shaped the region’s social and cultural fabric, fostering unity, peace, and tolerance. Its spiritual centers promoted learning, cultural exchange, and social service, leaving a lasting legacy in literature, art, and architecture.Through its influence, Kashmiri Sufism remains an integral part of the region’s historical narrative, offering a beacon of hope and a path to healing.
            </p>
          </div>
          <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* List Item 1 */}
            <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 hover:-translate-y-[10px] group   ">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full  transition-colors duration-500 ">
                <span className="icon-checked"></span>
              </div>
              <div className="ml-6 sm:ml-6">
                <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                Unity and Peacebuilding
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                Kahmiri Sufism promoted unity, tolerance, coexistence.
                </p>
              </div>
            </li>

            {/* List Item 2 */}
            <li className="relative flex items-center p-6 py-6 md:py-8 bg-white hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 ">
                <span className="icon-repair"></span>
              </div>
              <div className="ml-4 sm:ml-6">
                <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 ">
                Cultural and Intellectual Legacy
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 ">
                Sufi khanqahs enriched Kashmir’s culture and legacy.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
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
    Spiritual and Scientific Sanctuary
        <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      A peaceful sanctuary merging spirituality, science, growth, & self-discovery
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
       Preserving Sufi Tradition
      </Link>
    </h3>
    <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
    Committed to preserving and sharing Kashmir’s enduring mystical insights and bridging them with science.
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
             Consciousness & Unity
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          Discover Sufi teachings on consciousness, existence, and profound connections between inner and outer worlds.</p>
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
              Mysticism & Science
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          Uniting seekers, scientists, and philosophers through ancient wisdom and modern scientific exploration.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Team One Start */}
       

        {/* <section className="relative block py-28">
  <div className="container mx-auto">
    <div className="flex flex-col items-center">
      {/* Heading Above the Image */}
      {/* <h2 className="text-3xl font-semibold text-center mb-6 text-fixnix-darkpurple">
        The Divine Saints of Kashmir
      </h2> */} 

<section className="text-left-mobile team-top py-[40px] sm:py-[60px] md:py-[80px]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
      {/* Section Tagline */}
      <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
        Preserving the Sacred Wisdom of Kashmir
        <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-40px] sm:right-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      Join us to rediscover divine science in Kashmir's mountains
      </h2>

      {/* Section Text */}
      <p className="pt-[15px] sm:pt-[20px] text-center xs:text-left sm:text-left md:text-center lg:text-center text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
      The Kashmir Sufi Legacy transcends borders, inspiring transformation globally. Through our educational programs, spiritual practices, and scientific research, we invite you
      to experience the timeless wisdom that continues to illuminate the hearts and minds of all who seek truth . Welcome to a transformative journey that will profoundly deepen your understanding of the vast mysteries of the universe and the divine.
      </p>

      {/* Subheading */}
      <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-semibold">
        Kashmir, the Land of Sufi Light, awaits your presence.
      </h2>
    </div>
  </div>
</section>


{/* Team One End */}

            </Layout>
            
        </>
    )
}