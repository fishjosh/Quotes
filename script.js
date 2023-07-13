const quoteContainer = document.getElementById("quote");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
let randomQuote = 0;
//console.log(fetch("LewisQuotes.json"));
//console.log(JSON.parse("LewiseQuotes.json"));
function getAuthor(button) {
  console.log();
  switch (button) {
    case btn1:
      fetch("./LewisQuotes.json")
        .then((res) => res.json())
        .then((data) => {
          quoteContainer.classList.remove("fade");
          quoteContainer.textContent = `${
            data.lewis[Math.floor(Math.random() * data.lewis.length)].name
          }`;
          quoteContainer.classList.add("fade");
        });
      break;
    case btn2:
      fetch("./SpurgeonQuotes.json")
        .then((res) => res.json())
        .then((data) => {
          quoteContainer.classList.remove("fade");
          quoteContainer.textContent = `${
            data.spurgeon[Math.floor(Math.random() * data.spurgeon.length)].name
          }\n― Charles Spurgeon`;
          quoteContainer.classList.add("fade");
        });
      break;
    case btn3:
      fetch("./TozerQuotes.json")
        .then((res) => res.json())
        .then((data) => {
          quoteContainer.classList.remove("fade");
          quoteContainer.textContent = `${
            data.tozer[Math.floor(Math.random() * data.tozer.length)].name
          }\n― A. W. Tozer`;
          quoteContainer.classList.add("fade");
        });
      break;
  }
}
let getQuote = () => {
  quoteContainer.classList.remove("fade");
  randomQuote = Math.floor(Math.random() * 3);
  switch (randomQuote) {
    case 0:
      getAuthor(btn1);
      break;
    case 1:
      getAuthor(btn2);
      break;
    case 2:
      getAuthor(btn3);
      break;
  }
  quoteContainer.classList.add("fade");
};
btn1.addEventListener("click", function () {
  getAuthor(btn1);
});
btn2.addEventListener("click", function () {
  getAuthor(btn2);
});
btn3.addEventListener("click", function () {
  getAuthor(btn3);
});
btn4.addEventListener("click", getQuote);
