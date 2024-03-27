import React from 'react'
import Footer from './Footer';
import './Footer.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import Logo1 from './Logo1.png';
import car1 from './car1.webp';
import car2 from './car2.jpg';
import img13 from './img13.webp';
import img14 from './img14.webp';
import img15 from './img15.webp';
import img16 from './img16.webp';
import img17 from './img17.webp';
import img18 from './img18.webp';
import img19 from './img19.webp';
import img20 from './img20.webp';
import img21 from './img21.webp';
import img22 from './img22.webp';
import img23 from './img23.webp';
import img24 from './img24.webp';
export default function Home2() {
  const [count,setCount]=useState(0);
  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0);
  const [count3,setCount3]=useState(0);
  const [count4,setCount4]=useState(0);
  const [count5,setCount5]=useState(0);
  const [count6,setCount6]=useState(0);
  const [count7,setCount7]=useState(0);
  const [count8,setCount8]=useState(0);
  const [count9,setCount9]=useState(0);
  const [count10,setCount10]=useState(0);
  const [count11,setCount11]=useState(0);
  const changeCount=()=>setCount(count+1);
  const derCount=()=>setCount(count-1);
  const changeCount1=()=>setCount1(count1+1);
  const derCount1=()=>setCount1(count1-1);
  const changeCount2=()=>setCount2(count2+1);
  const derCount2=()=>setCount2(count2-1);
  const changeCount3=()=>setCount3(count3+1);
  const derCount3=()=>setCount3(count3-1);
  const changeCount4=()=>setCount4(count4+1);
  const derCount4=()=>setCount4(count4-1);
  const changeCount5=()=>setCount5(count5+1);
  const derCount5=()=>setCount5(count5-1);
  const changeCount6=()=>setCount6(count6+1);
  const derCount6=()=>setCount6(count6-1);
  const changeCount7=()=>setCount7(count7+1);
  const derCount7=()=>setCount7(count7-1);
  const changeCount8=()=>setCount8(count8+1);
  const derCount8=()=>setCount8(count8-1);
  const changeCount9=()=>setCount9(count9+1);
  const derCount9=()=>setCount9(count9-1);
  const changeCount10=()=>setCount10(count10+1);
  const derCount10=()=>setCount10(count10-1);
  const changeCount11=()=>setCount11(count11+1);
  const derCount11=()=>setCount11(count11-1);

  return (
    <div class="parent">
          <div class="logohome">
         <img class="img2" src={Logo1} alt="Logo1"/>
         <h1 class="head">SmartCart</h1>
         </div> 


      <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img class="car" src={car2} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="car" src={car1} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="car" src={""} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="car" src={""} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>


         
    <div class="image-container">
    <figure class="image">
      <div class="image1">
    <img class="items" src={img13} alt="img1"/> 
    <figcaption>
     Carrot
     <br></br>
     Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img14} alt="img2"/>
    <figcaption>
    Onion
     <br></br> 
    Add to cart:{count1}
    <br></br>
    <button onClick={changeCount1}>+</button> <button onClick={derCount1}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img15} alt="img3"/>
    <figcaption>  
      Tomato
     <br></br>
      Add to cart:{count2}
    <br></br>
    <button onClick={changeCount2}>+</button> <button onClick={derCount2}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img16} alt="img4"/>
    <figcaption> 
    Potato
     <br></br>
      Add to cart:{count3}
    <br></br>
    <button onClick={changeCount3}>+</button> <button onClick={derCount3}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img17} alt="img5"/>
    <figcaption> 
    Coconut
     <br></br>
      Add to cart:{count4}
    <br></br>
    <button onClick={changeCount4}>+</button> <button onClick={derCount4}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img18} alt="img6"/>
    <figcaption> 
    Caulioflower
     <br></br>
      Add to cart:{count5}
    <br></br>
    <button onClick={changeCount5}>+</button> <button onClick={derCount5}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img19} alt="img1"/> 
    <figcaption>
     Kiwi
     <br></br>
     Add to cart:{count6}
    <br></br>
    <button onClick={changeCount6}>+</button> <button onClick={derCount6}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img20} alt="img2"/>
    <figcaption>
    Apple
     <br></br>
       Add to cart:{count7}
    <br></br>
    <button onClick={changeCount7}>+</button> <button onClick={derCount7}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img21} alt="img3"/>
    <figcaption>
    Pomegranate
     <br></br>
       Add to cart:{count8}
    <br></br>
    <button onClick={changeCount8}>+</button> <button onClick={derCount8}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img22} alt="img4"/>
    <figcaption> 
    Orange
     <br></br>
      Add to cart:{count9}
    <br></br>
    <button onClick={changeCount9}>+</button> <button onClick={derCount9}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img23} alt="img5"/>
    <figcaption> 
    Blueberry
    <br></br>
     <br></br>
    Add to cart:{count10}
    <button onClick={changeCount10}>+</button> <button onClick={derCount10}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img24} alt="img6"/>
    <figcaption> 
    Rawmango
     <br></br>
      Add to cart:{count11}
    <br></br>
    <button onClick={changeCount11}>+</button> <button onClick={derCount11}>-</button> </figcaption>
    </div>
</figure>
    </div>
    <Footer/>
    </div>

    )
 }
