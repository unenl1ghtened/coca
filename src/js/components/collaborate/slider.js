import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const useCollaborateHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      381: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },

      992: {
        slidesPerView: 2.8,
        spaceBetween: 15,
        loop: true,
      },

      1201: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
      },
    },

    navigation: {
      nextEl: '.about__btn--next',
      prevEl: '.about__btn--prev',
    },
  });
};
