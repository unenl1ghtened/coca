/* eslint-disable prettier/prettier */
import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import { useHeroSlider, useTabControl } from './components/blog/heroSlider.js';
import { useArticlesSlider } from './components/blog/articlesSlider.js';

useHeader();
useTheme();
useBurger();
useFooterAccordion();
useHeroSlider();
useTabControl();
useArticlesSlider();
