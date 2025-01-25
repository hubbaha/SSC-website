
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
  <div className="container mx-auto px-4">
    <div className="text-center relative block mt-[-6px] mb-[49px] z-[1]">
      {/* Section Tagline */}
      <span className="relative inline-block text-[16px]  leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
        Our Heritage
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[28px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[48px] md:leading-[52px] font-semibold">
        Welcome to the <br /> Kashmir Sufi Science Centre
      </h2>

      {/* Section Text */}
      <p className="pt-[20px] text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
  Our heritage is built upon the timeless principles of Wahdat al-Wujud, where all creation, from the
  smallest grain of <br />sand to the grandest galaxies, is seen as a manifestation of the Divine. It is within
  this sacred understanding that Sufi science<br />finds its roots — in the recognition of the interconnectedness of
  all things. This stands as a bridge between the ancient<br />
  spiritual traditions of Kashmir and the modern scientific quest to understand the laws of nature,
  consciousness, and energy.
</p>
    </div>
  </div>
</section>

        {/*Team Top End*/}

    {/* Experience One Start */}
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
      <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
        SUFI SCIENCE CENTRE-KASHMIR CHAPTER
        <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      How Kashmiri Sufism blends cultural heritage, <br />
      scientific inquiry, and wisdom?
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
              Spiritual Heritage
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
            Kashmiri Sufism preserves timeless teachings of unity, compassion, and
            cultural richness, shaping regional identity.
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
              Mysticism and Science
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
            Sufi scholars explored astronomy, medicine, and nature’s laws,
            blending divine wisdom with intellectual pursuits.
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
              Enduring Influence
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
            Kashmiri Sufi teachings inspire harmony, self-awareness, and a
            profound balance between spiritual and intellectual
            growth.
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
              Our Identity
              <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
              Fusing spirituality, culture, science, and Kashmir’s legacy
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              The Kashmiri Sufi Center blends spirituality, culture, and intellectual exploration, rooted in historical heritage. It integrates divine wisdom with scientific curiosity, promoting self-awareness, love, and compassion. Through workshops and research, it preserves Kashmiri Sufi teachings, uniting ancient wisdom with modern understanding.
            </p>
          </div>
          <ul className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* List Item 1 */}
            <li className="relative flex items-center p-6 py-6 md:py-8 bg-white rounded-lg shadow-md transition-all duration-500 ">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-fixnix-lightpurple text-white text-lg sm:text-xl rounded-full transition-colors duration-500 group-hover:bg-white group-hover:text-fixnix-lightpurple">
                <span className="icon-checked"></span>
              </div>
              <div className="ml-4 sm:ml-6">
                <h5 className="text-[19px] sm:text-xl md:text-[21px] font-semibold text-fixnix-darkpurple transition-colors duration-500 group-hover:text-white group-hover:bg-black">
                  Spiritual and Cultural Roots
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                  Kashmiri Sufism blends spirituality with culture.
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
                  Mystical Science Exploration
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                  Science and mysticism blend in spirituality.
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
    <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
         the Intersection of Spirituality and Science
        <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
      Kashmir Sufi Science Centre explores the   <br />
      fusion of spirituality and science
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
        Light and Sound
      </Link>
    </h3>
    <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
    Sufi mystics explored light, sound, vibration, and cosmic harmony, deeply connecting the spiritual and physical realms.
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
              Nature's Wisdom
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          Sufi scholars revered nature’s interconnectedness, promoting ecological balance,  spiritual principles, harmony, and unity.
          </p>
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
              Ethical Science
            </Link>
          </h3>
          <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
          Sufi ethics guided scientific pursuits, ensuring integrity, truth, humanity’s welfare, and responsible exploration.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Team One Start */}
<section className="relative block py-28">
  <div className="container mx-auto">
    <div className="flex flex-wrap -mx-4">
      {/* Team Member Start */}
      {[
        { name: "Lala Aragami", title: "Saint of Kashmir", img: "assets/images/team/team3.jpg" },
        { name: "Shamas Faqir", title: "Digital Marketing", img: "assets/images/team/team4.jpg" },
        { name: "Lal Ded", title: "Master Technician", img: "assets/images/team/team6.jpg" },
        { name: "Wahab Khar", title: "Master Technician", img: "assets/images/team/team8.jpg" },
        { name: "Nicolas Poran", title: "Digital Marketing", img: "assets/images/team/team-1-5.jpg" },
        { name: "Hasibur Nico", title: "Master Technician", img: "assets/images/team/team-1-6.jpg" },
      ].map((member, idx) => (
        <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="relative group">
            {/* Image Box */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-65 h-16 bg-white px-2 py-2 rounded-tr-lg">
              <h3 className="text-xl font-semibold text-fixnix-darkpurple transition-colors duration-500 group-hover:text-fixnix-lightpurple">
                {member.name}
              </h3>
              <p className="text-sm text-fixnix-lightpurple ">{member.title}</p>
            </div>

            {/* Social Links */}
          
          </div>
        </div>
      ))}
      {/* Team Member End */}
    </div>
  </div>
</section>
{/* Team One End */}

            </Layout>
            
        </>
    )
}