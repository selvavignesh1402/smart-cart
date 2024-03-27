import React, { useState } from 'react';
import login from './login.png';
import hbg from './hbg.jpg';
import Logo1 from './Logo1.png';
import loginnew from './loginnew.jpg';
import loginbgnew1 from './loginbgnew1.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function Login()
{

const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    console.log('Login successful!');

    window.location.href = '/home';
    
  };

    return(
         <div class="loginparent">

         {/* <img class="loginbg" src={loginbg} alt="Logo1"/> */}

         <div class="logo">
         {/* <img class="img2" src={Logo1} alt="Logo1"/> */}
        </div>
         {/* <img class="bg1" src={hbg} alt="Logo1"/> */}

         <div className="lmain">
         <img class="loginimg1" src={loginnew} alt="LoginImage"/>
         <div className="Login">
           {/* <h1 class="head">SmartCart</h1> */}
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <form>
          <br></br>
          <br></br>
         <p class="Lname">LOGIN</p>
         <label htmlFor="username">Username</label>
          <br />
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
         <br></br> 
         <br></br>
         <label htmlFor="password">Password</label>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         <br></br>
         <br></br>
         <Link to= '/home'><button class="submit1" onClick={handleSubmit}><span>SignIn</span></button></Link> 
         <br></br>
         <br></br>
         {error && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>check it out!</strong>{error}</Alert>}
         <label for="newuser">NewUser?</label>
         <Link to= '/Signup' className='link'><span>Signup!</span></Link>
         </form>
         </Box>
         </div>
         </div>
         </div>
    )
}
export default Login