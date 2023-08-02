import "../answerFinal/answers.scss"
import ansQue from "../../arr.json";
import {  Fragment} from "react";
import React from "react";
import { HooksClick } from "../../hooks/hooks"
import  {Link} from "react-router-dom";


function Answers ( { goToMainPage, activeQuestion, allAnswersQuestions, setAllAnswersQuestions }){

  
  const { que, text } = ansQue[activeQuestion];
  const allAnswerGoal = () => {
  setAllAnswersQuestions((prevAnswers) => [...prevAnswers, { question: que, text: text }]);
  }
  
  
  return(
     <Fragment >
      {allAnswersQuestions.slice(1).map((selected, index) => (
         <div key={index} className="questionsAnswers">
           <h3>{selected.question}</h3>
           <p>Ответ: {selected.text}</p>
         </div>
        ))}
      <Link to="/"><button onClick={() => goToMainPage()}> Вернуться в начало пути </button> </Link>
  </Fragment>

  )
 

}

export default Answers