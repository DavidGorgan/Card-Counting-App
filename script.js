const cards = document.querySelectorAll('.card');

let result = 0;

const resultSpace = document.querySelector('.result-number');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    if (cards[i].classList.contains('lo')) {
      result--;
    }
    else if (cards[i].classList.contains('hi')) {
      result++;
    }
    resultSpace.textContent = result;
  })
}