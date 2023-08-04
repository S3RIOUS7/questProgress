
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";
import Step from '../step/Step'
import Input from '../input/Input'

import  {Link} from "react-router-dom";

function AllSteps () {
  
  const [modalVisible, setModalVisible] = useState(false);
  
  // const { que, text } = ansQue[activeQuestion];
  
  
  // const handleRadioChange = (event) => {
  //   console.log(event.target.value)
  //   const selectedValue = event.target.value;// event.target.value показывает то что выбрал
  //   setSelectedAnswer(selectedValue)// записывает в переменную
  //   setAllButtonsClicked(false);
  //   setTimeout(() => {
  //     setAllAnswersQuestions((prevAnswers) => [...prevAnswers, { question: que, text: selectedValue }]);//allAnswersQuestions обновляет переменную, добавляя в массив вопросы и ответы
  //     if (activeQuestion === ansQue.length - 1) {
  //       setAllButtonsClicked(true); //последний вопрос
  //       setModalVisible(true);
  //     } else {
  //       setActiveQuestion((prev) => prev + 1);
  //       setSelectedAnswer(null);//сброс переменной чтоб можно было выбрать ответы на вопрос
  //     }// if else проверяет activeQuestion последний ли элемент
  //     setActiveStep(activeStep + 1);// переменная следит за состояние прогрессбара
  //   }, 500);
  // };




  return (

    <Fragment>

    <Step />

  </Fragment>
);
}
export default AllSteps

