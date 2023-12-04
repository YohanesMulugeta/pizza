import React from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  const [step, setStep] = React.useState(1);

  //   next handler
  const handleNext = () => {
    step < 3 && setStep(step + 1);
  };

  //   previous button handler
  const handlePrevious = () => {
    step > 1 && setStep(step - 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>

      <div className="message">
        Step-{step}: {messages[step - 1]}
      </div>

      <div className="buttons">
        <button
          onClick={handlePrevious}
          //   disabled={step <= 1 ? true : false}
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          //   disabled={step >= messages.length ? true : false}
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
