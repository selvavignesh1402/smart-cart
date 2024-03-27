import * as React from 'react';
import login from './login.png';
import Logo1 from './Logo1.png';
import loginbg from './loginbg.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
function Login()
{
    return(
         <div class="parent">

         {/* <img class="loginbg" src={loginbg} alt="Logo1"/> */}

         <div class="logo">
         <img class="img2" src={Logo1} alt="Logo1"/>
         <h1 class="head">SmartCart</h1>
         </div>
         <div className="main">
         <img class="img1" src={login} alt="LoginImage"/>
         <div className="Login">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <form>
         <p class="Lname">LOGIN</p>
         <label for="username">Username</label>
         <TextField id="username" label="Username*" variant="outlined"/>
         <br></br>
         <label for="password">Password</label> 
         <TextField id="password" label="Password*" variant="outlined"/>
         <br></br>
         <br></br>
         <button class="submit">SignIn</button>
         <br></br>
         <br></br>
         <label for="newuser">NewUser?</label>
          <button class="submit">
            <Link to= '/Signup'>
            <span>Signup!</span>
            </Link> 
            </button> 
         </form>
         </Box>
         </div>
         </div>
         </div>
    )
}
export default Login