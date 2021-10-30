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

                {/* <div class="header-content inline-flex ">
                    <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                        <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                    </div>
                    <div class="category-title flex-1 text-sm"> PHP</div>
                </div> */}
                <div class="title-post font-medium">{country}</div>

                <div class="summary-post text-base text-justify mb-3"> {details.slice(0, 250)}
                    {/* <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span class="">Booking Now</span></button> */}
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

// <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
// <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>

// <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

//     <div class="header-content inline-flex ">
//         <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
//             <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
//         </div>
//         <div class="category-title flex-1 text-sm"> PHP</div>
//     </div>
//     <div class="title-post font-medium">Mon titre</div>

//     <div class="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
//         <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span class="">Lire plus</span></button>
//     </div>

// </div>
// </div>

// <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
// <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>

// <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

//     <div class="header-content inline-flex ">
//         <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
//             <div class="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
//         </div>
//         <div class="category-title flex-1 text-sm"> JS</div>
//     </div>
//     <div class="title-post font-medium">Mon titre</div>

//     <div class="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
//         <button class="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span class="">Lire plus</span></button>
//     </div>

// </div>
// </div>

// <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
// <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>

// <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

//     <div class="header-content inline-flex ">
//         <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
//             <div class="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
//         </div>
//         <div class="category-title flex-1 text-sm"> Vue</div>
//     </div>
//     <div class="title-post font-medium">Mon titre</div>

//     <div class="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
//         <button class="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span class="">Lire plus</span></button>
//     </div>

// </div>
// </div>