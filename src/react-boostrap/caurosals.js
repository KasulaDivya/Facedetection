import React from 'react';
import { Carousel } from 'react-bootstrap';
import Abc from '../components/image';

function Carrr() {
  const items = ["https://c.wallhere.com/photos/51/7d/macro_water_drops_feathers_colorful_peacocks-95986.jpg!d", "https://c.wallhere.com/photos/51/7d/macro_water_drops_feathers_colorful_peacocks-95986.jpg!d","https://c.wallhere.com/photos/51/7d/macro_water_drops_feathers_colorful_peacocks-95986.jpg!d","https://c.wallhere.com/photos/51/7d/macro_water_drops_feathers_colorful_peacocks-95986.jpg!d","https://c.wallhere.com/photos/51/7d/macro_water_drops_feathers_colorful_peacocks-95986.jpg!d",0];
   
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item>
         <Vv ff={item}></Vv>
         </Carousel.Item>

      ))}
    </Carousel>
  );
}



export default Carrr;

function Vv(uu){
    const {ff}=uu
    return(
        <>

<Abc tt={ff}></Abc>
         <Carousel.Caption>
         
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
         </>
    )
}
