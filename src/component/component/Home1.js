import React from 'react'
import { useState } from "react";
import Logo1 from './Logo1.png';
import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';
import img5 from './img5.webp';
import img6 from './img6.webp';
import img7 from './img7.webp';
import img8 from './img8.webp';
import img9 from './img9.webp';
import img10 from './img10.webp';
import img11 from './img11.webp';
import img12 from './img12.webp';
export default function Home1() {


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
    <div class="image-container">
    <figure class="image">
      <div class="image1">
    <img class="items" src={img1} alt="img1"/> 
    <figcaption>
     Carrot
     <br></br>
     Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img2} alt="img2"/>
    <figcaption>
    Onion
     <br></br> 
    Add to cart:{count1}
    <br></br>
    <button onClick={changeCount1}>+</button> <button onClick={derCount1}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img3} alt="img3"/>
    <figcaption>  
      Tomato
     <br></br>
      Add to cart:{count2}
    <br></br>
    <button onClick={changeCount2}>+</button> <button onClick={derCount2}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img4} alt="img4"/>
    <figcaption> 
    Potato
     <br></br>
      Add to cart:{count3}
    <br></br>
    <button onClick={changeCount3}>+</button> <button onClick={derCount3}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img5} alt="img5"/>
    <figcaption> 
    Coconut
     <br></br>
      Add to cart:{count4}
    <br></br>
    <button onClick={changeCount4}>+</button> <button onClick={derCount4}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img6} alt="img6"/>
    <figcaption> 
    Caulioflower
     <br></br>
      Add to cart:{count5}
    <br></br>
    <button onClick={changeCount5}>+</button> <button onClick={derCount5}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img7} alt="img1"/> 
    <figcaption>
     Kiwi
     <br></br>
     Add to cart:{count6}
    <br></br>
    <button onClick={changeCount6}>+</button> <button onClick={derCount6}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img8} alt="img2"/>
    <figcaption>
    Apple
     <br></br>
       Add to cart:{count7}
    <br></br>
    <button onClick={changeCount7}>+</button> <button onClick={derCount7}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img9} alt="img3"/>
    <figcaption>
    Pomegranate
     <br></br>
       Add to cart:{count8}
    <br></br>
    <button onClick={changeCount8}>+</button> <button onClick={derCount8}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img10} alt="img4"/>
    <figcaption> 
    Orange
     <br></br>
      Add to cart:{count9}
    <br></br>
    <button onClick={changeCount9}>+</button> <button onClick={derCount9}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img11} alt="img5"/>
    <figcaption> Add to cart:{count10}
    <br></br>
    Blueberry
     <br></br>
    <button onClick={changeCount10}>+</button> <button onClick={derCount10}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img12} alt="img6"/>
    <figcaption> 
    Rawmango
     <br></br>
      Add to cart:{count11}
    <br></br>
    <button onClick={changeCount11}>+</button> <button onClick={derCount11}>-</button> </figcaption>
    </div>
</figure>
    </div>
    </div>
  )
}
