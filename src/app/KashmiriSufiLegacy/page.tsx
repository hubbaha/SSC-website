
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
       Kashmiri Sufi Legacy
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold">
      A Journey through the   <br /> Mystical Heritage of Kashmir
      </h2>

      {/* Section Text */}
      <p className="pt-[20px] text-gray-600">
      Kashmir’s Sufi heritage blends spiritual wisdom, divine poetry, music, and sacred sciences, transcending time and place.<br/> Mystics like Shah Hamdan and Nund Rishi teach self-realization as an ever-present reality within. This legacy views the<br/> physical world as interconnected through the divine breath, shaping Kashmir’s spirituality, art, and philosophy.
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
    The Confluence of Sufism and Science
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[42px] leading-[52px] font-semibold">
      How Ancient wisdom traditions emphasize spiritual<br/> growth, balance, and intellectual exploration?
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
        Sacred Knowledge
      </Link>
    </h3>
    <p className="text-fixnix-lightpurple group-hover:text-white">
    Ancient Sufis harmonized spiritual truths with the natural world's intricate divine patterns and cosmic order.
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
              Cosmic Exploration
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
          Kashmir Sufis embraced sacred geometry and astrology, intertwining them with spiritual practices and insights.
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
              Modern Harmony
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
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
            <li className="relative flex items-center p-4 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 ">
              <div className="flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 group-hover:bg-white group-hover:text-fixnix-lightpurple">
                <span className="icon-checked"></span>
              </div>
              <div className="ml-6 sm:ml-6">
                <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 group-hover:text-white group-hover:bg-black">
                Unity and Peacebuilding
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                Kahmiri Sufism promoted unity, tolerance, coexistence.
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
                Cultural and Intellectual Legacy
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
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
    Spiritual and Scientific Sanctuary
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[42px] leading-[52px] font-semibold">
      A sanctuary blending spirituality, science,<br/> and self-discovery
      </h2>
    </div>

    {/* Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {/* Experience One Single */}
      
<div className="relative flex items-center bg-[#ffffff] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
  <div className="relative block">
    <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-black text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
      <i className="icon-service"></i>
    </span>
  </div>
  <div className="ml-[20px]">
    <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
      <Link
        href="services-details"
        className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
      >
       Preserving Sufi Tradition
      </Link>
    </h3>
    <p className="text-fixnix-lightpurple group-hover:text-white">
    Committed to preserving and sharing Kashmir’s enduring mystical insights and bridging them with science.
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
             Consciousness & Unity
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
          Discover Sufi teachings on consciousness, existence, and profound connections between inner and outer worlds.</p>
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
              Mysticism & Science
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white">
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

      <section className="team-top">
  <div className="container mx-auto">
    <div className="text-center relative block mt-[-6px] mb-[49px] z-[1]">
      {/* Section Tagline */}
      <span className="relative inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
      Preserving the Sacred Wisdom of Kashmir
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold">
      Join us to rediscover divine<br/> science in Kashmir's sacred mountains.
      </h2>

      {/* Section Text */}
      <p className="pt-[20px] text-gray-600">
      The Kashmir Sufi Legacy is a treasure that transcends borders, a gift to humanity that holds the potential to inspire<br/> transformation on a global scale.Through our educational programs, spiritual practices, and scientific research, we invite you<br/> to experience the timeless wisdom that continues to illuminate the hearts and minds of all who seek truth and enlightenment.<br/> Welcome to a journey that will deepen your understanding of the universe and the divine presence within it.
      </p>
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[22px] leading-[52px] font-semibold">
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