export const useFooterAccordion = () => {
  const container = document.querySelector('.container');
  const accordionList = document.querySelectorAll('[data-accordion="list"]');

  const checkWidth = () => {
    if (container.clientWidth <= 768) {
      accordionList.forEach((el) => {
        el.addEventListener('click', (e) => {
          const openedAccordionContent = el.querySelector(
            '.accordion-list__item--opened .accordion-list__content',
          );

          if (openedAccordionContent) {
            openedAccordionContent.style.maxHeight =
              openedAccordionContent.scrollHeight + 'px';
          }

          const accordionControl = e.target.closest('.accordion-list__control');
          if (!accordionControl) return;
          const accordionItem = accordionControl.parentElement;
          const accordionContent = accordionControl.nextElementSibling;

          //закрывает предыдущие открытые
          el.querySelectorAll('.accordion-list__item').forEach((item) => {
            if (
              item !== accordionItem &&
              item.classList.contains('accordion-list__item--opened')
            ) {
              item.classList.remove('accordion-list__item--opened');
              item.querySelector('.accordion-list__content').style.maxHeight =
                null;
            }
          });

          accordionItem.classList.toggle('accordion-list__item--opened');

          if (
            accordionItem.classList.contains('accordion-list__item--opened')
          ) {
            accordionContent.style.maxHeight =
              accordionContent.scrollHeight + 'px';
          } else {
            accordionContent.style.maxHeight = null;
          }
        });
      });
    } else {
      return;
    }
  };

  checkWidth();

  window.addEventListener('resize', checkWidth);
};
