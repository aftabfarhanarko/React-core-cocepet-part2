import { Suspense, useState } from "react";
import Hooks from "./Hook";
import Boller from "./Boller";
import Batsman from "./Batsman";
import User from "./User";
import Person from "./Person";
import Todoes from "./Todoes";
import "./App.css";

// Api React Normal Vabe
const featchData =  fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json());


const feacthPerson = async () => {
  const fetac = await fetch("https://jsonplaceholder.typicode.com/users")
  const thean = await fetac.json();
  return thean;
}


// // Post
 const myPost = async () =>{
  const myFeatch = await fetch('https://jsonplaceholder.typicode.com/posts')
  return myFeatch.json();
 }

// Todo

const myTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json();
}



function App() {
  function handlear() {
    alert("Click on The Button");
  }

  const clientClick = (num) => {
    let count = num + 10;
    alert(`Total Counts ${count}`);
  };

  const totdu = myTodo();
  const personas = feacthPerson();
  return (
    <>
      <h2>React Core Concepet Part Tow</h2>
        <Suspense fallback={<p>W8 Loding a Todo....</p>}>
           <Todoes totdu={totdu}></Todoes>
        </Suspense>

      {/* <Suspense fallback={<h2>Loding....🤺</h2>}>
        <User featchData={featchData}></User>
      </Suspense> */}

      {/* <Suspense fallback={<h1>I am Weating For my Firened Message...</h1>}>
      <Person personas={personas}></Person> </Suspense> */}

      <Batsman></Batsman>
      <Boller></Boller>
      <Hooks></Hooks>

      {/* Add Event Hendlear System 1 */}
      <button onClick={handlear}>Click ME</button>

      {/* Add Event Hendlear System 2 use arrow functions */}
      <button onClick={() => alert("Clicki OnClick Arrow Functions")}>
        Click Me2
      </button>
      
      <button onClick={() => clientClick(10)}>My Button</button>
    </>
  );
}

export default App;
