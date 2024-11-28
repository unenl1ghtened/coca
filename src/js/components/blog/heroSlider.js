import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

let blogSwiper;

export const useHeroSlider = () => {
  blogSwiper = new Swiper('.hero__slider', {
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
      nextEl: '.blog__btn--next',
      prevEl: '.blog__btn--prev',
    },
  });
};

export const useTabControl = () => {
  const tabsBtns = document.querySelectorAll('.tab-controls__item button');
  const slides = document.querySelectorAll('.hero__slide');
  const tabList = document.querySelectorAll('.tab-controls__item');

  tabsBtns.forEach((tab) => {
    tab.addEventListener('click', function () {
      const parentLi = tab.parentElement;

      if (parentLi.classList.contains('tab-controls__item--active')) {
        return;
      }

      tabList.forEach((item) => {
        item.classList.remove('tab-controls__item--active');
      });

      parentLi.classList.add('tab-controls__item--active');

      const tabValue = tab.getAttribute('data-topic');

      if (tabValue === 'view-all') {
        slides.forEach((slide) => {
          slide.classList.remove('none');
        });
      } else if (tabValue) {
        slides.forEach((slide) => {
          if (slide.getAttribute('data-rubric') !== tabValue) {
            slide.classList.add('none');
          } else {
            slide.classList.remove('none');
          }
        });
      }
      blogSwiper.update();
    });
  });
};
