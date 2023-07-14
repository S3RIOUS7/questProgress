
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";
import { HooksClick } from '../../components/hooks/hooks'

function AllSteps () {
  const [activeStep, setActiveStep, progress, setProgress, steps, currentIndex, setCurrentIndex, buttonClicks, setButtonClicks, progData] =  React.useContext(HooksClick)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [allButtonsClicked, setAllButtonsClicked] = useState(false);
  const { que, text } = ansQue[activeQuestion];

  const onClickNext = () => {
    setAllButtonsClicked(false);
    
    setTimeout(() => {
      if (currentIndex < progData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setButtonClicks(buttonClicks + 1);
    }
      if (activeQuestion === ansQue.length - 1) {
      setAllButtonsClicked(true);}
      else{setActiveQuestion((prev) => prev + 1)}
      setActiveStep(activeStep + 1);
      setProgress((activeStep + 1) / steps.length * 100 
      
      );}, 500)
    

}
  return (

    <Fragment>

    {allButtonsClicked ? (
      <div className="wellDone">Ты молодец!</div>
    ) : (
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

