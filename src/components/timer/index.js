import React, { useEffect, useRef, useState } from "react";
import "./index.css";
export default function Timer({ initial }) {
  const [count, setCount] = useState(Number(initial));
  const intervalRef = useRef(null);

  useEffect(() => {
    if (count > 0) {
      intervalRef.current = setInterval(() => {
        setCount((prevState) => {
          if (prevState === 1) {
            clearInterval(intervalRef.current);
          }
          return prevState - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [count]);

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <div className="mt-100 layout-column align-items-center justify-content-center">
      <div className="timer-value" data-testid="timer-value">
        {count}
      </div>
      <button onClick={handleStop} className="large" data-testid="stop-button">
        Stop Timer
      </button>
    </div>
  );
}
