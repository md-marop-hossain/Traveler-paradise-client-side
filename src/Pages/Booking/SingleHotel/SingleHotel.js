import React from 'react';
import Rating from 'react-rating';
import './SingleHotel.css';

const SingleHotel = (props) => {
    const { hotelName, location, country, image, details, phoneNumber, email, roomPerPerson, price, rating } = props.hotel || {};

    return (
        <div class="grid lg:grid-cols-5 md:grid-cols-1  items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div class="lg:col-span-2 sm:col-span-1 ">
                <img alt="mountain" class="w-100 rounded-md border-2 border-gray-300" src={image} />
            </div>
            <div id="body" class="flex flex-col  lg:col-span-3 sm:col-span-1 ml-5">
                <h4 id="name" class="text-xl font-semibold mb-1">{hotelName}</h4>
                <h5 id="job" class="text-gray-800 mt-1"><i class="fas fa-map-marker-alt"></i><span className="text-base font-semibold ml-2">{location}</span></h5>
                <h5 id="job" class="text-gray-800 mt-1">{country}</h5>
                <span> <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                </Rating><span className="font-bold"> ({rating})</span> </span>
                <h5 id="job" class="text-gray-800 mt-1 text-base	font-semibold">{details}</h5>
                <div class="grid grid-cols-2  md:grid-cols-2 break-all sm:grid-cols-1 gap-4">
                    <div>  <h5 id="job" class="text-gray-800 mt-1"><i class="fas fa-phone"></i><span className="ml-1">{phoneNumber}</span></h5> </div>
                    <div>   <h5 id="job" class="text-gray-800 mt-1 break-words"><i class="far fa-envelope"></i><span className="ml-1">{email}</span></h5></div>
                    <div>    <h5 id="job" class="text-gray-800 mt-1"><i class="fas fa-bed"></i><span className="ml-2">{roomPerPerson}</span></h5></div>
                    <div>   <h5 id="job" class="text-gray-800 mt-1">${price}</h5></div>

                </div>
            </div>
        </div>
    );
};
export default SingleHotel;
