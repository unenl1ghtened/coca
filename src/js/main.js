/* eslint-disable prettier/prettier */
import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useScroll } from './components/scroll.js';
import { useInsightSlider } from './components/slider.js';

useTheme();
useBurger();
useScroll();
useInsightSlider();
