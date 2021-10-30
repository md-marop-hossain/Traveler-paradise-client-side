import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// import SingleFlight from '../FlightBooking/FlightBooking';
import SingleFlight from '../SingleFlight/SingleFlight';
import './FlightBooking.css';

const FlightBooking = () => {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/flights')
            .then(res => res.json())
            .then(data => {
                setFlights(data);
                console.log(data)
            })
    }, [])
    return (
        <div className="flightbooking-container">
            <Container>
                <div className="grid grid-cols-3 gap-4 mt-16 mb-16 ">

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