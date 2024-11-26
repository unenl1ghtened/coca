/* eslint-disable prettier/prettier */
import '/scss/collaborate.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useFooterAccordion } from './components/footer-accordion.js';
import { useTextAnimation } from './components/collaborate/textAnimation.js';
import {
  useCollaborateHeroSlider,
  useCollaborateTeamSlider,
} from './components/collaborate/slider.js';

useTheme();
useBurger();
useHeader();
useFooterAccordion();
useTextAnimation();
useCollaborateHeroSlider();
useCollaborateTeamSlider();
