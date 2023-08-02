
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";

import Input from '../input/Input'

import  {Link} from "react-router-dom";
function AllSteps (props) {
  const { goToMainPage, activeStep, setActiveStep, activeQuestion, setActiveQuestion,  setAllAnswersQuestions, selectedAnswer, setSelectedAnswer, allButtonsClicked, setAllButtonsClicked, buttonClicked, setButtonClicked } = props;
  

  const { que, text } = ansQue[activeQuestion];
  
  const [modalVisible, setModalVisible] = useState(false);
  
  
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;// event.target.value показывает то что выбрал
    setSelectedAnswer(selectedValue)// записывает в переменную
    setAllButtonsClicked(false);
    setTimeout(() => {
      setAllAnswersQuestions((prevAnswers) => [...prevAnswers, { question: que, text: selectedValue }]);//allAnswersQuestions обновляет переменную, добавляя в массив вопросы и ответы
      if (activeQuestion === ansQue.length - 1) {
        setAllButtonsClicked(true); //последний вопрос
        setModalVisible(true);
      } else {
        setActiveQuestion((prev) => prev + 1);
        setSelectedAnswer(null);//сброс переменной чтоб можно было выбрать ответы на вопрос
      }// if else проверяет activeQuestion последний ли элемент
      setActiveStep(activeStep + 1);// переменная следит за состояние прогрессбара
    }, 500);
  };

const onClickStart = () => {
   setButtonClicked(true);
 
   setTimeout(() => {
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
  goToMainPage()
}

  return (

    <Fragment>

{allButtonsClicked ? (
      <Fragment>
        {modalVisible && (
          <div className="modalOverlay">
            <div className="modalContent">
              <h3>Ты молодец!</h3>
              <div className="circleAnimaited">
                <div className="circleCompleteGreen"/>
              </div>
              <button onClick={() => reloadPage()}>Начни заново</button>
             <Link to="/Answers"  style={{ textDecoration: 'none' }}> <button>Получить результаты</button></Link>
            </div>
          </div>
        )} 
      </Fragment>
    ) : (
      <Fragment>
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
       
      </Fragment>
    )}

  </Fragment>
);
}
export default AllSteps

