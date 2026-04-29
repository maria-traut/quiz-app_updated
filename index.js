// bookmark toggle button
const bookmarkButton = document.querySelector(
  '[data-js="question-card__bookmark"]',
);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active-bookmark");
});

/* answer toggle button
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event
*/

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerParagraph = document.querySelector(
  '[data-js="question-card__answer"]',
);

answerButton.addEventListener("click", () => {
  answerParagraph.classList.toggle("hidden");

  if (answerParagraph.classList.contains("hidden")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
});

// progress bar (copied from challenge!)
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

// dark mode button
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

if (darkModeButton) {
  darkModeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
  });
}
