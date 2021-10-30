import './App.css';
import "@material-tailwind/react/tailwind.css";
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import HotelBooking from './Pages/Booking/HotelBooking/HotelBooking';
import FlightBooking from './Pages/Booking/FlightBooking/FlightBooking';
import VehicleBooking from './Pages/Booking/VehicleBooking/VehicleBooking';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Pages/contexts/AuthProvider';
import LogIn from './Pages/Login/LogIn/LogIn';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import MyOrders from './Pages/AllOrderComponent/MyOrders/MyOrders';
import ManageAllOrders from './Pages/AllOrderComponent/ManageAllOrders/ManageAllOrders';
import AddANewService from './Pages/AllOrderComponent/AddANewService/AddANewService';

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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/hotelbooking">
              <HotelBooking></HotelBooking>
            </Route>
            <Route exact path="/flightbooking">
              <FlightBooking></FlightBooking>
            </Route>
            <Route exact path="/vehiclebooking">
              <VehicleBooking></VehicleBooking>
            </Route>
            <Route exact path="/home/:OrderPlaceId">
              <OrderPlace></OrderPlace>

            </Route>
            <Route exact path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path="/addANewServices">
              <AddANewService></AddANewService>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
