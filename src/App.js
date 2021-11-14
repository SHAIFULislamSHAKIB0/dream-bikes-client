import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Explores from './Pages/Explore/Explores';
import Register from './Pages/Login/Register/Register';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PayMent from './Pages/DashBoard/PayMent/PayMent';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders';
import Review from './Pages/DashBoard/Review/Review';
import AddBikes from './Pages/AddBikes/AddBikes';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import ManageBikes from './Pages/DashBoard/ManageBikes/ManageBikes';
import Bookings from './Pages/Bookings/Bookings';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <Explores></Explores>
            </Route>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/payment">
              <PayMent></PayMent>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/addbikes">
              <AddBikes></AddBikes>
            </Route>
            <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/managebikes">
              <ManageBikes></ManageBikes>
            </Route>
            <Route path="/booking/:bikeId">
              <Bookings></Bookings>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
