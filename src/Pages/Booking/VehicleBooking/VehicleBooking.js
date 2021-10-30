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



// <div class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4">
//                 <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
//                     <a class="" href="#" title="Image Link">
//                         <picture class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg vehicle-picture" >
//                             <img class="absolute inset-0 w-full h-full object-cover" src={"https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="A random image from Unsplash" />
//                         </picture>
//                     </a>
//                 </div>
//                 <div class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
//                     <div class="p-4 md:p-8 bg-white shadow-lg">
//                         <p class="mb-2 text-lg leading-none font-medium">
//                             <a class="" href="#" title="Heading Link">
//                                 Card Title
//                             </a>
//                         </p>
//                         <p class="mb-2 text-sm text-gray-700">
//                             Lorem ipsum dolar sit amet
//                         </p>
//                         <p class="text-xs text-gray-500">
//                             Published @
//                             <time datetime="">
//                                 01/01/2021
//                             </time>
//                         </p>
//                     </div>
//                 </div>
//             </div>