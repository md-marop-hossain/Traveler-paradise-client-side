import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import SingleServices from '../SingleServices/SingleServices';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log("service lent: ", services.length)

    return (

        <div class="service-bg">
            <section class="blog text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">




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



            {/* <Review></Review> */}
        </div>


    );
};

export default Services;