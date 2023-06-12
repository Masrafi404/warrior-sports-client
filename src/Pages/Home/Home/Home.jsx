import React from 'react';
import Banner from '../Banner/Banner';
import InstructorP from '../InstructorP/InstructorP';
import NewsletterSection from '../NewsletterSection/NewsletterSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center mt-5 my-3'>Popular Instructor section</h2>
            <InstructorP></InstructorP>
            <h2 className='text-center mt-4'>News Letter Subscription</h2>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;