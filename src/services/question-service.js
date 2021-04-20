const QUIZ_URL = "http://localhost:4000/api/quizzes"

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZ_URL}/${qid}/questions`)
        .then(response => response.json())
}
export default {
    findQuestionsForQuiz
}