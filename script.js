const companyText = "Aloe Technology Company"; // Change to your desired company name
const slogans = [
  "</We Are Web Developers>",
  "</We Are Graphic Designers>",
  "</We Are Chatbot Developers>",
  "</We Are Digital Marketers>"
];
const typedTextElement = document.getElementById("typed-text");
const typingDelay = 100; // Delay between each character typing
const erasingDelay = 50; // Delay between each character erasing
const newTextDelay = 2000; // Delay before starting to erase the text

let textIndex = 0;
let sloganIndex = 0;

function type() {
  if (textIndex < companyText.length) {
    typedTextElement.textContent += companyText.charAt(textIndex);
    textIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (textIndex > 0) {
    typedTextElement.textContent = companyText.substring(0, textIndex - 1);
    textIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    typeSlogan(); // Start typing slogans after erasing the company name
  }
}

function typeSlogan() {
  typedTextElement.textContent = ""; // Clear the text
  textIndex = 0;

  function typeSloganCharacters() {
    if (textIndex < slogans[sloganIndex].length) {
      typedTextElement.textContent += slogans[sloganIndex].charAt(textIndex);
      textIndex++;
      setTimeout(typeSloganCharacters, typingDelay);
    } else {
      setTimeout(eraseSlogan, newTextDelay);
    }
  }

  typeSloganCharacters();
}

function eraseSlogan() {
  if (textIndex > 0) {
    typedTextElement.textContent = slogans[sloganIndex].substring(0, textIndex - 1);
    textIndex--;
    setTimeout(eraseSlogan, erasingDelay);
  } else {
    sloganIndex = (sloganIndex + 1) % slogans.length; // Move to the next slogan
    if (sloganIndex === 0) {
      // If all slogans have been typed, start over with the company name
      setTimeout(type, typingDelay);
    } else {
      // Otherwise, type the next slogan
      typeSlogan();
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, newTextDelay); // Start typing the company name on page load
});
