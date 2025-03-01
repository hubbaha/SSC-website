import Layout from "@/components/layout/Layout";
import Whychoose from "@/components/sections/home2/Whychoose";
import Banner from "@/components/sections/home3/Banner";
import Link from "next/link";
const MultimediaSlides = [
  {
    subTitle: "Experience Wisdom Through Digital Learning",
    title: "Explore Sufi Knowledge in<br/> Multimedia Form",
    text: "  Access a vast collection of videos, audio lectures, and<br/> visual archives that bring Kashmiri Sufi teachings to life.",
    buttonText: "Read More",
    buttonLink: "/Home",
  },
  {
    subTitle: "Sufi Teachings, Now at Your Fingertips",
    title: "A Digital Hub for<br/> Spiritual Learning",
    text: "Engage with immersive multimedia content, including documentaries, podcasts,<br/> and interactive experiences inspired by Kashmiri Sufism.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Listen, Watch, Reflect, Learn, Grow",
    title: "Unlock the Power<br/> of Visual Learning",
    text: " Explore rare Sufi manuscripts, teachings, and spiritual insights through <br/>our rich multimedia library designed for seekers worldwide.",
    buttonText: "Join Now",
    buttonLink: "/Home",
  },
  {
    subTitle: "Wisdom Preserved in Sound and Sight",
    title: "  Digital Archives of <br/>Sufi Teachings",
    text: " Discover a multimedia journey through Kashmiri Sufism,<br/> where knowledge is shared through film, music, spoken word, and imagery.",
    buttonText: "Explore",
    buttonLink: "/Home",
  },
  {
    subTitle: "Spiritual Learning in Every Formate",
    title: "Enlightenment Through <br/>Digital Sufi Resources",
    text: " Engage with sacred Sufi wisdom through our extensive collection of digital books,<br/> recorded lectures, and audiovisual storytelling.",
    buttonText: "Join Now",
    buttonLink: "/Join",
  },
];
export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={MultimediaSlides}/>
      {/* Blog Two Start */}
      <section className="relative block py-[120px] text-left-mobile">
        <div className="container mx-auto">
          <section className="relative block pb-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                  Multimedia Library
                  <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                  <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                </span>
                <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
                  A beacon of illumination
                </h2>
                <p className="text-gray-600 mt-3">
                  A sacred space where seekers can explore the essence of Divine
                  Unity, consciousness, and the mystical science that connects
                  us to the cosmic dance of creation. Whether through audio
                  recitations of sacred texts, visual representations of sacred
                  geometry, or documentaries that explore the deep connections
                  between spirituality and science, our library aims to nourish
                  the soul and mind alike.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "icon-award",
                    title: "Sufi Teachings and Lectures",
                    desc: "Listen to timeless wisdom from Sufi masters through audio and video recordings.",
                  },
                  {
                    icon: "icon-customer-service",
                    title: "Sacred Geometry and Art",
                    desc: "Discover divine patterns in Sufi art, architecture, and interactive visuals.",
                  },
                  {
                    icon: "icon-security",
                    title: "Meditative and Healing Practices",
                    desc: "Engage in guided meditations, dhikr, and spiritual healing through sound and breath.",
                  },
                  {
                    icon: "icon-computer-1",
                    title: "Sufi Literature and Poetry",
                    desc: "Enjoy mystical poetry by Rumi, Bulleh Shah, and Ameer Khusro in audio/text.",
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
                        <h2 className="text-fixnix-lightpurple">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="text-center mt-12">
          <p className="text-lg font-semibold text-fixnix-darkpurple">
            Get proper services from us{' '}
            <Link href="/about" className="text-fixnix-lightpurple hover:text-fixnix-darkpurple transition duration-500">
              guideline and knowledge
            </Link>
          </p>
        </div> */}
            </div>
          </section>
          {/* <Whychoose></Whychoose> */}
          {/* <div className="text-center mb-10">
          <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
          Multimedia Library
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
            <h2 className="text-3xl font-bold text-gray-900">News And Articles</h2>
            <p className="text-gray-500">
              Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
              eu fugiat nulla dolor atur with Lorem ipsum is simply
            </p>
          </div> */}
          <div className="flex items-center mb-10">
            <div className="w-full lg:w-8/12">
              <div className="relative block">
                <div className="text-left">
                  <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    Gateway to Wisdom & Transformation
                    <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                    A doorway to the transcendent
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700">
                    Explore the collection, listen to the teachings, watch the
                    documentaries, and immerse yourself in the profound union of
                    Sufi spirituality and scientific exploration. The Multimedia
                    Library at the Sufi Learning Centre is here to support your
                    journey of awakening and transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-light-purple rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={`/assets/images/blog/blog-2-${item}.jpg`}
                    alt=""
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-fixnix-lightpurple bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-fixnix-lightpurple hover:text-fixnix-darkpurple transition">
                    <Link
                      href="/MultimediaDetails"
                      className="text-fixnix-lightpurple hover:text-fixnix-darkpurple transition"
                    >
                      Blog Post Title {item}
                    </Link>
                  </h3>
                  <p className="text-gray-500 py-3">
                    Duis aute irure dolor in reprehenderit velit esse cillum
                    dolore eu fugiat nulla cupidatat non proident.
                  </p>
                  <Link
                    href="/MultimediaDetails"
                    className="text-white border rounded-md px-3 py-2 bg-fixnix-lightpurple font-semibold hover:bg-fixnix-darkpurple transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center mt-10">
            <ul className="flex space-x-4 text-gray-600 text-lg">
              <li className="border px-3 py-2 rounded-md cursor-pointer  bg-fixnix-lightpurple hover:bg-fixnix-darkpurple hover:text-white">
                <Link href="#" className="text-white">1</Link>
              </li>
              <li className="border px-3 py-2 rounded-md cursor-pointer  bg-fixnix-lightpurple hover:bg-fixnix-darkpurple hover:text-white">
                <Link href="#" className="text-white">2</Link>
              </li>
              <li className="border px-3 py-2 rounded-md cursor-pointer  bg-fixnix-lightpurple hover:bg-fixnix-darkpurple hover:text-white">
                <Link href="#" className="text-white">3</Link>
              </li>
              <li className="border px-3 py-2 rounded-md cursor-pointer bg-fixnix-lightpurple hover:bg-fixnix-darkpurple hover:text-white">
                <Link href="#"  className="text-white" aria-label="Next" >
                  <i className="fa fa-angle-double-right"></i>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
      {/* Blog Two End */}
    </Layout>
  );
}
