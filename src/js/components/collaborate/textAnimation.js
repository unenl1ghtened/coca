/* eslint-disable prettier/prettier */
export const useTextAnimation = () => {
  const text = document.querySelector('.hero__circle-text p');
  text.innerHTML = text.innerText
    .trim()
    .split('')
    .map(
      (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`,
    )
    .join('');
};
