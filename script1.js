const images = [
    'img/pumpkin.png',
    'img/candy.png',
    'img/ghost.png',
    'img/candy.png',
    'img/bat.png',
    'img/ghost.png',
    'img/bat.png',
    'img/pumpkin.png'
];

const gameContainer = document.getElementById('game-container');
let firstCard, secondCard;
let lockBoard = false;
let matches = 0;

// Shuffle images
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Create board
function createBoard() {
    const shuffledImages = shuffle(images);
    shuffledImages.forEach((image) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;

        const img = document.createElement('img');
        img.src = image;
        card.appendChild(img);

        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

// Flip card
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

// Check for match
function checkForMatch() {
    const isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? disableCards() : unflipCards();
}

// Disable cards if match
function disableCards() {
    matches++;
    resetBoard();
}

// Unflip cards if not a match
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

// Reset board variables
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
    if (matches === images.length / 2) {
        setTimeout(() => alert('You won!'), 500);
    }
}

// Initialize game
createBoard();
