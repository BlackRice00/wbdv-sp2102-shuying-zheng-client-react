// submitQuiz = (quizId, questions) => {
//     fetch(`http://localhost:3000/api/quizzes/${quizId}/attempts`, {
//         method: 'POST',
//         body: JSON.stringify(questions),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())
//         .then(result => console.log(result))
// }
const API_URL = "https://wbdv-course.herokuapp.com/api"

export const submitQuiz = (quizId, questions) => {
    return fetch(`${API_URL}/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const findAllQuizzes = () => {
    return (fetch(`${API_URL}/quizzes`)
        .then(response => response.json()))
}

export const findQuizById = (qid) => {
    return fetch(`${API_URL}/quizzes/${qid}`)
        .then(response => response.json())
}



export const findAttemptsByQuizId = (quizId) => {
    return fetch(`${API_URL}/quizzes/${quizId}/attempts`)
        .then(response=>response.json())
}

const api = {
    findAllQuizzes, submitQuiz, findQuizById, findAttemptsByQuizId
}

export default api