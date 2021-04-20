import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

// const Question = ({question}, isGraded, setQuestionsWithAns) => {
const Question = (props) => {
    console.log("i'm in question.js: ", props.setQuestionsWithAns)
    console.log("i'm in question.js: ", props.question)
    return(
        <div>
            {
                props.question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={props.question}
                                   isGraded = {props.isGraded}
                                   setQuestionsWithAns = {props.setQuestionsWithAns}/>
            }
            {
                props.question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={props.question}
                                        isGraded = {props.isGraded}
                                        setQuestionsWithAns = {props.setQuestionsWithAns}/>
            }
        </div>
    )
}

export default Question