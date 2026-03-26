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

/* answer button toggle */

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerParagraph = document.querySelector(
  '[data-js="question-card__answer"]',
);

answerButton.addEventListener("click", () => {
  answerParagraph.classList.toggle("hidden");
});

/* bookmark button toggle */
const bookmarkButton = document.querySelector(
  '[data-js="question-card__bookmark"]',
);
const bookmarkButtonActive = bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active-bookmark");
});

/* navigation mouseover */

/*
const answerButtonShow = "Show answer";
const answerButtonHide = "Hide answer";
    let answerButtonShow = "Show answer";
  let answerButtonHide = "Hide answer";
  const answerButtonText = answerButtonShow;
  answerButtonShow = answerButtonHide;
  answerButtonHide = answerButtonText;
  */
