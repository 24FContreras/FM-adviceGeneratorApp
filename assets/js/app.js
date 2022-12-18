console.log("Linkin' duck 🦆");

const adviceBtn = document.querySelector("#randomizeBtn");
const adviceID = document.querySelector("#adviceID");
const advice = document.querySelector("#advice");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  adviceID.textContent = data.slip.id;
  advice.textContent = data.slip.advice;
};

adviceBtn.addEventListener("click", () => {
  fetchAdvice();
});

//initial
fetchAdvice();
