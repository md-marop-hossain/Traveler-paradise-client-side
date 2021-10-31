import './Header.css';
import { NavLink } from 'react-router-dom';
import Button from "@material-tailwind/react/Button";
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut, passUser } = useAuth();
    const handleHeaderForm = e => {
        e.preventDefault();
    }
    // fixed-top
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
            <a class="navbar-brand font-black text-2xl " href="/home">Tarveler's Paradise</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <NavLink className="nav-bar nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to="/home">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-bar nav-link font-bold" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to="/tour">Tour</NavLink>
                    </li>
                    <li class="nav-item dropdown font-bold">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Booking
                        </a>
                        <div class="dropdown-menu font-bold" aria-labelledby="navbarDropdown">

                            <NavLink className="nav-bar font-bold dropdown-item" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/hotelbooking">Hotel Booking</NavLink>

                            <NavLink className="nav-bar dropdown-item" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/flightbooking">Flight Booking</NavLink>
                            <div class="dropdown-divider font-bold "></div>

                            <NavLink className="nav-bar dropdown-item font-bold" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/vehiclebooking">Car Booking</NavLink>

                        </div>
                    </li>
                    <li class="nav-item font-bold">
                        <NavLink className="nav-bar nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to="/contact">Contact</NavLink>
                    </li>
                    {
                        user.email && <li class="nav-item font-bold">
                            <NavLink className="nav-bar nav-link" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/myorders">My Orders</NavLink>
                        </li>
                    }

                    {
                        user.email && <li class="nav-item font-bold">
                            <NavLink className="nav-bar nav-link" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/manageAllOrders">Manage All Order</NavLink>
                        </li>
                    }
                    {
                        user.email && <li class="nav-item font-bold">
                            <NavLink className="nav-bar nav-link" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/addANewServices">Add New Services</NavLink>
                        </li>
                    }
                </ul>
                <form onSubmit={handleHeaderForm} class="form-inline my-2 my-lg-0 ">

                    <input class="form-control mr-sm-2 header-input" type="search" placeholder="Search" aria-label="Search" />

                    <Button
                        color="blueGray"
                        buttonType="filled"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                    >
                        Search
                    </Button>
                </form>
                <ul class="navbar-nav ml-5">
                    {
                        user.email ? <li class="nav-item active mr-5">

                            <Button
                                color="teal"
                                buttonType="filled"
                                size="sm"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="light"
                                onClick={logOut}
                            >
                                Log out
                            </Button>
                        </li> : <li class="nav-item mr-5 font-bold active">
                            <NavLink className="nav-bar nav-link" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} to="/login"> <Button
                                color="blue"
                                buttonType="filled"
                                size="sm"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="light"
                            >
                                    Sign In
                                </Button></NavLink>

                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;