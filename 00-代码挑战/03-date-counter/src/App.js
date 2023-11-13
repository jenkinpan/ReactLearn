import { useState } from "react";
import "./styles.css";

export default function App() {
  function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    function handleReset() {
      setCount(0);
      setStep(1);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>Step:{step}</span>
        </div>

        <div>
          <button onClick={() => setCount((s) => s - step)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={() => setCount((s) => s + step)}>+</button>
        </div>

        <p>
          <span>
            {count === 0
              ? `Today is `
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago is `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {step === 1 && count === 0 ? null : (
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    );
  }
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
