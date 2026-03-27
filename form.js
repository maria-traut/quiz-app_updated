/* characters left - my question */

const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="new-question-input"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]',
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - messageInput.value.length;
});

/* submit button */

const newQuestionCard = document.createElement("article");
const newBookmark = document.createElement("img");
const newQuestion = document.createElement("h3");
const newAnswer = document.createElement("p");
const newAnswerButton = document.createElement("button");
const newList = document.createElement("ul");
const newTag = document.createElement("li");

newQuestionCard.classList.add("question-card");
newBookmark.classList.add("question-card__bookmark");
newQuestion.classList.add("question-card__question");
newAnswer.classList.add("question-card__answer");
newAnswerButton.classList.add("answer-button");
newList.classList.add("category-list");
newTag.classList.add("category");

newQuestion.textContent =
  "Which 1975 song by Queen became a worldwide hit and is considered their breakthrough single?";
newAnswer.textContent = "Bohemian Rhapsody";
newTag.textContent = "Queen";
newAnswerButton.textContent = "Show answer";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
  console.log(data);
  newQuestionCard.append(
    newBookmark,
    newQuestion,
    newAnswer,
    newAnswerButton,
    newList,
  );
  newList.append(newTag);
  document.body.append(newQuestionCard);
  formElement.reset();
  formElement.elements.newQuestion.focus();
});

/* solution der social medie post challlenge - hilfreich für bonusaufgabe?

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
newAnswerButton.addEventListener("click", handleLikeButtonClick);
*/
