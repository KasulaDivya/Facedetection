import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinnertree from "../spinners/Loader";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./styles.css"

const Useeffects = () => {
    const [datas, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((result) => {
            setdata(result.data)
        })
    }, []);

    return (
        <>
            <center><h1 style={{backgroundColor:"skyblue",height:"70px"}}>𝓹𝓻𝓸𝓭𝓾𝓬𝓽𝓼</h1></center>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" ,backgroundImage:"url('https://images.expothemes.com/smoke/images/smoke-windows-theme-13-hd.jpg')"}}>
                {
                    datas.length > 0 ?
                        datas.map((e) => (
                            <div key={e.id} style={{ margin: "10px" }}>
                                <Card style={{ width: '18rem', backgroundColor: "transparent" }} className="cardhover" key={e.id}>
                                    <center><Card.Img variant="top" src={e.image} style={{ width: '100px', height: '100px' }} /></center>
                                    <Card.Body>
                                        <Card.Title style={{ color: "white" }}>{e.category}</Card.Title>
                                        <Card.Text style={{ color: "white" }}>
                                            {e.title}
                                        </Card.Text>
                                    
                                          <center><Button style={{ width: "80px", height: "30px", borderRadius: "5px" }}><Link to={`/category/${e.id}`} style={{color:"white",textDecoration:"none"}}>More</Link></Button></center>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                        )) :
                        <Spinnertree />
                }
            </div>
        </>
    )
}

export default Useeffects;
