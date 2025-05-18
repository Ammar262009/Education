const quizModule = (() => {

    const quizContainer = document.getElementById('quiz-container');
    const prevButton = document.getElementById('prev-question-btn');
    const nextButton = document.getElementById('next-question-btn');
    const currentCardNumSpan = document.getElementById('current-question-number');
    const totalCardNumSpan = document.getElementById('total-question-number');

    const quiz = [
    {
        id: 1,
        question: "What is the capital of France?",
        ans: "Paris",
        level: "easy",
        opt1: "Berlin",
        opt2: "Madrid",
        opt3: "Paris",
        opt4: "Rome"
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        ans: "Mars",
        level: "easy",
        opt1: "Earth",
        opt2: "Mars",
        opt3: "Jupiter",
        opt4: "Saturn"
    },
    {
        id: 3,
        question: "What is the square root of 64?",
        ans: "8",
        level: "medium",
        opt1: "6",
        opt2: "7",
        opt3: "8",
        opt4: "9"
    },
    {
        id: 4,
        question: "What is the chemical symbol for water?",
        ans: "H₂O",
        level: "easy",
        opt1: "CO₂",
        opt2: "H₂O",
        opt3: "O₂",
        opt4: "HO"
    },
    {
        id: 5,
        question: "Who developed the theory of relativity?",
        ans: "Albert Einstein",
        level: "medium",
        opt1: "Isaac Newton",
        opt2: "Albert Einstein",
        opt3: "Galileo Galilei",
        opt4: "Nikola Tesla"
    },
    {
        id: 6,
        question: "In computing, what does 'CPU' stand for?",
        ans: "Central Processing Unit",
        level: "easy",
        opt1: "Central Processing Unit",
        opt2: "Control Panel Utility",
        opt3: "Computer Processing Union",
        opt4: "Central Power Unit"
    },
    {
        id: 7,
        question: "What is the value of Pi up to two decimal places?",
        ans: "3.14",
        level: "medium",
        opt1: "3.12",
        opt2: "3.14",
        opt3: "3.16",
        opt4: "3.10"
    },
    {
        id: 8,
        question: "What year did World War II end?",
        ans: "1945",
        level: "hard",
        opt1: "1944",
        opt2: "1945",
        opt3: "1946",
        opt4: "1947"
    },
    {
    id: 9,
    question: "What gas do plants absorb from the atmosphere?",
    ans: "Carbon Dioxide",
    level: "easy",
    opt1: "Oxygen",
    opt2: "Carbon Dioxide",
    opt3: "Nitrogen",
    opt4: "Hydrogen"
},
{
    id: 10,
    question: "What is the largest organ in the human body?",
    ans: "Skin",
    level: "medium",
    opt1: "Liver",
    opt2: "Lungs",
    opt3: "Heart",
    opt4: "Skin"
},
{
    id: 11,
    question: "Who painted the Mona Lisa?",
    ans: "Leonardo da Vinci",
    level: "medium",
    opt1: "Vincent van Gogh",
    opt2: "Pablo Picasso",
    opt3: "Leonardo da Vinci",
    opt4: "Claude Monet"
},
{
    id: 12,
    question: "What is the powerhouse of the cell?",
    ans: "Mitochondria",
    level: "easy",
    opt1: "Nucleus",
    opt2: "Ribosome",
    opt3: "Mitochondria",
    opt4: "Chloroplast"
},
{
    id: 13,
    question: "What is the hardest natural substance on Earth?",
    ans: "Diamond",
    level: "medium",
    opt1: "Gold",
    opt2: "Iron",
    opt3: "Diamond",
    opt4: "Platinum"
},
{
    id: 14,
    question: "Which element has the atomic number 1?",
    ans: "Hydrogen",
    level: "easy",
    opt1: "Helium",
    opt2: "Oxygen",
    opt3: "Hydrogen",
    opt4: "Carbon"
},
{
    id: 15,
    question: "What is the capital city of Japan?",
    ans: "Tokyo",
    level: "easy",
    opt1: "Kyoto",
    opt2: "Osaka",
    opt3: "Tokyo",
    opt4: "Hiroshima"
},
{
    id: 16,
    question: "Which language is used to style web pages?",
    ans: "CSS",
    level: "easy",
    opt1: "HTML",
    opt2: "Python",
    opt3: "CSS",
    opt4: "Java"
},
{
    id: 17,
    question: "Which continent is the Sahara Desert located on?",
    ans: "Africa",
    level: "easy",
    opt1: "Asia",
    opt2: "Africa",
    opt3: "Australia",
    opt4: "South America"
},
{
    id: 18,
    question: "What is the freezing point of water in Celsius?",
    ans: "0",
    level: "easy",
    opt1: "0",
    opt2: "32",
    opt3: "100",
    opt4: "-10"
},
{
    id: 19,
    question: "Which blood type is known as the universal donor?",
    ans: "O Negative",
    level: "medium",
    opt1: "A Positive",
    opt2: "B Negative",
    opt3: "AB Positive",
    opt4: "O Negative"
},
{
    id: 20,
    question: "What is the capital of Canada?",
    ans: "Ottawa",
    level: "medium",
    opt1: "Toronto",
    opt2: "Vancouver",
    opt3: "Ottawa",
    opt4: "Montreal"
},
{
    id: 21,
    question: "In which year did the Titanic sink?",
    ans: "1912",
    level: "hard",
    opt1: "1912",
    opt2: "1920",
    opt3: "1905",
    opt4: "1915"
},
{
    id: 22,
    question: "What is the chemical formula for table salt?",
    ans: "NaCl",
    level: "easy",
    opt1: "KCl",
    opt2: "NaCl",
    opt3: "CaCl2",
    opt4: "MgCl"
},
{
    id: 23,
    question: "Which is the longest river in the world?",
    ans: "Nile",
    level: "medium",
    opt1: "Amazon",
    opt2: "Yangtze",
    opt3: "Mississippi",
    opt4: "Nile"
},
{
    id: 24,
    question: "Who invented the telephone?",
    ans: "Alexander Graham Bell",
    level: "medium",
    opt1: "Thomas Edison",
    opt2: "Nikola Tesla",
    opt3: "Alexander Graham Bell",
    opt4: "Guglielmo Marconi"
},
{
    id: 25,
    question: "What is the speed of light?",
    ans: "299,792,458 m/s",
    level: "hard",
    opt1: "150,000,000 m/s",
    opt2: "300,000,000 m/s",
    opt3: "299,792,458 m/s",
    opt4: "100,000,000 m/s"
},
{
    id: 26,
    question: "Which element has the highest melting point?",
    ans: "Tungsten",
    level: "hard",
    opt1: "Iron",
    opt2: "Carbon",
    opt3: "Tungsten",
    opt4: "Titanium"
},
{
    id: 27,
    question: "What is the Heisenberg Uncertainty Principle related to?",
    ans: "Position and momentum",
    level: "hard",
    opt1: "Mass and velocity",
    opt2: "Speed and distance",
    opt3: "Position and momentum",
    opt4: "Time and space"
},
{
    id: 28,
    question: "Who wrote the book 'The Origin of Species'?",
    ans: "Charles Darwin",
    level: "hard",
    opt1: "Isaac Newton",
    opt2: "Albert Einstein",
    opt3: "Charles Darwin",
    opt4: "Stephen Hawking"
},
{
    id: 29,
    question: "Which programming language introduced the concept of 'Object-Oriented Programming'?",
    ans: "Simula",
    level: "hard",
    opt1: "C++",
    opt2: "Java",
    opt3: "Python",
    opt4: "Simula"
},
{
    id: 30,
    question: "What is the name of the galaxy that contains our Solar System?",
    ans: "Milky Way",
    level: "hard",
    opt1: "Andromeda",
    opt2: "Milky Way",
    opt3: "Sombrero",
    opt4: "Messier 87"
}



];
    let currentCardIndex = 0;
    let filteredQuizzes;
    let score = 0;
    let summary = [];

    function disableAllControls() {
        prevButton.disabled = true;
        nextButton.disabled = true;
    }

    function updateStats() {
        currentCardNumSpan.textContent = currentCardIndex + 1;
        totalCardNumSpan.textContent = filteredQuizzes.length;
    }
    let selectedLevel = "easy";
    function startQuiz(level = selectedLevel){
        selectedLevel = level;
        filteredQuizzes = level === "all" ? quiz : quiz.filter(q => q.level === level);

        

        const quizs1 = filteredQuizzes[currentCardIndex]
        let question = quizs1.question
        let opt1 = quizs1.opt1
        let opt2 = quizs1.opt2
        let opt3 = quizs1.opt3
        let opt4 = quizs1.opt4


        quizContainer.innerHTML = `<h3>${question}</h3>
                <div class="options-container">
                    <div class="option1 options option-btn">${opt1}</div>
                    <div class="option2 options option-btn">${opt2}</div>
                    <div class="option3 options option-btn">${opt3}</div>
                    <div class="option4 options option-btn">${opt4}</div>
                </div>`;

        document.querySelectorAll('.option-btn').forEach(btn => {
            console.log(btn.textContent);
            btn.addEventListener('click', () => handleAnswer(btn.textContent, quizs1));
        });
        
        updateStats()
    }

    function handleAnswer(selected, q) {
        const isCorrect = selected === q.ans;
        if (isCorrect) score++;
        summary.push({ question: q.question, correctAns: q.ans, selectedAns: selected, isCorrect });
        // currentCardIndex++;
        goToNextCard();
    }
    

    function loadQuiz() {
        if (quizContainer) {
            quizContainer.innerHTML = `
                <h3>Welcome to the Quiz!</h3>
                <p class='testknow-para'>Test your knowledge with our fun quiz.</p>
                <select id="level-select">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button id="start-quiz">Start Quiz</button>
            `;
            const startQuizButton = document.getElementById('start-quiz');
            startQuizButton.addEventListener('click',()=>{
                const selectedLevel = document.getElementById('level-select').value;
                startQuiz(selectedLevel);
            });
        }
        
    }

    function showFinalScore(){
        disableAllControls()
         quizContainer.innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Score: ${score} / ${filteredQuizzes.length}</p>
            <button id="view-summary-btn">View Summary</button>
            <button onclick='location.reload()'>Restart</button>
        `;

        const viewSummaryBtn = document.getElementById('view-summary-btn');
        viewSummaryBtn.addEventListener('click', showSummary);
    }
    
    function showSummary() {
        quizContainer.innerHTML = `<h3>Summary</h3>` + summary.map(item => `
            <div class="summary-item">
                <strong>Q:</strong> ${item.question}<br/>
                <strong>Correct Answer:</strong> ${item.correctAns}<br/>
                <strong>Your Answer:</strong> ${item.selectedAns} ${item.isCorrect ? '✅' : '❌'}
            </div>
            
        `).join('');
        quizContainer.innerHTML += `<button onclick='location.reload()'>Restart</button>`;
    }

    function init() {
        if(prevButton) prevButton.addEventListener('click', goToPrevCard);
        if(nextButton) nextButton.addEventListener('click', goToNextCard);
        loadQuiz()
        // console.log(quiz[currentCardIndex]);
        
    }

    function goToNextCard() {
        // if (currentCardIndex < flashcardData.length - 1) {
        currentCardIndex++;
            
        // }
        if (currentCardIndex == filteredQuizzes.length) {
            showFinalScore();
            disableAllControls()
        }
        else{
            startQuiz();
        }
    }

    function goToPrevCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            startQuiz();
        }
    }

    return {
        init,
    };
})();

quizModule.init();