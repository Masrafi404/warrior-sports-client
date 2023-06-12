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
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {
                        //TODO
                        enrolled.map(enroll => <div className="col">
                            <div className="card">
                                <img card-img src={enroll.image} className="card-img-top card-image" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Instructor : {enroll.instructor_name}</h5>
                                    <h6>Name: {enroll.name}</h6>
                                    <p className="mb-2">Price: ${enroll.price}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </Slide>
    );
};

export default Enrolled;