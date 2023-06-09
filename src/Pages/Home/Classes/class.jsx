import React from 'react';

const className = ({ classData }) => {
    const {
        availableSeats,
        id,
        image,
        instructor,
        name,
        price } = classData
    console.log(classData)
    return (
        <div className="col">
            <div className="card">
                <img card-img src={image} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Instructor : {instructor}</h5>
                    <h6>Name: {name}</h6>
                    <p className='mb-1'>Available Seat: {availableSeats}</p>
                    <p className='mb-2'>Price: ${price}</p>
                    <button className='btn btn-outline-primary'>Select</button>
                </div>
            </div>
        </div>

    );
};

export default className;