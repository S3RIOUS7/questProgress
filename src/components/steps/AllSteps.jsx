
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
   setAllButtonsClicked(false);
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
  setTimeout(() => {
  setActiveStep(0);
  setActiveQuestion(0);
  setAllAnswersQuestions([]);// обновляю все стейты до первоночальных
  setSelectedAnswer(null);
  setAllButtonsClicked(false)
  setButtonClicked(false);
  }, 500)
}

  return (

    <Fragment>

{allButtonsClicked ? (
      <>
        {modalVisible && (
          <div className="modalOverlay">
            <div className="modalContent">
              <h3>Ты молодец!</h3>
              <div>
                <div className="circleCompleteGreen"></div>
                {/* {allAnswersQuestions.slice(1).map((selected, index) => (
                  <div key={index} className="questionsAnswers">
                    <h3>{selected.question}</h3>
                    <p>Ответ: {selected.text}</p>
                  </div>
                ))} */}
              </div>
              <button onClick={() => reloadPage()}>Начни заново</button>
              <button onClick={() => reloadPage()}>Получить результаты</button>
            </div>
          </div>
        )}
      </>
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

