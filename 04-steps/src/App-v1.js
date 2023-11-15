import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOPen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  // ! 为后续更新和维护的需求，我们通常对state更新时使用回调函数的形式，而不是直接传入新的值。

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  // 提取出Number组件，减少重复的代码
  const Number = ({ step, number }) => (
    <div className={step >= number ? "active" : ""}>{number}</div>
  );

  // 提取出Button组件，减少重复的代码
  const Button = ({ onClick, children }) => (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );

  // 将样式对象提取到组件外部，避免在每次渲染时都创建新的对象
  const buttonStyle = { backgroundColor: "#7950f2", color: "#fff" };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOPen && (
        <div className="steps">
          <div className="numbers">
            <Number step={step} number={1} />
            <Number step={step} number={2} />
            <Number step={step} number={3} />
          </div>

          <p className="message">
            Step{step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      )}
    </>
  );
}
