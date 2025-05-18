
const flashcardModule = (() => {
    const flashcardData = [
        { id: 1, front: "What is the primary function of the mitochondria?", back: "To generate most of the cell's supply of ATP.", level: "easy" },
        { id: 2, front: "Define 'Photosynthesis'.", back: "The process used by plants to convert sunlight into energy.", level: "medium" },
        { id: 3, front: "What does HTML stand for?", back: "HyperText Markup Language", level: "easy" },
        { id: 4, front: "What is the chemical symbol for water?", back: "H₂O", level: "easy" },
        { id: 5, front: "Who is known as the 'father of computers'?", back: "Charles Babbage", level: "hard" },
    // Add more...
    ];

 
    let currentCardIndex = 0;
    let isFlipped = false;
    let score = { known: 0, unknown: 0 };

    // DOM Elements
    const flashcardContainer = document.getElementById('flashcard-container');
    const flipButton = document.getElementById('flip-card-btn');
    const prevButton = document.getElementById('prev-card-btn');
    const nextButton = document.getElementById('next-card-btn');
    const knowButton = document.getElementById('know-btn');
    const dontKnowButton = document.getElementById('dont-know-btn');
    const currentCardNumSpan = document.getElementById('current-card-number');
    const totalCardNumSpan = document.getElementById('total-card-number');
 


    function showFinalScore() {
        flashcardContainer.innerHTML = `
            <div class='flashcard-score-completed'>
            <h2 class='flashcard-completed'>All flashcards completed!</h2>
            <div>Known: ${score.known}</div>
            <div>Unknown: ${score.unknown}</div>
            <button onclick="location.reload()">Restart</button>
            </div>
        `;
        disableAllControls();
    }
    if (currentCardIndex == flashcardData.length) {
        showFinalScore();
        return;
    }
    

    function renderCard() {
        

        if (!flashcardContainer) {
            console.error("Flashcard container not found!");
            return;
        }
        flashcardContainer.innerHTML = ''; 

        

        if (flashcardData.length === 0) {
            flashcardContainer.innerHTML = "<p class='flashcard-placeholder'>No flashcards available.</p>";
            disableAllControls();
            updateStats();
            return;
        }

        const card = flashcardData[currentCardIndex];
        if (!card) {
            flashcardContainer.innerHTML = "<p class='flashcard-placeholder'>Error loading card.</p>";
            disableAllControls();
            return;
        }

        const cardElement = document.createElement('div');
        cardElement.classList.add('flashcard');
        if (isFlipped) {
            cardElement.classList.add('is-flipped');
        }

        const frontFace = document.createElement('div');
        frontFace.classList.add('flashcard-face', 'flashcard-front');
        frontFace.textContent = card.front;

        const backFace = document.createElement('div');
        backFace.classList.add('flashcard-face', 'flashcard-back');
        backFace.textContent = card.back;

        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);
        flashcardContainer.appendChild(cardElement);

        cardElement.addEventListener('click', toggleFlip);

        updateButtonStates();
        updateStats();
       
    }
    
    function toggleFlip() {
        const cardElement = flashcardContainer.querySelector('.flashcard');
        if (!cardElement) return;

        isFlipped = !isFlipped;
        cardElement.classList.toggle('is-flipped', isFlipped);
    }

    function goToNextCard() {
        // if (currentCardIndex < flashcardData.length - 1) {
        currentCardIndex++;
        isFlipped = false; // Show front of next card
            
        // }
        if (currentCardIndex == flashcardData.length) {
            showFinalScore();
        }
        else{
            renderCard();
        }
    }

    function goToPrevCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            isFlipped = false; // Show front of previous card
            renderCard();
        }
    }

    function handleKnow() {
        score.known++;
        goToNextCard();
    }

    function handleDontKnow() {
        score.unknown++;
        goToNextCard();
    }

    function updateButtonStates() {
        prevButton.disabled = currentCardIndex === 0;
        nextButton.disabled = currentCardIndex === flashcardData.length - 1;
        flipButton.disabled = flashcardData.length === 0;
        knowButton.disabled = flashcardData.length === 0;
        dontKnowButton.disabled = flashcardData.length === 0;
    }

    function disableAllControls() {
        prevButton.disabled = true;
        nextButton.disabled = true;
        flipButton.disabled = true;
        knowButton.disabled = true;
        dontKnowButton.disabled = true;
    }

    function updateStats() {
        currentCardNumSpan.textContent = Math.min(currentCardIndex + 1, flashcardData.length);
        totalCardNumSpan.textContent = flashcardData.length;
    }
    
    function init() {
    
        
        if (flipButton) flipButton.addEventListener('click', toggleFlip);
        if (prevButton) prevButton.addEventListener('click', goToPrevCard);
        if (nextButton) nextButton.addEventListener('click', goToNextCard);
        if (knowButton) knowButton.addEventListener('click', handleKnow);
        if (dontKnowButton) dontKnowButton.addEventListener('click', handleDontKnow);
        
        renderCard()

        
    }
    
  
    return {
        init,
    };
    
})();

flashcardModule.init()