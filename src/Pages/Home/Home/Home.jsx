import React from 'react';
import Banner from '../Banner/Banner';
import PClass from '../Banner/PClass/PClass';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Banner></Banner>
            <h2>Popular class</h2>
            <PClass></PClass>
        </div>
    );
};

export default Home;