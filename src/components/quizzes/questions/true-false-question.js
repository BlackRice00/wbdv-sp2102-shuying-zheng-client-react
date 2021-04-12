import React from "react";
import {useState} from 'react'

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [T, setT] = useState(false)
    const [F, setF] = useState(false)
    const [chosen, setChosen] = useState(false)
    return (
        <div>
            <h5>
                {question.question}
                {chosen &&
                <span>
                    {
                        yourAnswer === question.correct &&
                        <span className="text-success">
                            <i className="fas fa-check fa-2x"></i>
                        </span>
                    }
                    {
                        yourAnswer !== question.correct &&
                        <span className="text-danger">
                            <i className="fas fa-times fa-2x"></i>
                        </span>
                    }
                </span>}
            </h5>

            <ul className="list-group">
                <li className={`list-group-item 
                ${chosen && "true" === question.correct ? 'list-group-item-success' : ''} 
                ${chosen && "true" !== question.correct && yourAnswer === "true" ? 'list-group-item-danger' : ''}`}>
                    <label><input type="radio" name={question._id} onClick={() => {
                        setYourAnswer("true")
                    }}/> True</label>
                </li>
                <li className={`list-group-item 
                ${chosen && "false" === question.correct ? 'list-group-item-success' : ''} 
                ${chosen && "false" !== question.correct && yourAnswer === "false" ? 'list-group-item-danger' : ''}`}>
                    <label><input type="radio" name={question._id} onClick={() => {
                        setYourAnswer("false")
                    }}/> False</label>
                </li>
            </ul>


            {/*<label><input type="radio" name={question._id}/> True</label>*/}
            {/*<label><input type="radio" name={question._id}/> False</label>*/}

            <hr/>
            {/*<p>*/}
            {/*    Your answer: {yourAnswer}*/}

            {/*</p>*/}
            <div className={"row"}>
                <button className={"btn btn-success"} onClick={() => setChosen(true)}>Grade</button>
            </div>
        </div>
    )
}

export default TrueFalseQuestion