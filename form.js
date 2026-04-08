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
  cardElement.className = "question-card__list";
  cardElement.innerHTML = `<article class="question-card">
          <img
            class="question-card__bookmark"
            src="./assets/ribbon_dark.png"
            alt="bookmark__ribbon-dark"
          />
          <h3 class="question-card__question" data-js="question-card__question"></h3>
          <p class="question-card__answer" data-js="question-card__answer"></p>
          <button class="answer-button">Show answer</button>
          <ul class="category-list" data-js="category-list">
          </ul>
        </article>`;

  const questionDisplay = cardElement.querySelector(
    '[data-js="question-card__question"]',
  );
  const answerDisplay = cardElement.querySelector(
    '[data-js="question-card__answer"]',
  );
  const tagList = cardElement.querySelector('[data-js="category-list"]');

  questionDisplay.textContent = cardData.newQuestion;
  answerDisplay.textContent = cardData.newAnswer;

  const newTag = document.createElement("li");
  newTag.className = "category";
  newTag.textContent = cardData.newTag;
  tagList.append(newTag);
  return cardElement;
}

/* Waiting to be implemented

 --v-- Only for Bonus Task --v--

const answerButton = cardElement.querySelector('[data-js="answer-button"]');
const bookmarkButton = cardElement.querySelector(
  '[data-js="question-card__bookmark"]',
);

// Bookmark Interaction
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// Answer Display Toggling
answerButton.addEventListener("click", () => {
  const isAnswerVisible = answerDisplay.classList.contains(
    "card__answer--active",
  );

  if (isAnswerVisible) {
    answerDisplay.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  } else {
    answerDisplay.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  }
});

// --^-- Only for Bonus Task --^-- */

/* Test Fetch Data from Rick and Morty API

async function Card() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const firstTen = data.results.slice(0, 10);
  firstTen.forEach((person) => {
    const cardElement = document.createElement("li");
    cardElement.className = "question-card__list";
    cardElement.innerHTML = `<article class="question-card">
          <img
            class="question-card__bookmark"
            src="./assets/ribbon_dark.png"
            alt="bookmark__disco-ball"
          />
          <h3 class="question-card__question" data-js="question-card__question"></h3>
          <p class="question-card__answer" data-js="question-card__answer"></p>
          <button class="answer-button">Show answer</button>
        </article>`;

    const questionDisplay = cardElement.querySelector(
      '[data-js="question-card__question"]',
    );
    const answerDisplay = cardElement.querySelector(
      '[data-js="question-card__answer"]',
    );

    questionDisplay.textContent = person.name;
    answerDisplay.textContent = person.species;
    cardContainer.append(cardElement);
  });
}

// Backlog
people.forEach((person) => {
    const card = Card(person);
    renderElement(card);

    return cardElement;

     const firstPerson = data.results[0];
    */
