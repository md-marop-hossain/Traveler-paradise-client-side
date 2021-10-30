import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const useService = () => {
    const { OrderPlaceId } = useParams();
    const [tour, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {

                setTours(data)
            });
    }, [OrderPlaceId]);

    const specificTour = tour.find(t => t.id == OrderPlaceId);
    return [specificTour]
};

export default useService;