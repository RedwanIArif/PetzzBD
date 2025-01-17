
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { Alert, Paper } from '@mui/material';
import './Exchange.css';
// import { Button } from '@mui/material/Button';

// const Adaptions = () => {
//     const [loginData, setLoginData] = React.useState({});
//     const { registerUser, message } = useAuth();
//     const [error, setError] = useState('');

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         // console.log(newLoginData);
//         setLoginData(newLoginData);
//     }
//     console.log(message);
//     const handleSignUp = e => {
//         e.preventDefault();
//         if (!loginData.email && !loginData.password) {
//             setError('Please Input an Email and a Password');
//             return;
//         }
//         if (loginData.password < 8) {
//             setError('Password Should be At least length of 8');
//             return;
//         }
//         registerUser(loginData.email, loginData.password, loginData.name);
//         setError('');
//     }
//     const theme = createTheme();

//     return (

//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
//                     <CssBaseline />
//                     <Box
//                         sx={{
//                             marginTop: 8,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center'
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Sign up
//                         </Typography>
//                         <Box component="form" noValidate onClick={handleSignUp} sx={{ mt: 3 }}>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} >
//                                     <TextField

//                                         name="name"
//                                         required
//                                         fullWidth
//                                         id="firstName"
//                                         label="Name"
//                                         onBlur={handleOnChange}
//                                         autoFocus
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         id="email"
//                                         type="email"
//                                         label="Email Address"
//                                         name="email"
//                                         onBlur={handleOnChange}

//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         name="password"
//                                         label="Password"
//                                         type="password"
//                                         onBlur={handleOnChange}
//                                         id="password"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         name="password2"
//                                         label="Retype Password"
//                                         type="password"
//                                         onBlur={handleOnChange}
//                                     />
//                                 </Grid>

//                             </Grid>
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Sign Up
//                             </Button>
//                         </Box>
//                         {
//                             error && <Alert severity='success'>{error}</Alert>
//                         }
//                         {
//                             message && <Alert severity="success">{message}</Alert>
//                         }
//                         <Grid container justifyContent="flex-end">
//                             <Grid item>
//                                 <Link to='/login' style={{ textDecoration: 'none' }}>
//                                     <Button> Already have an account? Sign in</Button>
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                     {/* {
//                     isLoading && <CircularProgress />
//                 } */}


//                     {/* 
//                 <Alert severity="error">{error}</Alert> */}

//                 </Paper>
//             </Container>
//         </ThemeProvider>
//     );
// };

// export default Adaptions;

const Exchange = () => {
    return (
      <div className="pl-5 grid grid-cols-12">
        <div className="col-span-8">
          <div className="py-11 grid gap-4 grid-cols-2">
            {/*-------------------------------/ card------------------- */}
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Parrot Exchange</h2>
                <small>-Posted by Tuntuni Begum</small>
                <p>I would like to exchange my Parrot with anything</p>
                {/* <p>Price: $2</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Exchange</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1534695941753-73cf13435eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlnZW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Peigon Exchange</h2>
                <small>-Posted by Boshir Mia</small>
                <p>I would like to exchange my Peigon with anything</p>
                {/* <p>Price: $2</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Exchange</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.pexels.com/photos/1699204/pexels-photo-1699204.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Fish Exchange</h2>
                <small>-Posted by Sottar Ali</small>
                <p>I would like to exchange my Fish with anything</p>

                {/* <p>Price: $2</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Exchange</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1581872454565-822dac9367aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFiYml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Rabbit Exchange</h2>
                <small>-Posted by Bokul Kumar</small>
                <p>I would like to exchange my Rabbit with anything</p>
                {/* <p>Price: $2</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Exchange</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side 	base-500 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Cat Exchange</h2>
                <small>-Posted by Korim Ali</small>
                <p>I would like to exchange my Cat with a Dog</p>

                {/* <p>Price: $2</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Exchange</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side base-500 shadow-xl">
              <figure>
                <img
                  src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Dog Exchange</h2>
                <small>-Posted by Jomir Ali</small>
                <p>I would like to exchange my Dog with a Cat</p>

                {/* <p>Price: $2</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Exchange</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Tiger Exchange</h2>
                <small>-Posted by Koituri</small>
                <p>I would like to exchange my Tiger with something special</p>
                {/* <p>Price: $2</p> ৳200*/}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Exchange</button>
                </div>
              </div>
            </div>

            {/*-------------------------------/ card------------------- */}
          </div>
        </div>

        <div className="col-span-4">
          <div className="center_ex py-10">
            <div>
              <div className="item_center_ex p-4 exchange">
                <h3 className="text-3xl">Exchange Form</h3>
              </div>
              <div className="item_center p-4">
                <h3 className="text-3xl">Please fillup the form</h3>
              </div>
              <h5>Your name:</h5>
              <input type="text" className="input" placeholder="Name" />
              <br />
              <h5>Your mobile number:</h5>
              <input type="text" className="input" placeholder="Phone Number" />
              <br />
              <h5>Your email:</h5>
              <input
                type="text"
                className="input"
                placeholder="Email"
                name=""
                id=""
              />
              <br />
              <h5>What you like to exchange?</h5>
              <input
                type="text"
                className="input"
                placeholder="exchange"
                name=""
                id=""
              />
              <br />
              <h5>Please insert a picture</h5>
              <input className="custom-file-input input" type="file" />
              <div className="item_center_ex p-8">
                <button class="btn btn-primary">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Exchange;