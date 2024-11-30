/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

export const useInsightSlider = () => {
  let swiper;

  const initSwiper = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 380) {
      // слайдер с эффектов fade
      swiper = new Swiper('.insight__slider', {
        modules: [Pagination, EffectFade, Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: '.insight__btn--next',
          prevEl: '.insight__btn--prev',
        },
      });
    } else if (screenWidth >= 993) {
      // выключаем центрироваие слайдов
      swiper = new Swiper('.insight__slider', {
        modules: [Pagination, Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: '.insight__btn--next',
          prevEl: '.insight__btn--prev',
        },
      });
    } else if (screenWidth > 380) {
      // слайдер без эффека fade
      swiper = new Swiper('.insight__slider', {
        modules: [Pagination, Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: '.insight__btn--next',
          prevEl: '.insight__btn--prev',
        },
      });
    }
  };

  // уничтожить предыдущий экземпляр Swiper и пересоздать его при изменении размера экрана

  const handleResize = () => {
    if (swiper) {
      swiper.destroy(true, true);
    }
    initSwiper();
  };

  initSwiper();

  window.addEventListener('resize', handleResize);
};

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

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};
