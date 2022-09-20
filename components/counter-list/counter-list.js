export function countCharactersLeft() {
  const formFields = document.querySelectorAll('[data-js*="input"]');
  const counterOutputs = document.querySelectorAll("[data-js*=amount-left]");

  formFields.forEach((formField, index) => {
    counterOutputs.forEach((output) => {
      output.innerText = formField.maxLength;
    });
    formField.addEventListener("input", () => {
      const currentAmountLeft = formField.maxLength - formField.value.length;
      updateAmount(currentAmountLeft, index);
    });
  });
  function updateAmount(value, index) {
    counterOutputs[index].innerText = value;
  }
}
