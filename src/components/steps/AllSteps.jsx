
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

  const [buttonClicked, setButtonClicked] = useState(false);
  
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedAnswer(selectedValue);
   
    setAllButtonsClicked(false);
    setTimeout(() => {
      setAllAnswersQuestions((prevAnswers) => [...prevAnswers, { question: que, text: selectedValue }]);
      if (activeQuestion === ansQue.length - 1) {
        setAllButtonsClicked(true);
      } else {
        setActiveQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      }
      setActiveStep(activeStep + 1);
    }, 500);
  };

//   const onClickNext = () => {
//     setAllButtonsClicked(false);
    
//     setTimeout(() => {
//       setAllAnswersQuestions((prevAnswers) => [...prevAnswers, { question: que, text: selectedAnswer }]);

//       if (activeQuestion === ansQue.length - 1) {
//       setAllButtonsClicked(true);   Логока по нажатаию на кнопку
//     }
//       else{
//         setActiveQuestion((prev) => prev + 1)
//         setSelectedAnswer(null);
//       }
//       setActiveStep(activeStep + 1);
//      }, 500)
// }
const onClickStart = () => {
      setButtonClicked(true);
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
  setTimeout(() => {
  setActiveStep(0);
  setActiveQuestion(0);
  setAllAnswersQuestions([]);
  setSelectedAnswer(null);
  setAllButtonsClicked(false)
  setButtonClicked(false);
  }, 500)
}

  return (

    <Fragment>

    {allButtonsClicked ? (
       <div className="wellDone">
       Ты молодец!
       <div>
         {allAnswersQuestions.slice(1).map((selected, index) => (
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
       {!buttonClicked && (
            <div className="startButton">
              <button onClick={() => onClickStart()}>{que}</button>
            </div>
          )}
        <h2 className="questions">{activeQuestion > 0 ? que : null}</h2>
        
        <div className="answers">
          {text.map((item) => (
            <label key={item.id}>
             {activeQuestion > 0 ? ( 
        <Input
          type="radio"
          name="answer"
          value={item}
          checked={selectedAnswer === item}
          onChange={handleRadioChange}
        />
      ) : (
        <div>{item}</div> 
      )}
      {item}
          </label>
          ))}
        </div>
       
      </>

    )}

  </Fragment>
);
}
export default AllSteps

