// Portfolio.js

import React from 'react';
import './pro.css'; 

const Pro = () => {
  return (
    <div>
      <header className="container">
      <div class="page-header">
            <div class="logo">
                Logo.
            </div>
            <input type="checkbox" id="click"/>

            <label for="click" class="mainicon">
                <div class="menu">
                    <i class='bx bx-menu'></i>
                </div>
            </label>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
      </header>

      <div className="container">
        <div className="main">
          <div className="images">
            <img src="img_3.png" alt="" className="img-w" />
          </div>
          <div className="detail">
            <h3>Hi, I'm</h3>
            <h1>
              <span>John</span> Doe
            </h1>
            <div className="social">
            <a href="https://www.linkedin.com/in/vikash-web-dev/" style="--socialAni:1"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://t.me/web_devs_i" style="--socialAni:2"><i class='bx bxl-telegram'></i></a>
                    <a href="https://github.com/bikashdev01" style="--socialAni:3"><i class='bx bxl-github'></i></a>
                    <a href="https://www.youtube.com/@Web_Devs__" style="--socialAni:4"><i class='bx bxl-youtube'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;
