import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading, isLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }




    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false)
            })
    }





    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };



    return (
        <div className="text-center mt-4 m-3">
            <h2 className="m-3">Please Login </h2>
            <form onSubmit={handleLoginWithEmailAndPassword}>
                <input type="email" onBlur={handleGetEmail} placeholder="Email" />
                <br />
                <input type="password" onBlur={handleGetPassword} placeholder="Password" />
                <br />
                <input type="submit" value="login" className="contact-btn m-2" />

            </form>
            <button className="btn btn-warning m-2 font-weight-bold" onClick={handleGoogleLogin}>Google Sign In</button>
            <p> New User ?<Link to="/register">Please register</Link ></p>

        </div>
    );







};

export default Login;


/* <div className="login-items">
           <h2>Please Login</h2>
           <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
       </div> */