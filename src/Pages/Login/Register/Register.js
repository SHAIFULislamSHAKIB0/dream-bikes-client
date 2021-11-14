
import { Alert, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import login from '../../../images/login.png'
import Button from '@mui/material/Button'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [logIn, setLogIn] = useState({})
    const history = useHistory()

    const { authError, user, registerUsers, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(name, value) 
        const newLoginData = { ...logIn }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLogIn(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (logIn.password !== logIn.password2) {
            alert('Your password did not match');
            return;
        }
        registerUsers(logIn.email, logIn.password, logIn.name, history)
        // console.log(registerUsers);
        e.preventDefault()
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 10, m: 5 }} variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField sx={{ width: '100%', m: 1 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField sx={{ width: '100%', m: 1 }}
                                id="standard-password-input"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Button type="submit" sx={{ width: '100%', m: 1 }} variant="outlined">Register</Button>

                            <NavLink to='/login' style={{ textDecoration: 'none' }}><Button variant="text">Already register?Please Login.</Button></NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Successfully registered!!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;