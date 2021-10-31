import React from 'react';
import { useEffect, useState } from 'react';
import SingleHotel from '../SingleHotel/SingleHotel';

import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
const HotelBooking = () => {
    const [hotels, setHotels] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const classes = useStyles();
    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => {
                setHotels(data)
                setSpinner(false);
            })
    }, [])

    return (
        <div>
            <section class="container px-6 py-4 mx-auto">
                <div class="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-1">
                    {
                        spinner && <Backdrop className={classes.backdrop} open >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    }
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
