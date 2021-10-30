import React from 'react';
import Button from "@material-tailwind/react/Button";
import { Link } from 'react-router-dom';
import './SingleServices.css';

const SingleServices = (props) => {
    const { country, id, image, details } = props.service;

    return (
        <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center">
                <img src={image} alt="" />
            </div>
            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="title-post font-medium">{country}</div>
                <div class="summary-post text-base text-justify mb-3"> {details.slice(0, 250)}
                    <br />
                </div>
                <div>
                    <Button
                        color="cyan"
                        buttonType="filled"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                    >
                        <Link to={`/home/${id}`}>
                            <button className="homemedicine-button">BOOK NOW</button>
                        </Link>
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default SingleServices;
