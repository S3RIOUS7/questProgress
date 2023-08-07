
import './modalWindow.scss'
import { Fragment } from "react";
import {  useNavigate } from 'react-router-dom';

function ModalWindow() {
  const navigate = useNavigate();
  const goToAnswers = () =>{
    navigate('/Answers')
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

     <button onClick={() => reloadPage()}>Начать заново</button>
     <button onClick={() => goToAnswers()}>Получить результаты</button>
     

     </div>

   </div>
  </Fragment>
)

}
export default ModalWindow