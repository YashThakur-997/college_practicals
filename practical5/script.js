const questionEl = document.getElementById('question-text');
const choicesEl = document.getElementById('choices-list');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score-val');
const gameArea = document.getElementById('game');
const loader = document.getElementById('loader');

    let questions = [];
    let currentIdx = 0;
    let score = 0;

    async function startQuiz() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
            const data = await response.json();
            questions = data.results;
            loader.classList.add('hidden');
            gameArea.classList.remove('hidden');
            showQuestion();
        } catch (err) {
            loader.innerText = "Failed to load questions. Try refreshing!";
        }
    }

    function showQuestion() {
        nextBtn.classList.add('hidden');
        choicesEl.innerHTML = '';
        
        let q = questions[currentIdx];
        questionEl.innerHTML = q.question; // InnerHTML used to decode entities from API

        // Combine and shuffle answers
        const answers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);

        answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = answer;
            button.classList.add('choice-btn');
            button.onclick = () => selectAnswer(button, answer, q.correct_answer);
            choicesEl.appendChild(button);
        });
    }

    function selectAnswer(btn, selected, correct) {
        const allBtns = document.querySelectorAll('.choice-btn');
        allBtns.forEach(b => b.disabled = true); // Prevent double clicking

        if (selected === correct) {
            btn.classList.add('correct');
            score++;
            scoreEl.innerText = score;
        } else {
            btn.classList.add('incorrect');
            // Show the user the right answer anyway
            allBtns.forEach(b => { if(b.innerHTML === correct) b.classList.add('correct'); });
        }
        nextBtn.classList.remove('hidden');
    }

    nextBtn.onclick = () => {
        currentIdx++;
        if (currentIdx < questions.length) {
            showQuestion();
        } else {
            gameArea.innerHTML = `<h2>Quiz Finished!</h2><p>Final Score: ${score}/${questions.length}</p>`;
        }
    };

    startQuiz();