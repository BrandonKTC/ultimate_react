import React, { useState } from "react";
import Button from "./components/Button";
import StepMessage from "./components/StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1); # BAD practice
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // BAD PRACTICE
    // if (step < messages.length) setStep(step + 1);
    if (step < messages.length) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>🥲 Previous</span>
            </Button>
            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              <span>Next 😁</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

export default App;
