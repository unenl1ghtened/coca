import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const useCollaborateHeroSlider = () => {
  new Swiper('.hero__swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: '.hero__btn--prev',
      nextEl: '.hero__btn--next',
    },
  });
};
