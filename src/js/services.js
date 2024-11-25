/* eslint-disable prettier/prettier */
import '/scss/services.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useFooterAccordion } from './components/footer-accordion.js';

useTheme();
useBurger();
useHeader();
useFooterAccordion();
