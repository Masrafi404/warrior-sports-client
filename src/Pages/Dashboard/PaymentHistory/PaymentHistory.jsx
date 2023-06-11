import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
    const [pHistory, setPHistory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => {
                setPHistory(data)
            })
    }, [])
    return (
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
                            <td colspan="2">{history.transactionId
                            }</td>
                            <td>Class Running</td>
                            <td>{history.date}</td>
                            <td>${history.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;