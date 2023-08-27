import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './clock/clock';

function App() {
  return (
    <div className="App">
      <Clock mode={'digital'} />
    </div>
  );
}

export default App;
