import React from 'react';
import useClass from '../../../hooks/useClass';

const Manage = ({ manage, instructor_name, instructor_email }) => {
    const {
        availableSeats,
        image,
        name,
        price
    } = manage


    const [allClass] = useClass()

    return (
        <div className="col">
            <div className="card">
                <img card-img src={image} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className='mb-1'>Instructor Name: {instructor_name}</p>
                    <p className='mb-1'>Instructor Email: {instructor_email}</p>
                    <p className="mb-1">Available Seat: {availableSeats}</p>
                    <p className="mb-1">Price: ${price}</p>
                    <p className='mb-2'>Status: <button className='btn btn-primary'>Approved</button> <button className='btn btn-info'>Pending</button> <button className='btn btn-danger'>Denied</button></p>
                </div>
            </div>
        </div>
    );
};

export default Manage;