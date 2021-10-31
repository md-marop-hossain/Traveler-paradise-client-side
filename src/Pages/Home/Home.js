import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Success from '../Success/Success';
import Subscribe from '../Subscribe/Subscribe';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Success></Success>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;