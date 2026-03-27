/* characters left - my question 
const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="new-question-input"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]',
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - messageInput.value.length;
});
*/

/* submit button */
const form = document.querySelector('[data-js="form"]');

const newQuestionCard = document.createElement("article");
const newImg = document.createElement("img");
const newQuestion = document.createElement("h3");
const newAnswer = document.createElement("p");
const newAnswerButton = document.createElement("button");
const newList = document.createElement("ul");
const newTag = document.createElement("li");

newQuestionCard.classList.add("question-card");
newImg.classList.add("question-card__bookmark");
newQuestion.classList.add("question-card__question");
newAnswer.classList.add("question-card__answer");
newAnswerButton.classList.add("answer-button");
newList.classList.add("category-list");
newTag.classList.add("input");

newQuestion.textContent =
  "Which 1975 song by Queen became a worldwide hit and is considered their breakthrough single?";
newAnswer.textContent = "Bohemian Rhapsody";
newTag.textContent = "Queen";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
  console.log(data);
  newQuestionCard.append(
    newImg,
    newQuestion,
    newAnswer,
    newAnswerButton,
    newList,
    newTag,
  );
  document.body.append(newQuestionCard);
  formElement.reset();
  formElement.elements.newQuestion.focus();
});
