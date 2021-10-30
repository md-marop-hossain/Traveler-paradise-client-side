import React from 'react';
import { useState, useEffect } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder'



const ManageAllOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                console.log("manage all order: ", data)
                setMyOrders(data)
            });
    }, []);

    // console.log("mu: "myOrders);
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
                                    <th class="px-4 py-3">Phone</th>
                                    {/* <th class="px-4 py-3">delete</th> */}
                                </tr>
                            </thead>
                            <tbody class="bg-white">

                                {
                                    myOrders.map(myorder => <ManageOrder
                                        myOrder={myorder}
                                    ></ManageOrder>
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

export default ManageAllOrders;