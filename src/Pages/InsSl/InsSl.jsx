import React from 'react';

const InsSl = ({ sl }) => {
    const { instructor_image, instructor_name, instructor_email } = sl
    return (
        <div className="col">
            <div className="card">
                <img card-img src={instructor_image} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {instructor_name}</h5>
                    <p>Email: {instructor_email}</p>
                </div>
            </div>
        </div>
    );
};

export default InsSl;