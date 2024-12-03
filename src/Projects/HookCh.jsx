import React, { useCallback, useState } from "react";
import "./Hooks.css";
const HookCh = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count > 0 ? count - step : 0);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h1>ADVANCED COUNTER CHALLENGE</h1>
      <p>
        count: <span>{count}</span>
      </p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={increment} disabled={count>=100} >Increment</button>
      <button onClick={decrement} disabled={count<=0} >Decrement</button>
      <button onClick={Reset}  >Reset</button>
    </div>
  );
};

export default HookCh;
