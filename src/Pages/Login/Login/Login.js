import { Alert, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { authError, user, loginUser, isLoading, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(name, value) 
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 10, m: 5 }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />

                        <TextField sx={{ width: '100%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button type="submit" sx={{ width: '100%', m: 1 }} variant="outlined">Login</Button>
                        <NavLink to='/register' style={{ textDecoration: 'none' }}><Button variant="text">New in this site?Please register.</Button></NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {
                        user?.email && <Alert severity="success">Successfully login!!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                    <p>----------------------or----------------------------</p>

                    <Button onClick={handleGoogleSignIn} sx={{ width: '100%', m: 1 }}
                        variant="outlined">Google sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;