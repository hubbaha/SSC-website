
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
            
        {/*Main Slider Start*/}
        <section className="main-slider-two main-slider-three clearfix">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer-two"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-1-2.jpg)' }} ></div>
                        {/* /.image-layer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-two__content">
                                        <p className="main-slider-two__sub-title">Unlocking the Mysteries of Science & Spirituality</p>
                                        <h2 className="main-slider-two__title">Welcome to the <br /> Sufi Science Center
                                        </h2>
                                        <p className="main-slider-two__text">Bridging the wisdom of Sufism with modern scientific inquiry. Explore the universe, <br/>
                                        understand the self, and embrace the journey of knowledge and enlightenment.</p>
                                        <div className="main-slider-two__btn-box">
                                            <Link href="/Conferences" className="thm-btn main-slider-two__btn">Explore Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer-two"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-1-1.jpg)' }} ></div>
                        {/* /.image-layer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-two__content">
                                        <p className="main-slider-two__sub-title">Where Spirituality Meets Scientific Discovery</p>
                                        <h2 className="main-slider-two__title">Illuminating Minds, <br /> Advancing Knowledge
                                        </h2>
                                        <p className="main-slider-two__text">Discover the harmony between Sufi wisdom and modern science. Join us in exploring <br/>
                                        the hidden dimensions of the universe and the secrets of consciousness.</p>
                                        <div className="main-slider-two__btn-box">
                                            <Link href="/Conferences" className="thm-btn main-slider-two__btn">Start Your Journey</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer-two"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-1-3.jpg)' }} ></div>
                        {/* /.image-layer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-two__content">
                                        <p className="main-slider-two__sub-title">Merging Mysticism with Scientific Exploration</p>
                                        <h2 className="main-slider-two__title">Unveiling the Secrets <br /> of the Cosmos & the Self
                                        </h2>
                                        <p className="main-slider-two__text">Dive into the world of Sufi philosophy and modern science. 
                                        Join us in exploring<br/> the universe, the mind, and the connection between them.</p>
                                        <div className="main-slider-two__btn-box">
                                            <Link href="/Conferences" className="thm-btn main-slider-two__btn">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                </div>

                <div className="swiper-pagination" id="main-slider-pagination"></div>
                {/* If we need navigation buttons */}
                <div className="main-slider-two__nav">
    <div className="swiper-button-prev h1p" id="main-slider__swiper-button-next">
        <i className="fas fa-chevron-left" style={{ color: 'white' }}></i> {/* Left arrow icon */}
    </div>
    <div className="swiper-button-next h1n" id="main-slider__swiper-button-prev">
        <i className="fas fa-chevron-right" style={{ color: 'white' }}></i> {/* Right arrow icon */}
    </div>
</div>


            </Swiper>
        </section>
        {/*Main Slider End*/}
            
        </>
    )
}
