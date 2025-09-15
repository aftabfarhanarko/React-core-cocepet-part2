import { useState } from "react"

export default function Hooks (){
   const [count, setCount] = useState(0);

   let haldelUbdeat = () =>{
    let newCountsUbdeat = count+1;
    setCount(newCountsUbdeat);
   }

    const stylesa={
        border:"2px solid red",
        padding:"20px",  
        marginTop:"80px"     
    }

    return(
        <div style={stylesa}>
            <h2>Count : {count}</h2>
            <button onClick={haldelUbdeat}>Add Click</button>
        </div>
    )
}