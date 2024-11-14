/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Pagination],
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
