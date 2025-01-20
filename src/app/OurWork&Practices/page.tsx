
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
      Our Work & Practices
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>

      {/* Section Title */}
      <h2 className="mt-[14px] text-fixnix-darkpurple text-[42px] leading-[52px] font-semibold">
      Fusing Sufi wisdom with science <br />  for community growth
      </h2>

      {/* Section Text */}
      <p className="pt-[20px] text-gray-600">
      Our spiritual programs nurture the soul and promote inner peace through Sufi traditions.<br/> We offer guided meditation, Sufi music gatherings, and workshops to foster love, tolerance, and harmony.<br/> Weekly dhikr circles and seasonal retreats provide immersive experiences, helping individuals connect with<br/> their higher selves and deepen their life purpose.</p>
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
    Enlightening Minds Through Knowledge
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[42px] leading-[52px] font-semibold">
      How Sufi teachings and scientific learning  <br/>
      foster growth?<br/> 
      </h2>
    </div>

    {/* Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {/* Experience One Single */}
      
<div className="relative flex items-center bg-[#272a2d] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
  <div className="relative block">
    <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
      <i className="icon-service"></i>
    </span>
  </div>
  <div className="ml-[20px]">
    <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
      <Link
        href="services-details"
        className="text-white transition-all duration-[500ms] group-hover:text-fixnix-darkpurple"
      >
        Integrated Learning
      </Link>
    </h3>
    <p className="text-white group-hover:text-white">
    Blending Sufi wisdom with science to encourage critical thinking, self-discovery, and spiritual growth.</p>
  </div>
</div>


      {/* Experience Two Single */}
      <div className="relative flex items-center bg-[#272a2d] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
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
              className="text-white transition-all duration-[500ms] group-hover:text-fixnix-darkpurple"
            >
             Cultural Preservation
            </Link>
          </h3>
          <p className="text-white group-hover:text-white">
          Incorporating Kashmiri wisdom into education to bridge traditions with modern knowledge for future generations.
          </p>
        </div>
      </div>

      {/* Experience Three Single */}
      <div className="relative flex items-center bg-[#272a2d] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
        <div className="relative block">
          <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
            <i className="icon-headphones"></i>
          </span>
        </div>
        <div className="ml-[20px]">
          <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
            <Link
              href="contact"
              className="text-white transition-all duration-[500ms] group-hover:text-fixnix-darkpurple"
            >
              Ethical Leadership
            </Link>
          </h3>
          <p className="text-white group-hover:text-white">
          Promoting integrity and empathy to nurture leaders who positively impact communities and society at large.
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
            <div className="absolute inset-0 bg-[rgba(59,34,94,0.8)] opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
        <div className="relative">
          <div className="text-left mb-8">
            <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
            Social Impact 
              <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
            Empowering communities through education, and social initiatives.
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
            Kashmiri Sufism has played a pivotal role in shaping the cultural and social fabric of the region. Its emphasis on compassion, tolerance, and spiritual unity has helped bridge gaps between diverse communities, fostering a sense of solidarity and peace, especially during times of conflict. Sufi teachings focus on the inherent goodness of all people, promoting love and understanding beyond religious and cultural divides.
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
                Community Upliftment Initiatives
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                Health camps and vocational training for youth.
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
                Social Change Partnerships
                </h5>
                <p className="text-sm sm:text-base text-gray-700 transition-colors duration-500 group-hover:text-white">
                Collaborating for positive community  support.</p>
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
    Expanding Reach
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
      <h2 className="mt-[14px] text-white text-[42px] leading-[52px] font-semibold">
      Spreading unity, love, and peace  <br/>through outreach initiatives.
      </h2>
    </div>

    {/* Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {/* Experience One Single */}
      
<div className="relative flex items-center bg-[#272a2d] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
  <div className="relative block">
    <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
      <i className="icon-service"></i>
    </span>
  </div>
  <div className="ml-[20px]">
    <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
      <Link
        href="services-details"
        className="text-white transition-all duration-[500ms] group-hover:text-fixnix-darkpurple"
      >
        Cultural Events
      </Link>
    </h3>
    <p className="text-white group-hover:text-white">
    Our cultural events celebrate diversity and foster understanding through music, art, and traditions.
    </p>
  </div>
</div>


      {/* Experience Two Single */}
      <div className="relative flex items-center bg-[#272a2d] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
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
              className="text-white transition-all duration-[500ms] group-hover:text-fixnix-darkpurple"
            >
             Interfaith Dialogues
            </Link>
          </h3>
          <p className="text-white group-hover:text-white">
          We host interfaith dialogues to promote peace and mutual respect among various communities.</p>
        </div>
      </div>

      {/* Experience Three Single */}
      <div className="relative flex items-center bg-[#272a2d] p-[26px] rounded-[6px] mb-[30px] transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
        <div className="relative block">
          <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
            <i className="icon-headphones"></i>
          </span>
        </div>
        <div className="ml-[20px]">
          <h3 className="text-[20px] font-semibold leading-[30px] mb-[8px]">
            <Link
              href="contact"
              className="text-white transition-all duration-[500ms] group-hover:text-fixnix-darkpurple"
            >
              Awareness Campaigns
            </Link>
          </h3>
          <p className="text-white group-hover:text-white">
          Through targeted campaigns, we raise awareness on social issues to inspire positive community change.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Team One Start */}
       

        <section className="relative block py-28">
  <div className="container mx-auto">
    <div className="flex flex-col items-center">
      {/* Heading Above the Image */}
      <h2 className="text-3xl font-semibold text-center mb-6 text-fixnix-darkpurple">
        The Divine Saints of Kashmir
      </h2>

      {/* Team Member Start */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="relative group">
          {/* Image Box */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/assets/images/team/saints.jpg" // Path to the image
              alt="Kashmiri Saints"
              width={500}  // Set your preferred width
              height={500} // Set your preferred height
              className="w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
          </div>

          
        </div>
      </div>
      {/* Team Member End */}
    </div>
  </div>
</section>

{/* Team One End */}

            </Layout>
            
        </>
    )
}