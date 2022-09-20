import { createCard } from "../card-list/card-list.js";

export function handleSubmit() {
  const form = document.querySelector('[data-js="form"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    createCard(data);
    event.target.reset();
    event.target.elements.question.focus();
  });
}
