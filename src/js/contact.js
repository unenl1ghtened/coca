import '../assets/scss/contact.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import { usePartnersSlider } from './components/home/slider.js';
import { usePhone } from './components/contact/phone.js';

useTheme();
useBurger();
useHeader();
usePartnersSlider();
useFooterAccordion();
usePhone();
