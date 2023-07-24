
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";
import { HooksClick } from '../../components/hooks/hooks'
import Input from '../input/Input'

function AllSteps () {
  const [activeStep, setActiveStep] =  React.useContext(HooksClick)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [allAnswersQuestions, setAllAnswersQuestions] = useState([]);
  
  const [allButtonsClicked, setAllButtonsClicked] = useState(false);
  const { que, text } = ansQue[activeQuestion];
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const onClickNext = () => {
    setAllButtonsClicked(false);
    
    setTimeout(() => {
      setAllAnswersQuestions((prevAnswers) => [...prevAnswers, { question: que, text: selectedAnswer }]);

      if (activeQuestion === ansQue.length - 1) {
      setAllButtonsClicked(true);
    }
      else{
        setActiveQuestion((prev) => prev + 1)
        setSelectedAnswer(null);
      }
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
   ) : (
      <>
        <h2 className="questions">{que}</h2>
        
        <div className="answers">
          {text.map((item) => (
            <label key={item.id}>
            <Input
              type="radio"
              name="answer"
              value={item}
              checked={selectedAnswer === item}
              onChange={handleRadioChange}
            />
            {item}
          </label>
          ))}
        </div>
        <div className="answers"><button onClick={() => onClickNext()}>Далее</button></div>
        
      </>

    )}

   

  </Fragment>
);
}
export default AllSteps

