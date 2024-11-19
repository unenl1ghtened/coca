import '../assets/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { usePriceSwitcher } from './components/pricing/plans.js';

useTheme();
useBurger();
useHeader();
usePriceSwitcher();
