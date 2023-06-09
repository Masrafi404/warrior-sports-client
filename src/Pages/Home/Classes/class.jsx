import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ClassName = ({ classData }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const {
        availableSeats,
        _id,
        image,
        instructor,
        name,
        price
    } = classData;

    const handleSelect = () => {
        if (!user) {
            navigate('/login')
            return;
        }
        let email = user?.email
        const select = { email, name, instructor, image, price, availableSeats }
        console.log(select)

        fetch('http://localhost:5000/select', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(select)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };

    return (
        <div className="col">
            <div className="card">
                <img card-img src={image} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Instructor : {instructor}</h5>
                    <h6>Name: {name}</h6>
                    <p className="mb-1">Available Seat: {availableSeats}</p>
                    <p className="mb-2">Price: ${price}</p>
                    <button onClick={handleSelect} className="btn btn-outline-primary">
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClassName;
