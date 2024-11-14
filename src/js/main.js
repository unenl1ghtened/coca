/* eslint-disable prettier/prettier */
import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useInsightSlider } from './components/insight-slider.js';
import { usePartnersSlider } from './components/partners-slider.js';

useTheme();
useBurger();
useHeader();
useInsightSlider();
usePartnersSlider();
