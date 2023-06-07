import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {

    const history = useNavigate();
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='mt-7 ms-auto me-5'>
                <h3>Page not found...</h3>
                <h6>We're unable the page you're looking for</h6>
                <Link className='btn btn-primary' to="/">Back to Home</Link>
            </div >
            <img className='me-auto w-50 mt-8' src="https://i.ibb.co/h1wQ6C7/1-z-E2qn-VTJehut7-B8-P2a-Mn3-A.gif" alt="" />

        </div>
    );
};

export default Error;

