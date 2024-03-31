import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"
import Homescreen from "./homescreen"
import About from "./about"
//import Contactscreen from "./contact"
import Buttons from "./buttonscreen"
import Invalidscreen from "./invalidscreen"
import { createContext, useState } from "react"
import Login from "./Login"
import Usereducer from "../hooks/usereducer/usereducer"
import ContactScreens from "./contactScreen"
import Thankyou from "./Thankyou"
//import Controlled from "../components/controlled"
//import Errorscreen from "./errorscreen"


export const Messagesender = createContext()

const Aa=()=>{
    const [message,setmessage]=useState("Hyyyy..!")
    const [msg,setmsg]=useState(false)

   const  tt=()=>{
        setmessage("Have a nice day..!")
    }
    const gg=()=>{
        setmsg(true)
        

    }

    return(
        <BrowserRouter>
        <Messagesender.Provider
          value={{
             a:message,
             b: tt,
             c:gg,
          }}
          >
        <Routes>
            {
                  true ?
                <>
                <Route path="/" Component={Homescreen}></Route>
                <Route path="/about" Component={About}></Route>
                <Route path="/contacts" Component={ContactScreens}></Route>
                <Route path="/category/:id" Component={Buttons}></Route>
                <Route path="*" Component={Invalidscreen}></Route>
                <Route path="/login" Component={Login}></Route>
                <Route path="/setting" Component={Usereducer}></Route>
                <Route path="/thankyou" Component={Thankyou}></Route>
                </>
                :
                <>
                <Route path="/" Component={Homescreen}></Route>
                <Route path="/login" Component={Login}></Route>
                <Route path="*" Component={Invalidscreen}></Route>
                </>
            }
        
           
            
            
        </Routes>
        </Messagesender.Provider>
        </BrowserRouter>
    )
}
export default Aa