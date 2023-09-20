// Store the words you want to cycle through in an array
const words = ["Kumusta? 👋🏽 I am Ed. ", "How are you? 👋🏽 I am Ed. "];
let currentWordIndex = 0;

// Function to update the word every 2 seconds
function updateWord() {
    const changingWord = document.getElementById("changing-word");
    changingWord.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
}

// Update the word initially and set an interval to update it every 2 seconds
updateWord();
setInterval(updateWord, 3000); 