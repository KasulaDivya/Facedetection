import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Ids from "./id"




function Apicalls(){

    const [datas,setdata]=useState([])



    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((result)=>{
            setdata(result.data)
        })
    },[])
    return(
        <>
      {
            datas.map((e)=>{
                return(
        
            <>
                <h1>{e.id}</h1>
                
                <button><Link to={Ids}>button</Link></button>
       </>
                )
              })
     }
            
        </>
    )
}


export default Apicalls