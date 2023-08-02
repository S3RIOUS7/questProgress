
import AllSteps from "../../steps/AllSteps";
import Header from "../../header/Header";
import { Fragment } from "react";


function Main ( props ) {
  const { goToMainPage, 
    activeStep, 
    setActiveStep, 
    activeQuestion, 
    setActiveQuestion, 
    allAnswersQuestions, 
    setAllAnswersQuestions, 
    selectedAnswer,
     setSelectedAnswer, 
     allButtonsClicked,
      setAllButtonsClicked, 
      buttonClicked,
       setButtonClicked } = props;
  return (
   <Fragment>
     <Header activeStep={activeStep}
      setActiveStep={setActiveStep}/>
     <AllSteps 
     goToMainPage={goToMainPage}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      activeQuestion={activeQuestion}
      setActiveQuestion={setActiveQuestion}
      allAnswersQuestions={allAnswersQuestions}
      setAllAnswersQuestions={setAllAnswersQuestions}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      allButtonsClicked={allButtonsClicked}
      setAllButtonsClicked={setAllButtonsClicked}
      buttonClicked={buttonClicked}
      setButtonClicked={setButtonClicked}/>
  </Fragment> 
  );

}
export default Main;