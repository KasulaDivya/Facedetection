import { useState } from "react"

function Datas(){
    const[current,setdata]=useState("")

    const submit = ()=>{
        setdata()
    }

    return(
       <>
        <input type="text"
        value={current}></input>
        <button onClick={submit}>submit</button>
        </>
    )
}