import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Slide } from 'react-awesome-reveal';

const Enrolled = () => {
    const [enrolled, setEnrolled] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/paymentsEnroll')
            .then(res => res.json())
            .then(data => {
                setEnrolled(data)
            })
    }, [])
    return (
        <Slide>
            <div>
                <h4 className='my-4 text-center'>My Enrolled Class</h4>
                {
                    //TODO
                    enrolled.map(enroll => console.log(enroll))
                }

            </div>
        </Slide>
    );
};

export default Enrolled;