import React from 'react';
import './App.css';

let name: string;
let age: number | string;

age = "twentytwo";

let IsStudent: boolean;
let hobbies: string[];
let role: [number, string];

/*type Person = {
  name: string;
  age?: number; //? lo hace opcional
};

let person: Person = {
  name: "Boris",
  age: 22,
};*/

function App() {
  return (
    <div className="App">Hello world!</div>
  );
}

export default App;
