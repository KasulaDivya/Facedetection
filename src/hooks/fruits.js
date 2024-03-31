import { useState } from "react";
//import { Placeholder } from "react-bootstrap";


const Fruites=()=>{
    const[fruits,setnewone]=useState(["mango","banana","pineapple","orange"])
    const[newfru,setnewfru]=useState("")


    const Addfru=()=>{
       if(newfru !== ""){
        const n =[...fruits,newfru]
        setnewone(n)
        setnewfru("")
       }
    }

    return(
        <>
        <h1>Fruites List</h1>
        <ol>
            {
                fruits.map((v)=>{return <li>{v}</li>})
    
            }
        </ol>
        <div>
            <input type="text" value={newfru} onChange={(e)=>setnewfru(e.target.value)} placeholder="enter a fruite"></input>
        </div>
        <button onClick={Addfru}>Add fruites</button>
        </>
    )
}

export default Fruites