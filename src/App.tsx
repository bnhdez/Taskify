import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let IsStudent: boolean;
let hobbies: string[];
let role: [number, string];

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
    </div>
  );
}

export default App;
