import React from 'react'
//import BasicExample from '../../react-boostrap/accordien1'
import { useReducer } from 'react';
//import BasicExample from '../../react-boostrap/accordien1';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

function reducerfunction(state,action){

    switch(action.type){
        case "CHANGE_VOLUME":
            return {...state,volume:"off"}
        case "DECRE_VOLUME":
            return {...state,volume:"on"}
        case "CHANGE_BLUE":
            return {...state,bluetooth:"off"}
        case "CHANGE_BLUEOFF":
            return {...state,bluetooth:"on"}
        default :
        return state
    }

}

const initialsytate={
      volume:"on",
      bluetooth:"on"
}

function Usereducer() {

    const navigate=useNavigate()
    const[currentstate,dispatch]=useReducer(reducerfunction,initialsytate)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navi=()=>{
    navigate("/")
  }
    const changevol=()=>{
        dispatch({
            type:"CHANGE_VOLUME"
        })
    }
    const changevols=()=>{
        dispatch({
            type:"DECRE_VOLUME"
        })
    }
    const changeblueon=()=>{
        dispatch({
            type:"CHANGE_BLUE"
        })
    }
    const changeblueoff=()=>{
        dispatch({
            type:"CHANGE_BLUEOFF"
        })
    }

  return (
    <>
    <div style={{backgroundImage:"url('https://tse4.mm.bing.net/th?id=OIP.Qal65pRRDE4aWymiyxowAQHaEK&pid=Api&P=0&h=180')",position:"relative", height:"800px",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"1500px"}}>
    <button onClick={navi} style={{backgroundColor:"crimson",borderRadius:"10px",width:"150px",marginTop:"20px"}}>Back Home</button>
        <center><h1>𝘴𝘦𝘵𝘵𝘪𝘯𝘨𝘴</h1></center>
        <br></br>
        <br></br>
    <h3>Volume Setting : {currentstate.volume}</h3>
    <button onClick={changevol}  style={{backgroundColor:"pink",borderRadius:"10px",width:"80px",marginRight:"7px"}}>off</button>
    <button onClick={changevols} style={{backgroundColor:"pink",borderRadius:"10px",width:"80px",marginRight:"7px"}}> on</button>
    <br></br>
    <br></br>
    <h3>Bluetooth Setting : {currentstate.bluetooth}</h3>
    <button onClick={changeblueoff} style={{backgroundColor:"pink",borderRadius:"10px",width:"80px",marginRight:"7px"}}>on</button>
    <button onClick={changeblueon} style={{backgroundColor:"pink",borderRadius:"10px",width:"80px",marginRight:"7px"}}>off</button>
    <br></br>
    <br></br>
    <br></br>
    <h3>Help Settings</h3>
    <br></br>
    <Button variant="primary" onClick={handleShow} >
        Help
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:"black"}}>
        <Offcanvas.Header closeButton style={{backgroundColor:"orange"}}>
          <Offcanvas.Title style={{color:"black"}}>Help setting</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{color:"white"}}>
            <ul>
          <li> Account setting</li>
          <li> Logins </li>
          <li> Authentication</li>
          <li> change password</li>
           </ul>
          Help:
          “Hello there! Thank you for signing up for a [Company Name] membership. As a token of our appreciation, here’s a special discount: [Discount Amount] off your first purchase. Use code: WELCOME123 at checkout. Msg & data rates may apply. Msg frequency varies. Reply HELP for help; STOP to cancel.”
        </Offcanvas.Body>
      </Offcanvas>
      <br></br>
      <br></br>
      
    </div>
    </>
  )
}

export default Usereducer