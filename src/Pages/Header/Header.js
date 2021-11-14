import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Dream Bikes</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>



                        {user?.email || user?.displayName ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        {/* {user?.displayName && <Button onClick={logOut} variant="light">Logout</Button>} */}

                        <Navbar.Text>
                            This is: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;