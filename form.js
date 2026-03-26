/*
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  console.log(data);
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`,
  );

  formElement.reset();
  formElement.elements.firstName.focus();
});

*/

/* characters left - my question */
const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="new-question-input"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]',
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - messageInput.value.length;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
  console.log(data);
  formElement.reset();
  formElement.elements.newQuestion.focus();
});

/* submit button 
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  formElements.firstName.focus();
});
*/
