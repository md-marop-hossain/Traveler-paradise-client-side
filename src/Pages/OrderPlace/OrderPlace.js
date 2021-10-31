import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import useService from '../use/useService';
import './OrderPlace.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const OrderPlace = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [id] = useService();

    const [spinner, setSpinner] = useState(true);
    const classes = useStyles();

    const onSubmit = data => {
        data.order = id;
        data.status = "pending";

        fetch('https://dark-goblin-31364.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset();
                setSpinner(false);
            }
            )
    }
    const { OrderPlaceId } = useParams();
    const [specificOrders, setSpecificOrders] = useState([]);
    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {

                setSpecificOrders(data)
                setSpinner(false);
            });
    }, [OrderPlaceId]);

    const specificTour = specificOrders.find(t => t.id == OrderPlaceId);
    const notify = () => toast.success('Congratulations! Successfully ordered', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div className="min-h-screen service-bg ">
            <div className="max-w-full m-size-container ">
                <Container>
                    <div className=" grid grid-cols-1 justify-items-center items-center">
                        <div class="justify-self-auto relative  min-w-[500px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer    max-w-3xl	">
                            <div class="overflow-x-hidden rounded-2xl relative">
                                <img className="h-80 rounded-2xl w-full object-cover" src={specificTour?.image} alt="country" />
                                {
                                    spinner && <Backdrop className={classes.backdrop} open >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                }
                            </div>
                            <div class="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p class="text-lg font-semibold text-gray-900 mb-0">{specificTour?.country}</p>
                                    <p class="text-md text-gray-800 mt-0"><i>{specificTour?.details}</i></p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-3xl max-w-3xl ">
                                <p className="text-3xl text-center font-bold">Fillup the form to ensure your order</p>
                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user.displayName} {...register("name")} />
                                    <input defaultValue={user.email} {...register("email", { required: true })} />
                                    {errors.email && <span className="error">This field is required</span>}
                                    <input placeholder="Address" defaultValue="" {...register("address")} />
                                    <input placeholder="City" defaultValue="" {...register("city")} />
                                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                                    <input type="submit" className="bg-black text-white	" onClick={() => notify()} />
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default OrderPlace;