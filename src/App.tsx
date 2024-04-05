import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let IsStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName2: Function;

let printName3: (name:string) => never;

function printName(name: string){
  console.log(name);
}

type Person = {
  name: string,
  age: number,
}

interface Guy extends Person {
  a: string,
  b: number,
}

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
