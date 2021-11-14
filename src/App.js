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
import Bookings from './Pages/Bookings/Bookings';



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
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>

            <PrivateRoute path="/booking/:bikeId">
              <Bookings></Bookings>
            </PrivateRoute>



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
