import React from 'react';
import Button from "@material-tailwind/react/Button";
const MySingleOrder = (props) => {
    console.log("pro: ", props.filteredOrder._id);


    const { address, city, email, name } = props.filteredOrder || {};
    return (

        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
                {name}
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{email}</td>
            <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {props?.filteredOrder?.status} </span>
            </td>
            <td class="px-4 py-3 text-sm border">{address}</td>
            <td class="px-4 py-3 text-sm border">{city}</td>
            <td class="px-4 py-3 text-sm border">{props?.filteredOrder?.phone}</td>
            <td class="px-4 py-3 text-sm border"> <Button
                color="blueGray"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                onClick={() => props.handleDeleteUser(props.filteredOrder._id)}
            >
                Delete
            </Button></td>
        </tr>
    );
};

export default MySingleOrder;


