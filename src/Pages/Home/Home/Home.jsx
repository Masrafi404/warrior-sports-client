import React from 'react';
import Banner from '../Banner/Banner';
import InstructorP from '../InstructorP/InstructorP';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center mt-5 my-3'>Popular Instructor section</h2>
            <InstructorP></InstructorP>
        </div>
    );
};

export default Home;