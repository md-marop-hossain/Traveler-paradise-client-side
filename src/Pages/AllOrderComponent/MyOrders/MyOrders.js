import React from 'react';
import './MyOrders.css';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
                setSpinner(false);
            });
    }, []);

    //DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://dark-goblin-31364.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log("myorder rec ", data)
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrder = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrder);
                    }
                })
        }
    }
    const classes = useStyles();
    return (
        <div class="service-bg min-h-screen">
            <section class="container mx-auto p-6 font-mono">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-3">Name</th>
                                    <th class="px-4 py-3">Email</th>
                                    <th class="px-4 py-3">Status</th>
                                    <th class="px-4 py-3">Address</th>
                                    <th class="px-4 py-3">City</th>
                                    <th class="px-4 py-3">Selected Country</th>
                                    <th class="px-4 py-3">Phone</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {
                                    spinner && <Backdrop className={classes.backdrop} open >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                }
                                {myOrders.filter(specife => specife.email == user.email).map(filteredOrder => <MySingleOrder
                                    filteredOrder={filteredOrder}
                                    handleDeleteUser={handleDeleteUser}
                                >
                                </MySingleOrder>
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyOrders;