import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 10,
    breakpoints: {
      381: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 2.8,
        spaceBetween: 15,
      },

      1201: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
  });
};
