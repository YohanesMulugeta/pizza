import React from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  const [step, setStep] = React.useState(1);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <div className="message">{messages[step - 1]}</div>

      <div className="buttons">
        <button
          onClick={() => step <= 1 || setStep(step - 1)}
          //   disabled={step <= 1 ? true : false}
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
        >
          Previous
        </button>
        <button
          onClick={() => step >= messages.length || setStep(step + 1)}
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
