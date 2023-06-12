import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../Shared/Provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Enrolled = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolled = [], refetch } = useQuery(['/paymentEnrolledClasses'], async () => {
        const res = await axiosSecure.get(`/paymentEnrolledClasses?email=${user?.email}`)
        return res.data;
    })
    console.log(enrolled);
    return (
        <Slide>
            <div>
                <h4 className='my-4 text-center'>My Enrolled Class</h4>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {
                        //TODO
                        enrolled.map(enroll => <div className="col"
                            key={enroll._id}
                        >
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