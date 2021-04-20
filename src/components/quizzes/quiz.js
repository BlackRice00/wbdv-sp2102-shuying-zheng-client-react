import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import QuizService from '../../services/quiz-service'
import QuestionService from '../../services/question-service'

const Quiz = () => {
    const {quizId} = useParams()
    const [quiz, setQuiz] = useState([]);
    const [questions, setQuestions] = useState([])
    const [questionsWithAns, setQuestionsWithAns] = useState([])
    const [score, setScore] = useState(0)
    const [graded, setGraded] = useState(false)
    const [attempts, setAttempts] = useState([])
    const [showAttempts, setShowAttempts] = useState(false)

    // useEffect(() => {
    //     // TODO: move this to a service file
    //     fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
    //         .then(response => response.json())
    //         .then((questions) => {
    //             setQuestions(questions)
    //         })
    // }, [])
    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId).then((questions) => {
            setQuestions(questions)
            setQuestionsWithAns(questions)
        })
        QuizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))

    }, [quizId])

    useEffect(() => {
        QuizService.findAttemptsByQuizId(quizId).then((attempts) => setAttempts(attempts))
    }, [quizId])

    function updateQuestionWithAns(q) {
        console.log("q from child: ", q)
        const newQArray = questionsWithAns.filter((tmpQ)=>{
            return tmpQ.title !== q.title
        })
        setQuestionsWithAns([...newQArray,q])
    }
    return (
        <div>
            <h3>Quiz {quizId}: ({questions.length} questions)</h3>
            <hr/>
            <ul>
                {
                    questions.map((question) => {
                        return (
                            <li>
                                <Question question={question} setQuestionsWithAns={updateQuestionWithAns}/>
                                <br/>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <div>
                {
                    graded &&
                    <h4>SCORE: {score.toFixed(2)}</h4>
                }
                <button
                    onClick={() => {
                        setGraded(true)
                        QuizService.submitQuiz(quizId, questionsWithAns)
                            .then(attempt => {
                                console.log("score: ", attempt)
                                setScore(attempt.score)
                            })
                    }}
                    className="btn btn-primary col-1">SUBMIT
                </button>

                <br/>
                <br/>
                <button
                    onClick={() => {
                        setShowAttempts(!setShowAttempts)
                    }}
                    className="btn btn-outline-primary col-1">ATTEMPTS
                </button>
                {
                    showAttempts &&
                    attempts.map((attempt) => {
                        return (
                            <li className="list-group-item">
                                You score in this attempt: {attempt.score}
                            </li>
                        )
                    })
                }
            </div>
            <br/>
        </div>
    )
}

export default Quiz