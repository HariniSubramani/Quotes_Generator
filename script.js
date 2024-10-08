const quoteText = document.getElementById("quoteText");

const getQuote = () => {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
      quoteText.innerHTML = `"${data.quote}"`;
      
      quoteText.style.animation = "fade-in 1s";
      setTimeout(() => {
        quoteText.style.animation = "none";
      }, 1000);
    });
};