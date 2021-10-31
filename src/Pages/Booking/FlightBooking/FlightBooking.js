import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleFlight from '../SingleFlight/SingleFlight';
import './FlightBooking.css';

import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const FlightBooking = () => {
    const [flights, setFlights] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/flights')
            .then(res => res.json())
            .then(data => {
                setFlights(data);
                setSpinner(false);
            })
    }, [])
    return (
        <div className="flightbooking-container">
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-16 mb-16 ">
                    {
                        spinner && <Backdrop className={classes.backdrop} open >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    }
                    {
                        flights.map(flight => <SingleFlight
                            key={flight.id}
                            flight={flight}
                        >
                        </SingleFlight>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default FlightBooking;