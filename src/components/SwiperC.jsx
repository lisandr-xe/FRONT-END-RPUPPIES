import { useEffect, useRef } from "react";
import { register } from "swiper/element";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/SwiperC.css";

export const Swiper = (props) => {
  const swiperRef = useRef(null);
  const { children, ...rest } = props;

  useEffect(() => {
    register();

    const params = {
      ...rest,
      modules: [Navigation, Pagination, EffectCoverflow],
      navigation: {
        prevEl: ".prev-btn-swiper",
        nextEl: ".next-btn-swiper",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: -10,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      },
      spaceBetween: 120,
      slidesPerView: 1,
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 120,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 120,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 90,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 1,
          spaceBetween: 90,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <>
      <div className="swiper--container">
        <div className="swiper-pagination"></div>
        <swiper-container init="false" ref={swiperRef}>
          {children}
        </swiper-container>
        <div className="d-flex justify-content-center z-3">
          <button className="prev-btn-swiper">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button className="next-btn-swiper">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export const SwiperSlide = (props) => {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
};
