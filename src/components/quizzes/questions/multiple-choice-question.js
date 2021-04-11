import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [chosen, setChosen] = useState(false)
    const [answerCorrect, setAnswerCorrect] = useState(false)
    return(
        <div>
            <h5>
                {question.question}
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
                    question.choices.map((choice) => {
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
                ${chosen && choice === question.correct ? 'list-group-item-success' : ''} 
                ${chosen && choice !== question.correct && choice === yourAnswer ? 'list-group-item-danger' : ''}`}>
                                <label>
                                    <input type="radio" name={question._id} onClick={() => {
                                        setYourAnswer(choice)
                                        setAnswerCorrect(choice === question.correct)
                                    }}/>
                                    {choice}
                                </label>
                                {chosen && choice === question.correct &&
                                <i className="float-right fas fa-check fa-2x"></i>}

                                {chosen && choice !== question.correct && choice === yourAnswer &&
                                <i className="float-right fas fa-times fa-2x"></i> }
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <div className={"row"}>
                <button className={"btn btn-success"} onClick={() => setChosen(true)}>Grade</button>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion