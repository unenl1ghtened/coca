export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const plan = document.querySelectorAll('[data-price="plan"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterpricePrice = document.querySelector('[data-price="enterprice"]');

  const priceList = {
    starter: {
      default: 120,
      withSale: 100,
    },
    popular: {
      default: 1680,
      withSale: 1400,
    },
    enterprice: {
      default: 2520,
      withSale: 2100,
    },
  };
  const planList = {
    year: '/year',
    month: '/mon',
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterpricePrice.textContent = priceList.enterprice.withSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterpricePrice.textContent = priceList.enterprice.default;
  };

  const changePlaneToMonth = () => {
    plan.forEach((element) => {
      element.textContent = planList.month;
    });
  };

  const changePlaneToYear = () => {
    plan.forEach((element) => {
      element.textContent = planList.year;
    });
  };

  switcher.checked = true;
  setPricesWithSale();
  plan.innerText = planList.year;

  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      setPricesWithSale();
      changePlaneToYear();
    } else {
      setDefaultPrices();
      changePlaneToMonth();
    }
  });
};
