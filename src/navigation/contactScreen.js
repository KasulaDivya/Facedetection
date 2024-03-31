import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactScreens() {
   const navi= useNavigate()

   const yy=()=>{
    navi("/thankyou")
   }
  return (
    <>
    <center><h1 style={{backgroundColor:"purple",color:"white"}}>𝒸𝑜𝓃𝓉𝒶𝒸𝓉 𝓊𝓈..!</h1>
    <h2>𝒲𝑒 𝒶𝓇𝑒 𝒶𝓁𝓌𝒶𝓎𝓈 𝒽𝑒𝓇𝑒 𝓉𝑜 𝒽𝑒𝓁𝓅 𝓎𝑜𝓊..!</h2></center>
    <div style={{display:'flex',justifyContent:"center",backgroundImage:"url('https://i.redd.it/q3z1k0zc7umy.gif')",height:"800px",backgroundSize:"cover",width:"1650px"}}>
       
        <forms style={{}}>
        <input type='text' placeholder='username' style={{marginRight:"20px",marginTop:"200px", width:"350px",borderRadius:"10px"}}/>
        <input type='text'placeholder='password'style={{width:"350px",borderRadius:"10px"}}/>
        <br></br>
        <div style={{marginTop:"40px"}}>
        <textarea style={{width:"750px",height:"200px",backgroundColor:"transparent",backdropFilter:"blur(10px)",color:"white",border:"none"}}>type message</textarea>
        <br></br>
        <br></br>
        <center><button style={{height:"30px",borderRadius:"10px",backgroundColor:"pink"}} onClick={yy}>Send message</button></center>
        </div>
        </forms>
    </div>
    
    </>
  )
}

export default ContactScreens