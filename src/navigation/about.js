import { useContext } from "react"
import Useeffects from "../hooks/cardshooks"
import { Messagesender } from "./navigation"
import { useNavigate } from "react-router-dom"

const About=()=>{
   const navi= useNavigate()
    const result=useContext(Messagesender)
    console.log(result)
    const yy=()=>{
        navi("/")
    }
    return(
        <>
        <center><h1 style={{backgroundColor:"skyblue"}}>{result.a}</h1></center>
        <button onClick={result.b} style={{borderRadius:"10px",backgroundColor:"pink"}}>click here</button><button style={{borderRadius:"10px",backgroundColor:"pink"}} onClick={yy}>Back Home..!</button>
        <Useeffects></Useeffects>
        </>
    )
}

export default About