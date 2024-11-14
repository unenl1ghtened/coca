/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export const usePartnersSlider = () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  resizableSwiper('(max-width: 992px)', '.partners__slider', {
    modules: [Autoplay],
    speed: 3000,
    loop: true,
    slidesPerView: 2.8,
    spaceBetween: 100,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      380: {
        slidesPerView: 3,
      },

      576: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 4,
      },
    },
  });
};
