import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/banner/dashBoard.jpg'

const DashBoard = () => {
    const { isLoading, user, logOut } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <div>
            <h1 className="m-3 text-info">Dashboard</h1>
            <div className="row">
                <div className="col-md-6 ">
                    <Nav.Link className="fs-4" as={Link} to="/payment">Payment</Nav.Link>
                    <Nav.Link className="fs-4" as={Link} to="/myorders">My Orders</Nav.Link>
                    <Nav.Link className="fs-4" as={Link} to="/review">Review</Nav.Link>
                    <Nav.Link className="fs-4" as={Link} to="/addbikes">AddBikes</Nav.Link>
                    <Nav.Link className="fs-4" as={Link} to="/makeadmin">Make Admin</Nav.Link>
                    <Nav.Link className="fs-4" as={Link} to="/managebikes">Manage Bikes</Nav.Link>
                    <Nav.Link className="fs-4" as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>



                    {user?.email || user?.displayName ?
                        <Button onClick={logOut} className="fs-4 mt-4 text-info rounded" variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                </div>
                <div className="col-md-6">
                    <img className="w-100" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;