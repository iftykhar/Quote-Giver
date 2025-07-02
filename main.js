const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don't let yesterday take up too much of today. – Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Everything you can imagine is real. – Pablo Picasso",
  "Happiness depends upon ourselves. – Aristotle",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt"
];

const quoteEl = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const quoteInput = document.getElementById("quoteInput");


function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}


function addNewQuote() {
  const newQuote = quoteInput.value.trim();
  if (newQuote.length > 5) {
    quotes.push(newQuote);
    quoteInput.value = '';
    displayRandomQuote(); // optionally show the new one
    alert("✅ Quote added!");
  } else {
    alert("⚠️ Please enter a longer quote.");
  }
}


newQuoteBtn.addEventListener("click", displayRandomQuote);
addQuoteBtn.addEventListener("click", addNewQuote);


displayRandomQuote();