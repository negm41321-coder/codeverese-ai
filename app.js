// CODEVERSE AI - BY ADAM SHERIF

const questions = [
    {
        question: "ما وظيفة HTML؟",
        answers: [
            "تصميم ألوان الموقع",
            "بناء هيكل صفحة الويب",
            "تخزين البيانات"
        ],
        correct: 1
    },
    {
        question: "ما وظيفة CSS؟",
        answers: [
            "تنسيق وتصميم الموقع",
            "إنشاء قواعد البيانات",
            "تشغيل الخادم"
        ],
        correct: 0
    },
    {
        question: "أي لغة تضيف التفاعل إلى الموقع؟",
        answers: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        correct: 2
    },
    {
        question: "ما امتداد ملفات Python؟",
        answers: [
            ".html",
            ".py",
            ".css"
        ],
        correct: 1
    },
    {
        question: "أي عنصر HTML يستخدم لإنشاء رابط؟",
        answers: [
            "<a>",
            "<p>",
            "<h1>"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizSection = document.querySelector("#lessons");

if (quizSection) {
    quizSection.innerHTML = `
        <h2>اختبر معلوماتك</h2>

        <div class="course quiz-box">
            <p id="question-number"></p>

            <h3 id="question-text"></h3>

            <div id="answers"></div>

            <p id="feedback"></p>

            <button id="next-question" disabled>
                السؤال التالي
            </button>

            <p id="score"></p>
        </div>
    `;

    const questionNumber =
        document.querySelector("#question-number");

    const questionText =
        document.querySelector("#question-text");

    const answersBox =
        document.querySelector("#answers");

    const feedback =
        document.querySelector("#feedback");

    const nextButton =
        document.querySelector("#next-question");

    const scoreText =
        document.querySelector("#score");

    function showQuestion() {
        answered = false;

        const question = questions[currentQuestion];

        questionNumber.textContent =
            `السؤال ${currentQuestion + 1} من ${questions.length}`;

        questionText.textContent = question.question;

        feedback.textContent = "";

        nextButton.disabled = true;

        answersBox.innerHTML = "";

        question.answers.forEach((answer, index) => {
            const button = document.createElement("button");

            button.textContent = answer;
            button.className = "answer-btn";

            button.addEventListener("click", () => {
                checkAnswer(index);
            });

            answersBox.appendChild(button);
        });
    }

    function checkAnswer(selected) {
        if (answered) return;

        answered = true;

        const correct = questions[currentQuestion].correct;

        if (selected === correct) {
            score++;

            feedback.textContent = "إجابة صحيحة! أحسنت 🎉";
        } else {
            feedback.textContent =
                "إجابة غير صحيحة. حاول في السؤال القادم!";
        }

        nextButton.disabled = false;

        scoreText.textContent = `نقاطك: ${score}`;
    }

    nextButton.addEventListener("click", () => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            quizSection.innerHTML = `
                <div class="course">
                    <h2>انتهى الاختبار! 🎉</h2>
                    <h3>نتيجتك: ${score} من ${questions.length}</h3>
                    <p>استمر في التعلم داخل CODEVERSE AI</p>
                    <button onclick="location.reload()">
                        إعادة الاختبار
                    </button>
                </div>
            `;
        }
    });

    showQuestion();
}

// رسالة ترحيب
console.log("Welcome to CODEVERSE AI!");
console.log("BY ADAM SHERIF");
