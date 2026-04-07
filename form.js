/* characters left - my question */

const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const questionInput = document.querySelector('[data-js="new-question-input"]');
const answerInput = document.querySelector('[data-js="new-answer-input"]');
const questionCounter = document.querySelector(
  '[data-js="question-character-count"]',
);
const answerCounter = document.querySelector(
  '[data-js="answer-character-count"]',
);

questionInput.addEventListener("input", (event) => {
  questionCounter.textContent = 150 - questionInput.value.length;
});

answerInput.addEventListener("input", (event) => {
  answerCounter.textContent = 150 - answerInput.value.length;
});

/* submit button */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  const newCard = Card(data);
  cardContainer.append(newCard);

  formElement.reset();
  formElement.elements.newQuestion.focus();
});

function Card(cardData) {
  const cardElement = document.createElement("li");
  cardElement.className = "question-card";
  cardElement.innerHTML = `<article class="question-card" data-js="question-card">
          <img
            class="question-card__bookmark"
            src="./assets/ribbon_dark.png"
            alt="bookmark__disco-ball"
            data-js="question-card__bookmark"
          />
          <h3 class="question-card__question" data-js="question-card__question">
            Which famous song by Elton John was rewritten in 1997 as a tribute
            to Princess Diana?
          </h3>
          <p class="question-card__answer" data-js="question-card__answer">
            Candle in the Wind
          </p>
          <button class="answer-button" data-js="answer-button">
            Show answer
          </button>
          <ul class="category-list">
            <li><button class="category">Elton John</button></li>
            <li><button class="category">Songs</button></li>
            <li><button class="category">Music</button></li>
          </ul>
        </article>`;

  const questionDisplay = cardElement.querySelector(
    "[data-js=question-card__question]",
  );
  const answerDisplay = cardElement.querySelector(
    "[data-js=question-card__answer]",
  );
  const tagList = cardElement.querySelector("[data-js=category-list]");

  questionDisplay.textContent = cardData.question;
  answerDisplay.textContent = cardData.answer;

  const newTag = document.createElement("li");
  newTag.className = "category-list";
  newTag.textContent = cardData.tag;
  tagList.append(newTag);
}

/* solution der social medie post challlenge - hilfreich für bonusaufgabe?

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
newAnswerButton.addEventListener("click", handleLikeButtonClick);
*/
