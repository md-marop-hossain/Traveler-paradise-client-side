import React from 'react';
import Button from "@material-tailwind/react/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

const ManageOrder = (props) => {

    const { address, city, email, name } = props.myOrder || {};
    const handleApproved = (id) => {
        const url = `https://dark-goblin-31364.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(props.myOrder)
        })
    }
    const notify = () => toast.success('Order Completed. Please refresh the current page.', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    // console.log("manage order id: ", props.myOrder.order._id)


    // const [manageOrder, setManageOrder] = useState([]);
    // useEffect(() => {
    //     fetch('https://dark-goblin-31364.herokuapp.com/orders')
    //         .then(res => res.json())
    //         .then(data => {
    //             setManageOrder(data)
    //         });
    // }, []);







    return (

        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
                {name}
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{email}</td>
            <td class="px-4 py-3 text-xs border">
                <p class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {props?.myOrder?.status} </p>
                <p class="font-semibold rounded-sm">
                    <Button
                        color="cyan"
                        buttonType="filled"
                        size="sm"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => { handleApproved(props.myOrder._id); notify() }}
                    >
                        approved
                    </Button>
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
                </p>
            </td>
            <td class="px-4 py-3 text-sm border">{props?.myOrder?.order?.country}</td>
            <td class="px-4 py-3 text-sm border">{address}</td>
            <td class="px-4 py-3 text-sm border">{city}</td>
            <td class="px-4 py-3 text-sm border">{props?.myOrder?.phone}</td>
            {/* <td class="px-4 py-3 text-sm border"> <Button
                color="blueGray"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
            onClick={() => props.handleMangeDelete(props.myOrder.order._id)}
            >
                Delete
            </Button></td> */}
        </tr>
    );
};

export default ManageOrder;