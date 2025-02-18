'use client'
import Banner from "@/components/sections/home3/Banner"
import Layout from "../../components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} >
        {/*Book Service Start*/}
        <Banner></Banner>
        <section className="book-service text-left-mobile">
            <div className="book-service__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/book-services-bg-img-1.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="book-service__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Volunteer with Us</span>
                                <h2 className="section-title__title">A shared experience of collective devotion, love & service </h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-calendar"></span>
                                        </div>
                                        <h3 className="book-service__title">Engage with the Divine</h3>
                                        <p className="book-service__text">Aligning yourself with the profound purpose of serving the greater good.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-low-price"></span>
                                        </div>
                                        <h3 className="book-service__title">Preserve Traditions</h3>
                                        <p className="book-service__text">You become a guardian of this sacred heritage, aiding in the preservation of the traditions. </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-delivery-man"></span>
                                        </div>
                                        <h3 className="book-service__title"> Grow Spiritually</h3>
                                        <p className="book-service__text">You will not only contribute to the mission but also receive the blessings of wisdom.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-headphones"></span>
                                        </div>
                                        <h3 className="book-service__title">A Sacred Community</h3>
                                        <p className="book-service__text">You join a family of seekers who are committed to the path of growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="book-service__right">
                            <p className="book-service__right-text">In the sacred land of Kashmir, where the divine whispers of Sufi mystics still resonate through the valleys, we extend an invitation to kindred souls to join us on a journey of spiritual growth and service. At the Sufi Science Centre - Kashmir Chapter, we believe that the path to enlightenment is not just one of personal transformation, but a shared experience of collective devotion, love, and service to the divine.</p>
                            <div className="book-service__right-img">
                                <img src="assets/images/resources/book-service-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Book Service End*/}
       
        <section className="relative block pb-20 mt-20 bg-white text-left-mobile ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
        How You Can Serve
        <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
        <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
      </span>
          <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">Offer your time and talents to the Sufi Science Centre</h2>
          <p className="text-gray-600 mt-3">
          As a volunteer with the Sufi Science Centre, you step into a realm of sacred work—one that touches the very essence of spirituality, wisdom, and the rich cultural heritage of Kashmir. Through your service, you will support the preservation of ancient Sufi teachings, the revitalization of Kashmiri spiritual traditions, and the spreading of love, peace, and unity in the world.
          </p>
        </div> 
        
    
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "icon-award", title: "Assist with Spiritual Programs", desc:"Help us organize and facilitate our Sufi gatherings, spiritual lectures, prayer ceremonies, and meditative workshops." },
            { icon: "icon-customer-service", title: "Support Craft and Culture Preservation", desc:"Engage with our artisans and help in preserving Kashmiri crafts, such as wood carving, and sacred calligraphy." },
            { icon: "icon-security", title: "Fundraising and Event Organization:", desc:"Assist with organizing events, exhibitions, and fundraising efforts to sustain and grow our work in Kashmir and beyond." },
            { icon: "icon-computer-1", title: "Outreach and Community Engagement", desc:"Help us expand our reach by connecting with local communities and sharing the teachings of Sufism." },
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
                  <h2 className="text-fixnix-lightpurple">{item.title}</h2>
                </div>
                <p className="text-gray-600 mt-2">
                 {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
        </section>

        {/*Contact Two Start*/}
        <section className="contact-two text-left-mobile ">
            <div className="contact-two-bg jarallax"
                ></div>
            <div className="container">
                <div className="contact-two__inner">
                    <div className="section-title section-title--two text-center">
                        <span className="section-title__tagline">How to Get Involved</span>
                        <h2 className="section-title__title">To volunteer, please reach out to us </h2>
                        <p className=" section-title__text">Becoming a volunteer is simple. Whether you are in Kashmir or from a distant land, the Sufi Science Centre welcomes all who feel the calling. <br/>Let us know how you wish to contribute, and we will guide you on your journey of sacred service.</p>
                    </div>
                    <div className="contact-two__details-box">
                        <ul className="list-unstyled contact-two__details">
                            <li>
                                <div className="icon">
                                    <span className="fa fa-envelope"></span>
                                </div>
                                <div className="content">
                                    <span>Send us an email</span>
                                    <p><Link href="mailto:contact@gmail.com">contact@gmail.com</Link></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="content">
                                    <span>Give us a call</span>
                                    <p><Link href="tel:0124357689">+012 (435) 7689</Link></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Two  End*/}

        {/*Contact Page Two Start*/}
        <section className="contact-page-two text-left-mobile ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page-two__left">
                            <form action="assets/inc/sendemail.php"
                                className="contact-page-two__form contact-form-validated" >
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="text" placeholder="Name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="email" placeholder="Email" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="text" placeholder="Subject" name="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="text" placeholder="Pick a date" name="date" id="datepicker"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-page-two__form-input-box">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select Services">Select Services</option>
                                                    <option value="1">Select Services 01</option>
                                                    <option value="2">Select Services 02</option>
                                                    <option value="3">Select Services 03</option>
                                                    <option value="3">Select Services 04</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-page-two__form-input-box text-message-box">
                                            <textarea name="message" placeholder="Comment"></textarea>
                                        </div>
                                        <div className="contact-page-two__btn-box">
                                            <Link href="about" className="thm-btn contact-page-two__btn bg-fixnix-lightpurple">Send Message</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page-two__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">MAKE APPOINTMENT</span>
                                <h2 className="section-title__title">Book A Service</h2>
                            </div>
                            <p className="contact-page-two__right-text"> Together, we create a sacred community united by the shared vision of bringing light and love to the world.</p>
                            <p className="contact-page-two__right-text-2">In the spirit of service, you will not only contribute to the mission but also receive the blessings of wisdom, guidance, and divine insight through your actions and devotion.</p>
                            <div className="contact-page-two__points-box-inner">
                                <div className="contact-page-two__points-box">
                                    <h3 className="contact-page-two__points-title">New York</h3>
                                    <ul className="contact-page-two__points-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-send"></span>
                                            </div>
                                            <div className="text">
                                                <p>71890 Champlin Neck</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-mail"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="mailto:support@domain.com">support@domain.com</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="tel:62813221467">(+62) 81 322 1467</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>09:00 AM - 22:00 PM</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-page-two__points-box">
                                    <h3 className="contact-page-two__points-title">Texas</h3>
                                    <ul className="contact-page-two__points-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-send"></span>
                                            </div>
                                            <div className="text">
                                                <p>71890 Champlin Neck</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-mail"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="mailto:support@domain.com">support@domain.com</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="tel:62813221467">(+62) 81 322 1467</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>09:00 AM - 22:00 PM</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Page Two End*/}


            </Layout>
        </>
    )
}