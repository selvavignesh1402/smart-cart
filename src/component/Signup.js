import * as React from 'react';
import signupnew from './signupnew.png';
import loginbg5 from './loginbg5.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Import the icon
import Email from '@mui/icons-material/Email'; // Import the icon
import Lock from '@mui/icons-material/Lock'; // Import the icon
import Phone from '@mui/icons-material/Phone'; // Import the icon

class Signup extends React.Component
{
    render()
    {
        return(
            <div class='parent2'>

            
            <div class="smain">
            {/* <div class="logo">
            <img class="img2" src={Logo1} alt="Logo1"/>
            <h1 class="head">SmartCart</h1>
            </div> */}
            <img class="bg" src={loginbg5} alt="Logo1"/>
            <div class="sform">
            <img class="img1" src={signupnew} alt="Logo1"/>
                <div class="form2">
                <h1 class="head">SmartCart</h1>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
                    <form>
                    <p class="SUP">SIGNUP</p>
                    <label for="Uname">Username</label>
                    <br/>
                    <TextField id="username" label="Username*" variant="outlined"/>
                    <br></br>      
                    <label for="email">Email</label>
                    <br/>
                    <TextField id="email" label="Email*" variant="outlined"/>
                    <br></br>     
                    <label for="Pass">CreatePassword</label>
                    <br/>
                    <TextField id="password" label="Createpassword*" variant="outlined"/>
                    <br></br>     
                    <label for="number">PhoneNumber</label>
                    <br/>
                    <TextField id="number" label="Phonenumber*" variant="outlined"/>
                    <br></br>
                    <br></br>
                    <Link to= '/home'><button class="submit"> <span>Signup</span></button> </Link>
                    </form>
                    </div>
                </div>
                </div>
                </div>
        )
    }
}

export default Signup