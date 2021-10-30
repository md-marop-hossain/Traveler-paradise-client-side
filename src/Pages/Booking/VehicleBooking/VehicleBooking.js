import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleVehicle from '../SingleVehicle/SingleVehicle';
import './VehicleBooking.css';

const VehicleBooking = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setVehicles(data))
    }, [])

    return (
        <div>
            <Container>
                <div className="grid grid-cols-1 gap-4 mt-16 mb-16 ">
                    {
                        vehicles.map(vehicle => <SingleVehicle
                            key={vehicle.id}
                            vehicle={vehicle}
                        ></SingleVehicle>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default VehicleBooking;

