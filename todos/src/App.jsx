import React from 'react';
import './App.css'; 
import Theater from './Component/Theater';

function App() {
  return (
    <div className="app">
      <h1>Book My Show - Select Seats</h1>
      <hr />
      <Theater />
    </div>
  );
}

export default App;