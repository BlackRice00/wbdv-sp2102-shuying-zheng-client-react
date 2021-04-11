import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        fetch("http://localhost:4000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return(
                            <table className="table-striped col-3">
                                <tr>
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                        {quiz.title}
                                    </Link>
                                    <button className="btn-primary float-md-right">
                                        <Link className="text-white" to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                            start
                                        </Link>
                                    </button>
                                </tr>
                                <br/>
                            </table>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;