console.log("Linkin' duck 🦆");

const adviceBtn = document.querySelector("#randomizeBtn");
const adviceID = document.querySelector("#adviceID");
const advice = document.querySelector("#advice");

const handleText = (dataset) => {
  adviceID.textContent = dataset.slip.id;
  advice.textContent = dataset.slip.advice;
};

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  handleText(data);
};

adviceBtn.addEventListener("click", () => {
  fetchAdvice();
});

//initial
fetchAdvice();
