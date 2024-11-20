/* eslint-disable prettier/prettier */
import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useHeader();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
useFooterAccordion();
