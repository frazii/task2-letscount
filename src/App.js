import React from 'react';
import './App.css';

const App = () => {
  const count = 0;

  return (
    <div className="App">
      <button id="decrement-button">−</button>
      <div id="number">{count}</div>
      <button id="increment-button">+</button>
    </div>
  );
};

export default App;
