
import './modalWindow.scss'
import React from "react";
import { Fragment } from "react";
import {  useNavigate } from 'react-router-dom';
import { HooksClick } from '../hooks/hooks';
import Button from '../button/Button';

function ModalWindow() {
  const {setActiveModal} =  React.useContext(HooksClick);
  const navigate = useNavigate();
  
  const goToAnswers = () =>{
    navigate('/Answers')
    setActiveModal(false)
  }
  const reloadPage = () => {
    window.location.reload()
  }
return(

  <Fragment>
   <div className='modal-container'>
     <div className='modal-content'>
     <h2>Ты молодец</h2>
     <div className='circleCompleteGreen'></div>

     <Button onClick={reloadPage}>Начать заново</Button>
     <Button onClick={ goToAnswers}>Получить результаты</Button>
     

     </div>

   </div>
  </Fragment>
)

}
export default ModalWindow