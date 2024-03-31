import React from 'react'
import { useNavigate } from 'react-router-dom'

function Invalidscreen() {
const navigate=useNavigate()

    const gg=()=>{
      navigate("/")
    }
  return (
    <>
    <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="notfound" width={1500} height={800} style={{position:"absolute"}}></img>
    <button onClick={gg} style={{position:"relative",backgroundColor:"pink",padding:"8px",borderRadius:"10px",margin:"10px"}}>Go to Home</button>
    </>
  )
}

export default Invalidscreen