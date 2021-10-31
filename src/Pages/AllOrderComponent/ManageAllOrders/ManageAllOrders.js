import React from 'react';
import { useState, useEffect } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
// import Button from "@material-tailwind/react/Button";
const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://dark-goblin-31364.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                console.log("manage all order: ", data)
                setMyOrders(data)
            });
    }, []);

    // const [value, setValue] = useState();

    // const refresh = () => {
    //     setValue({});
    // }

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
                                    <th class="px-4 py-3">Selected Country</th>
                                    <th class="px-4 py-3">Address</th>
                                    <th class="px-4 py-3">City</th>
                                    <th class="px-4 py-3">Phone</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {/* <Button
                                    color="lightBlue"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                    onClick={refresh}
                                >
                                    Refresh
                                </Button> */}
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