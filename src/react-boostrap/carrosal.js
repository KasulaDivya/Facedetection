import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import Image from '../imgaes/image';

function ControlledCarousel() {
  
  const [newone,setnew]=useState({name:["https://tse2.mm.bing.net/th?id=OIP.iLdqI9f-iJt69mljvB3SsQHaEo&pid=Api&P=0&h=180"],count:0});


  

  const tt=()=>{
    const n=["https://tse2.mm.bing.net/th?id=OIP.JKZMs09dDmqwGPj3iGHUHwHaE8&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.iLdqI9f-iJt69mljvB3SsQHaEo&pid=Api&P=0&h=180","https://tse3.mm.bing.net/th?id=OIP.JcQnT2IRmfNn6RqndygnTAHaE8&pid=Api&P=0&h=180","https://tse3.explicit.bing.net/th?id=OIP.KFyxE9gJQZRLGbyeMUGV5QHaJQ&pid=Api&P=0&h=180"]
    const p=[...newone.name,n[newone.count]]
    const t=newone.count+1
    const obj=
    {
      name:p,
      count:t
    }

    setnew(obj)
  }

  

  return (
    <>
    <Carousel>
      {
        newone.name.map((e,i)=>{
          console.log(e)
            return(

            <Carousel.Item key={i}>
        <img src={e} alt="hh" style={{width:500,height:500}}></img>
        <Carousel.Caption>
          <h3>Divya1</h3>
          <p>trying to achieve</p>
        </Carousel.Caption>
      </Carousel.Item>
          )  })
    }
    </Carousel>
    
    <button onClick={tt}>Add images</button>
    </>
  );
}

export default ControlledCarousel;