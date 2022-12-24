const quizData = [
    {
        question: "What is PBL?",
        a: "Project Based Learning",
        b: "Project of the house",
        c: "Popular bee love",
        d: "Everything",
        correct: "a",
    },
    {
        question: "How many countries borders Kazakhstan?",
        a: "Three",
        b: "Seven",
        c: "Six",
        d: "Five",
        correct: "d",
    },
    {
        question: "How many ways are there to seat five people in five different chairs?",
        a: "Twenty four",
        b: "Seven hundred and twenty",
        c: "One hundred and twenty",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Choose the CORRECT sentence",
        a: "The oranges freezed when the temperature dropped overnight.",
        b: "The oranges froze when the temperatures dropped overnight.",
        c: "The oranges got frozed when the temperature dropped overnight.",
        d: "none of the above",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})