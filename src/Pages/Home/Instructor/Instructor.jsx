import React from 'react';

const Instructor = ({ instructor }) => {
    const { name, image, email } = instructor
    return (
        <div className="col">
            <div className="card">
                <img card-img src={image} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;