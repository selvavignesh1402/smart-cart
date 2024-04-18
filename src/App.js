// App.js (or your main file)
import React from 'react';
import './App.css';
import './Home.css';
import'./component/signup.css';
import Navigator from './Router/Navigator';
import { BrowserRouter } from 'react-router-dom';
import Checkout from './component/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapNew from './component/MapNew';

function App() {
    return (
       <div>
        <BrowserRouter>
        <Navigator/>
        </BrowserRouter>
      </div> 
    );
}

export default App;

