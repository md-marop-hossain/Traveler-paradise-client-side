import React from 'react';

const MySingleOrder = (props) => {
    console.log(props.filteredOrder);
    const { address, city, email, name } = props.filteredOrder || {};
    return (
        <div>
            <h1>{address}</h1>
        </div>
    );
};

export default MySingleOrder;