import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Timer: {count} seconds</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}

export default App;