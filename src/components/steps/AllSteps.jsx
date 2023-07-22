
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";
import { HooksClick } from '../../components/hooks/hooks'

function AllSteps () {
  const [activeStep, setActiveStep] =  React.useContext(HooksClick)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [allAnswersQuestions, setAllAnswersQuestions] = useState([]);
  
  const [allButtonsClicked, setAllButtonsClicked] = useState(false);
  const { que, text } = ansQue[activeQuestion];

  const onClickNext = () => {
    setAllButtonsClicked(false);
    
    setTimeout(() => {
      
      setAllAnswersQuestions((prevAnswers) => [...prevAnswers, { question: que, text }]);
      

      if (activeQuestion === ansQue.length - 1) {
      setAllButtonsClicked(true);
    }
      else{setActiveQuestion((prev) => prev + 1)}
      setActiveStep(activeStep + 1);
     }, 500)
}

const reloadPage = () => {
  window.location.reload()
}
  return (

    <Fragment>

    {allButtonsClicked ? (
       <div className="wellDone">
       Ты молодец!
       <div>
         {allAnswersQuestions.map((selected, index) => (
           <div key={index} className="questionsAnswers">
             <h3>{selected.question}</h3>
             <p>Ответ: {selected.text}</p>
            
           </div>
         ))}
       </div>
        <button onClick={() => reloadPage()}>Начни заново</button>
     </div>
   )  : (
      <>
        <h2 className="questions">{que}</h2>
        <div className="answers">
          {text.map((item) => (
            <button key={item.id} onClick={() => onClickNext()}>
              {item}
            </button>
          ))}
        </div>
        
      </>
    )}

   

  </Fragment>
);
}
export default AllSteps

