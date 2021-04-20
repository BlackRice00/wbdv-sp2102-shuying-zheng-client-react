const QUIZ_URL = "https://wbdv-course.herokuapp.com/api/quizzes"

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZ_URL}/${qid}/questions`)
        .then(response => response.json())
}
export default {
    findQuestionsForQuiz
}