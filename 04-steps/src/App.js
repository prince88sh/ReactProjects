import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  // const step = 1;

  const [step, setStep] = useState(1);
  /*REMEBER usestate is an arra [variable, and its fucntions]
  [
    0:1,
    1:f()
  ]
    */
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}> 2</div>
            <div className={step >= 3 ? "active" : ""}> 3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => {
              //   alert("clciked on previous");
              // }} this is the one way to use handle Event function
              onClick={handlePrevious}
            >
              PREVIOUS
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              NEXT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
