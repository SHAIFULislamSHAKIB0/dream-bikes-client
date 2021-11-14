import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
// import img from '../../../images/banner/dashBoard.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddBikes from '../../AddBikes/AddBikes';
import ManageBikes from '../ManageBikes/ManageBikes';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import PayMent from '../PayMent/PayMent';

const DashBoard = () => {
    const { isLoading, user, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <div>
            <h1 className="m-4 text-info">Dashboard</h1>
            <div className="row">
                <div className="col-md-4">

                    <Link to="/home"><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">Home</Button></Link>

                    <Link to={`${url}/payment`}><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">Payment</Button></Link>

                    <Link to={`${url}/myorders`}><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">My Orders</Button></Link>

                    <Link to={`${url}/review`}><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">Review</Button></Link>

                    {
                        admin && <div>
                            <Link to={`${url}/makeadmin`}><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">Make Admin</Button></Link>

                            <Link to={`${url}/addbikes`}><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">Add Bikes</Button></Link>

                            <Link to={`${url}/managebikes`}><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">Manage Bikes</Button></Link>

                            <Link to={`${url}/manageAllOrders`}><Button className="btn-primary m-2 p-2 rounded-2" color="inherit">Manage All Orders</Button></Link>
                        </div>
                    }



                    {user?.email || user?.displayName ?
                        <Button onClick={logOut} className="fs-4 m-4 btn-warning rounded-2" variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                </div>
                <div className="col-md-8">

                    <Switch>

                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addbikes`}>
                            <AddBikes></AddBikes>
                        </AdminRoute>
                        <AdminRoute path={`${path}/managebikes`}>
                            <ManageBikes></ManageBikes>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>

                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <PayMent></PayMent>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;


