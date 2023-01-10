// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const riverButton = document.getElementById('river-button');
const roadButton = document.getElementById('road-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
const riverContainer = document.getElementById('river-container');
const roadContainer = document.getElementById('road-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');
const treeEl = document.getElementById('tree-guesses');
const shedEl = document.getElementById('shed-guesses');
const boulderEl = document.getElementById('boulder-guesses');

let correctGuesses = 0;
let totalGuesses = 0;
let incorrectGuesses = 0;
let treeGuesses = 0;
let shedGuesses = 0;
let boulderGuesses = 0;

shedButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('shed', correctSpot);
    shedGuesses++;
    shedEl.textContent = shedGuesses;
});

treeButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('tree', correctSpot);
    treeGuesses++;
    treeEl.textContent = treeGuesses;
});

boulderButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('boulder', correctSpot);
    boulderGuesses++;
    boulderEl.textContent = boulderGuesses;
});

riverButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('river', correctSpot);
});

roadButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('road', correctSpot);
});

function getRandomHidingSpot() {
    const hidingPlaces = ['tree', 'boulder', 'shed', 'river', 'road'];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    const correctSpot = hidingPlaces[index];
    return correctSpot;
}

function handleGuess(userGuess, correctSpot) {
    removeClasses();

    if (correctSpot === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }
    totalGuesses++;

    winsEl.textContent = correctGuesses;
    lossesEl.textContent = incorrectGuesses;
    totalEl.textContent = totalGuesses;
    const correctContainer = document.getElementById(
        `${correctSpot}-container`
    );
    correctContainer.classList.add('face');
}

function removeClasses() {
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    riverContainer.classList.remove('face');
    roadContainer.classList.remove('face');
}
