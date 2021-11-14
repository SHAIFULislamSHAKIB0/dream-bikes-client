import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleGetName = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }



    const handleRegistration = (e) => {
        e.preventDefault();
        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true)
                updateName(name)
                setUser(res.user)
                history.push(url)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
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
        <div className="text-center mt-4">
            <h2 className="m-3">Please register</h2>
            <form onSubmit={handleRegistration}>
                <input type="text" onBlur={handleGetName} placeholder="name" />
                <br />
                <input type="email" onBlur={handleGetEmail} placeholder="email" />
                <br />
                <input type="password" onBlur={handleGetPassword} placeholder="password" />
                <br />
                <input type="submit" placeholder="create" className="contact-btn m-2" />
                <br />
            </form>

            <button className="btn btn-warning m-2 font-weight-bold" onClick={handleGoogleLogin}>Google Sign In</button>
            <p> Already Signed Up ?<Link to="/login">Please Login</Link ></p>
        </div>
    );
};

export default Register;