//import Useeffects from "../hooks/cardshooks"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import video from './vedio.mp4'

import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Spinnertree from '../spinners/Loader';

const Buttons=()=>{
   const {id}= useParams()
   const [Productdetails,setdatas]=useState({})
   const navigate =useNavigate()

   useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${id}`)
       .then((result)=>{
        setdatas(result.data)

       })
   },[id])

   const yy=(value)=>
   {
    return Object.keys(value)
   }

   const hh=()=>{

    navigate(`/about`)
   }
   

    return(
          yy(Productdetails) ?
          <>
            <div style={{display:"flex",justifyContent:"space-around",backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/002/497/860/large_2x/online-shopping-store-with-mobile-application-digital-marketing-and-sale-banner-background-free-vector.jpg')",width:"1500px",height:"800px"}}>
            <div style={{marginTop:"5%",display:"inline-block"}}>
            <Card style={{ width: '18rem',backgroundColor:"skyblue" }}>
          <Card.Img variant="top" src={Productdetails.image} width="150" height="200"/>
          <Card.Body>
            <Card.Title>{Productdetails.title}</Card.Title>
            <Card.Text>
              {Productdetails.description}<br></br><br></br>
              Price:{Productdetails.price}rs/-
            </Card.Text>
            <Button variant="primary" onClick={hh}>Go back</Button>
          </Card.Body>
        </Card>
            </div>
            <div style={{display:"inline-block",borderRadius:"10px"}}>
                <video controls width={400} height={300} autoPlay style={{borderRadius:"20px"}}>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
            </div>
            </>
             
         
             :
             <center><Spinnertree></Spinnertree></center>
            
          
        
       
    )
}

export default Buttons