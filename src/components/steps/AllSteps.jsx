
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";
import Step from '../step/Step'
import {HooksClick} from '../hooks/hooks'


import  {Link} from "react-router-dom";

function AllSteps () {
  const [showStep, setShowStep] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const {activeStep, setActiveStep} =  React.useContext(HooksClick);
  // Функция для отображения компонента Step и скрытия кнопки после первого нажатия
  const handleShowStep = () => {
    setShowStep(true);
    setFirstClick(false);
  };

  return (
    <Fragment>
    
      {firstClick && ( 
        <Fragment>
       <h2> Начни Эту хуйню</h2>
        <button onClick={handleShowStep}>
         Вперед
        </button>
        </Fragment>
      )}

   
      {showStep && <Step activeStep={activeStep}/>}
    </Fragment>
  );
}

export default AllSteps

