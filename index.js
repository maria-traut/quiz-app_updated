/* bookmark button toggle
const bookmarkButtonActive = */

const bookmarkButton = document.querySelector(
  '[data-js="question-card__bookmark"]',
);
const imageSrc = "./assets/ribbon_active_salmon_dark";
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active-bookmark");
});

/* answer button toggle
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event
*/

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerParagraph = document.querySelector(
  '[data-js="question-card__answer"]',
);

answerButton.addEventListener("click", () => {
  answerParagraph.classList.toggle("hidden");
  if (answerButton.textContent === "Show answer") {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});

/* progress bar */

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollYPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;
  return (scrollYPosition / (webpageHeight - windowHeight)) * 100;
}

document.addEventListener("scroll", () => {
  const scrollPosition = calculateScrollPercentage();
  progressBar.style.width = `${scrollPosition}%`;
});
