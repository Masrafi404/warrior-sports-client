import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../Shared/Provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: pHistory = [], refetch } = useQuery(['/paymentHistories'], async () => {
        const res = await axiosSecure.get(`/paymentHistories?email=${user?.email}`)
        return res.data;
    })
    console.log(pHistory);
    return (
        <Slide>
            <div className=''>
                <h3 className='text-center mt-4'>Payment History</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Payment Method</th>
                            <th scope="col" colSpan={2}>Payment Reference ID</th>
                            <th scope="col">Status</th>
                            <th scope="col">Enroll Date</th>
                            <th scope="col">Amount Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pHistory.map(history => <tr
                                key={history._id}>
                                <td>Credit Card</td>
                                <td colSpan="2">{history.transactionId
                                }</td>
                                <td>Approved Student</td>
                                <td>{history.date}</td>
                                <td>${history.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Slide>
    );
};

export default PaymentHistory;