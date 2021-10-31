import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';
import './Services.css';
import Spinner from 'react-bootstrap/Spinner';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        setLoading(true);
    }, [])



    return (
        <div class="service-bg">
            <section class="blog text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {loading ? services.map(service => <SingleServices
                            key={service.id}
                            service={service}
                        >
                        </SingleServices>) : < Spinner animation="border" />
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;