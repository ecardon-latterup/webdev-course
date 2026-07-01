const quotes = [
  "It is the unknown we fear when we look upon death and darkness, nothing more. (Albus Dumbledore)",
  "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it. (Albus Dumbledore)",
  "Dumbledore says people find it far easier to forgive others for being wrong than being right. (Hermione Granger)",
  "It is the quality of one's convictions that determines success, not the number of followers. (Remus Lupin)",
  "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are. (Sirius Black)",
  "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution. (Albus Dumbledore)",
  "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. (Albus Dumbledore)",
  "Fear of a name only increases fear of the thing itself. (Hermione Granger)",
  "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light. (Albus Dumbledore)",
  "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. (Sirius Black)",
];

const colors = ["#ac0001", "#2a623d", "#222f5b", "#ccb939"];

function findQuote() {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQuoteIndex];

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const bodyColor = colors[randomColorIndex]

  const displayQuote = document.getElementById("displayQuote");
  const pageBody = document.body;
  
  displayQuote.innerText = quote;
  pageBody.style.backgroundImage = 'none';
  pageBody.style.backgroundColor = bodyColor;
}

document.getElementById("quoteBtn").addEventListener("click", findQuote);
