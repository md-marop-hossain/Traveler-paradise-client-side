import React from 'react';

const SingleVehicle = (props) => {
    const { carModel, driver, contactNumber, seat, type, location, status, pricePerHour, image, rating } = props.vehicle || {};
    // console.log("vehicle: ", props.vehicle);
    // style={{ background: `url(${image}) no-repeat` }}
    return (
        <div>
            <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
                <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div class="lg:w-100">
                        <div class="h-64 bg-cover lg:rounded-lg lg:h-full" >
                            <img src={image} alt="photo">
                            </img>
                        </div>
                    </div>
                    <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <h2 class="text-3xl text-gray-800 font-bold">{carModel}</h2>


                        <h6>Drive:  <span class="mt-6 text-gray-600">{driver}</span></h6>
                        <h6>Contact Number :  <span class="mt-6 text-gray-600">{contactNumber}</span></h6>
                        <h6>Class :  <span class="mt-6 text-gray-600">{type}</span></h6>
                        <h6>Drive:  <span class="mt-6 text-gray-600">{driver}</span></h6>
                        <h6>Drive:  <span class="mt-6 text-gray-600">{driver}</span></h6>




                        <div class="mt-8">
                            <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SingleVehicle;