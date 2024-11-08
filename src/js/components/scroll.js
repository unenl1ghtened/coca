/* eslint-disable prettier/prettier */
export const useScroll = () => {
  const header = document.querySelector('[data-scroll="header"]');
  const headerHeight = header.offsetHeight;
  const overlay = document.querySelector('[data-burger="overlay"]');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      header.classList.remove('header--down', 'header--fixed');
      return;
    }

    if (overlay.classList.contains('overlay--visible')) return;

    if (currentScroll > headerHeight) {
      if (
        currentScroll > lastScroll &&
        !header.classList.contains('header--show')
      ) {
        header.classList.add('header--down');
        header.classList.remove('header--fixed');
      } else {
        header.classList.add('header--fixed');
        header.classList.remove('header--down');
      }
    }

    lastScroll = currentScroll;
  });
};
