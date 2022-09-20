export function toggleAnswer() {
  const cardElements = document.querySelectorAll('[data-js="card"]');

  cardElements.forEach((card) => {
    const answerButton = card.querySelector('[data-js="answer-button"]');
    const answer = card.querySelector('[data-js="answer"]');

    answerButton.addEventListener("click", () => {
      answer.classList.toggle("card__answer--active");
    });
  });
}
