import React from 'react';

const ManageOrder = (props) => {
    console.log("my order: ", props.myOrder)
    const { address, city, email, name } = props.myOrder || {};
    return (

        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
                {name}
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{email}</td>
            <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {props?.myOrder?.status} </span>
            </td>
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
                onClick={() => props.handleDeleteUser(props.filteredOrder.order.id)}
            >
                Delete
            </Button></td> */}
        </tr>

    );
};

export default ManageOrder;