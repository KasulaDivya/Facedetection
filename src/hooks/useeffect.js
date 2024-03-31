import { useEffect, useState } from "react";
import axios from "axios";
import Spinnertree from "../spinners/Loader";




const Useeffect=()=>{

    var tt={
        width:200,
        height:100,
    }
    const td = {
        border: '2px solid black',
        textAlign: 'left',
        padding: '8px',
    };
    
    
    
const [datas,setdata]=useState([])



    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((result)=>{
            setdata(result.data)
        })
    },[])
    return(
        <>
        <center><h1>Products</h1>
        
            <table>
                {
                    datas.length>0?
                    <tr>
                        <td style={td}>ID</td>
                        <td style={td}>Image</td>
                        <td style={td}>Title</td>
                        <td style={td}>category</td>
                    </tr>:
                    null
                }
                
                {

                   datas.length>0?
            datas.map((e)=>{
                return(
        
            <tr>
                <td style={td}>{e.id}</td>
                <td style={td}><img src={e.image} alt="img" style={tt}></img></td>
                <td style={td}>{e.title}</td>  
                <td style={td}>{e.category}</td>
            </tr>
       
                )
              }):
              <center><Spinnertree></Spinnertree></center>
            }
             </table>
        
        </center>
        </>
    )
}

export default Useeffect;