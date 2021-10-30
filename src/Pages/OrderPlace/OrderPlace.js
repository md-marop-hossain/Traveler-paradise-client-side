import React from 'react';

import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import useService from '../use/useService';
import './OrderPlace.css';

const OrderPlace = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const [id] = useService();
    // console.log("id: ", id);
    // const { OrderPlaceId } = useParams();

    const onSubmit = data => {
        // specificTour.country = data;

        data.order = id;
        data.status = "pending";


        // data.OrderPlaceId = OrderPlaceId;

        console.log("Data: ", data);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(" after fetch: ", data);
                reset();
            }
            )
    }



    return (
        <div className="mx-auto min-h-screen grid justify-items-center items-center	">

            <div>
                {/* <h1>{OrderPlaceId}</h1>
            <p>{specificTour?.country}</p> */}

                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}


                    {/* <input defaultValue={specificTour?.country}  {...register("country")} /> */}
                    <input placeholder="Address" defaultValue="" {...register("address")} />


                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default OrderPlace;