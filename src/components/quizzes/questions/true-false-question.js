import React from "react";
import {useState} from 'react'

// const TrueFalseQuestion = ({question}, isGraded, setQuestionsWithAns) => {
const TrueFalseQuestion = (props) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [T, setT] = useState(false)
    const [F, setF] = useState(false)
    const [chosen, setChosen] = useState(props.isGraded)
    return (
        <div>
            <h5>
                {props.question.question}
                {chosen &&
                <span>
                    {
                        yourAnswer === props.question.correct &&
                        <span className="text-success">
                            <i className="fas fa-check fa-2x"></i>
                        </span>
                    }
                    {
                        yourAnswer !== props.question.correct &&
                        <span className="text-danger">
                            <i className="fas fa-times fa-2x"></i>
                        </span>
                    }
                </span>}
            </h5>

            <ul className="list-group">
                <li className={`list-group-item 
                ${chosen && "true" === props.question.correct ? 'list-group-item-success' : ''} 
                ${chosen && "true" !== props.question.correct && yourAnswer === "true" ? 'list-group-item-danger' : ''}`}>
                    <label><input type="radio" name={props.question._id} onClick={() => {
                        setYourAnswer("true")
                        props.setQuestionsWithAns(Object.assign({},props.question,{answer: "true"}))
                    }}/> True</label>
                </li>
                <li className={`list-group-item 
                ${chosen && "false" === props.question.correct ? 'list-group-item-success' : ''} 
                ${chosen && "false" !== props.question.correct && yourAnswer === "false" ? 'list-group-item-danger' : ''}`}>
                    <label><input type="radio" name={props.question._id} onClick={() => {
                        setYourAnswer("false")
                        props.setQuestionsWithAns(Object.assign({},props.question,{answer: "false"}))
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