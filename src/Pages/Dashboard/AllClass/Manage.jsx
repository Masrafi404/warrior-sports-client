import React from 'react';

const Manage = ({ manage, instructor_name }) => {
    const {
        availableSeats,
        image,
        name,
        price
    } = manage

    return (
        <div className="col">
            <div className="card">
                <img card-img src={image} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Instructor : {instructor_name}</h5>
                    <h6>Name: {name}</h6>
                    <p className="mb-1">Available Seat: {availableSeats}</p>
                    <p className="mb-2">Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Manage;