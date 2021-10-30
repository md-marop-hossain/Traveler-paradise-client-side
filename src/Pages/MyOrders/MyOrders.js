import React from 'react';
import './MyOrders.css';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrders = () => {
    const { user, email } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            });
    }, []);

    return (
        <div>
            <h1>ss</h1>
            {
                myOrders.filter(specife => specife.email == user.email).map(filteredOrder => <MySingleOrder
                    filteredOrder={filteredOrder}
                >

                </MySingleOrder>
                )
            }

        </div>
    );
};

export default MyOrders;