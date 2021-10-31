import { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';
import './Services.css';
import * as React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Services = () => {
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const classes = useStyles();
    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSpinner(false);
            }
            )
    }, [])

    return (
        <div class="service-bg">
            <section class="blog text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {
                            spinner && <Backdrop className={classes.backdrop} open >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        }
                        {
                            services.map(service => <SingleServices
                                key={service.id}
                                service={service}
                            >
                            </SingleServices>)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;