// Store the words you want to cycle through in an array
const words1 = ["Kumusta? 👋🏽 Ako si  Ed. ", "How are you? 👋🏽 I'm Ed. "];
const words2 = ["Proyekto", "Projects"];
const words3 = ["Dugtong", "Links"];
const words4 = ["Mga Aklat", "Books"];
let currentWordIndex = 1;

// Function to update the word every 5 seconds
function updateWord() {
    const changingWord1 = document.getElementById("changing-word1");
    changingWord1.textContent = words1[currentWordIndex];
    const changingWord2 = document.getElementById("changing-word2");
    changingWord2.textContent = words2[currentWordIndex];
    const changingWord3 = document.getElementById("changing-word3");
    changingWord3.textContent = words3[currentWordIndex];
    const changingWord4 = document.getElementById("changing-word4");
    changingWord4.textContent = words4[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words1.length;
}

// Update the word initially and set an interval to update it every 2 seconds
updateWord();
setInterval(updateWord, 5000); 

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');
 
    toggleButton.addEventListener('click', function () {
       navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
 });