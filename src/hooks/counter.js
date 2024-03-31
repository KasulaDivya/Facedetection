import { useState } from "react";

const User=()=>{
    const [counter,setcounter]=useState(0)

    const Statehandle=(value)=>{
        switch(value){
            case "increment":
            setcounter(counter+1)
            break;
            case "decrement":
            setcounter(counter-1)
            break;
            case "reset":
            setcounter(0)
            break;
            default :
            break;
        }
    }
    return(
        <>
        <h1>counter</h1>
        <h2>{counter}</h2>
        <button onClick={()=>Statehandle("increment")}>Increment</button>
        <button onClick={()=>Statehandle("decrement")}>decrement</button>
        <button onClick={()=>Statehandle("reset")}>reset</button>
        </>
    )
}

export default User