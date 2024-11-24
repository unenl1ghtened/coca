import '/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { usePriceSwitcher } from './components/pricing/plans.js';
import { useFooterAccordion } from './components/footer-accordion.js';

useTheme();
useBurger();
useHeader();
usePriceSwitcher();
useFooterAccordion();
