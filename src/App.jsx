import { useState } from "react";
import Hooks from "./Hook";
import Boller from "./Boller";
import Batsman from "./Batsman";
// import Boller form "./Boller";


import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handlear() {
    alert("Click on The Button");
  }
  
  const clientClick = (num) => {
    let count = num + 10;
    alert(`Total Counts ${count}`);
  };

  return (
    <>
      <h2>React Core Concepet Part Tow</h2>
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
