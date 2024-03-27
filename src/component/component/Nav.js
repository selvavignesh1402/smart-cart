import React from 'react'

export default function Nav() {

    // function openNav()
    // {
    //   document.getElementById("mysidenav").style.width="250px";
    //   document.getElementById("main").style.marginLeft="250px";
    // }
    // function closeNav()
    // {
    //   document.getElementById("mysidenav").style.width="0";
    //   document.getElementById("main").style.marginLeft="0";
    // }

  return (
    <div>
  <div class="sidenav" id="mysidenav">
    <a href="#" class="closebt" onclick="closeNav()">X</a>
    <a href="#">Profile</a>
    <a href="#">Contact</a>
    <a href="#">Logout</a>
  </div>
  <div class="main">
    <span style="font-size: 25px;cursor: pointer"onclick="openNav()">&#9776;</span>
  </div>
    </div>
  )
}
