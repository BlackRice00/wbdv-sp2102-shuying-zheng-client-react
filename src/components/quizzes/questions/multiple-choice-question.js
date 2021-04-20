import React, {useState} from "react";
// const MultipleChoiceQuestion = ({question}, isGraded, setQuestionsWithAns) => {
const MultipleChoiceQuestion = (props) => {
    const [yourAnswer, setYourAnswer] = useState("")
    // click on grade -> the answer is chosen and unchangeable
    const [chosen, setChosen] = useState(props.isGraded)
    const [answerCorrect, setAnswerCorrect] = useState(false)
    return(
        <div>
            <h5>
                {props.question.question}
                {chosen &&
                <span>
                    {
                        answerCorrect &&
                        <span className="text-success">
                            <i className="fas fa-check fa-2x"></i>
                        </span>
                    }
                    {
                        !answerCorrect &&
                        <span className="text-danger">
                            <i className="fas fa-times fa-2x"></i>
                        </span>
                    }
                </span>}
                {/*{*/}
                {/*    question.correct === yourAnswer &&*/}
                {/*    <i className="fas fa-check"></i>*/}
                {/*}*/}
                {/*{*/}
                {/*    question.correct !== yourAnswer &&*/}
                {/*    <i className="fas fa-times"></i>*/}
                {/*}*/}
            </h5>

            <ul className="list-group">
                {
                    props.question.choices.map((choice) => {
                        return(
                            // <li className={`list-group-item
                            // ${chosen && yourAnswer === question.correct ? 'list-group-item-success' : ''}`}>
                            //     <label><input
                            //         onClick={() => {
                            //             setChosen(true)
                            //             setYourAnswer(choice)
                            //         }}
                            //         type="radio"
                            //         name={question._id}/> {choice}
                            //     </label>
                            // </li>
                            <li className={`list-group-item 
                ${chosen && choice === props.question.correct ? 'list-group-item-success' : ''} 
                ${chosen && choice !== props.question.correct && choice === yourAnswer ? 'list-group-item-danger' : ''}`}>
                                <label>
                                    <input type="radio" name={props.question._id} onClick={() => {
                                        setYourAnswer(choice)
                                        setAnswerCorrect(choice === props.question.correct)
                                        props.setQuestionsWithAns(Object.assign({},props.question,{answer:choice}))
                                    }}/>
                                    {choice}
                                </label>
                                {chosen && choice === props.question.correct &&
                                <i className="float-right fas fa-check fa-2x"></i>}

                                {chosen && choice !== props.question.correct && choice === yourAnswer &&
                                <i className="float-right fas fa-times fa-2x"></i> }
                            </li>
                        )
                    })
                }
            </ul>
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

export default MultipleChoiceQuestion