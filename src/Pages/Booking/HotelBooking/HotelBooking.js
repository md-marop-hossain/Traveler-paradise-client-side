import React from 'react';
import { useEffect, useState } from 'react';
import SingleHotel from '../SingleHotel/SingleHotel';

const HotelBooking = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    return (
        <div>
            <section class="container px-6 py-4 mx-auto">
                <div class="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-1">
                    {
                        hotels.map(hotel => <SingleHotel

                            key={hotel.id}
                            hotel={hotel}
                        >
                        </SingleHotel>)
                    }
                </div>
            </section>
        </div>
    );
};

export default HotelBooking;
