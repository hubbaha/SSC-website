"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Define a type for the slide object
interface Slide {
  subTitle: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

// Define the props type for Banner component
interface BannerProps {
  slides: Slide[];
}

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner({ slides }: BannerProps) {
  return (
    <section className="main-slider-two main-slider-three clearfix">
      <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
        {slides.map((slide: Slide, index: number) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide">
              <div className="image-layer-two"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-two__content">
                      <p className="main-slider-two__sub-title">{slide.subTitle}</p>
                      <h2 className="main-slider-two__title">
                        {slide.title.split("<br/>").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h2>
                      <p className="main-slider-two__text">
                        {slide.text.split("<br/>").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                      <div className="main-slider-two__btn-box">
                        <Link href={slide.buttonLink} className="thm-btn main-slider-two__btn">
                          {slide.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" id="main-slider-pagination"></div>
        <div className="main-slider-two__nav">
          <div className="swiper-button-prev h1p">
            <i className="fas fa-chevron-left" style={{ color: "white" }}></i>
          </div>
          <div className="swiper-button-next h1n">
            <i className="fas fa-chevron-right" style={{ color: "white" }}></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
