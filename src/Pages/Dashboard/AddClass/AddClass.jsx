import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/Provider/AuthProvider';
import { Slide } from 'react-awesome-reveal';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userImage = user?.photoURL;

    const handlerAddClass = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value
        const image = form.image.value
        const instructor_name = form.instructor_name.value
        const instructor_email = form.instructor_email.value
        const instructor_image = form.instructor_image.value
        const availableSeats = form.availableSeats.value
        const price = form.price.value;
        const status = 'pending'
        const course = [
            {
                image,
                name,
                availableSeats,
                price,
                status
            }
        ]
        const addClass = {
            instructor_email,
            instructor_image,
            instructor_name,
            course
        }

        fetch('https://assaignment-12-backend-server.vercel.app/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
        form.reset()
    }

    return (
        <Slide>
            <div className="container">
                <h1>Add a Class</h1>
                <form onSubmit={handlerAddClass}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Class Name</label>
                            <input required={true} type="text" className="form-control" name="name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Class Image</label>
                            <input required={true} type="text" className="form-control" name="image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Instructor Name</label>
                            <input
                                required={true}
                                type="text"
                                className="form-control"
                                defaultValue={userName}
                                readOnly
                                name="instructor_name"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Instructor Email</label>
                            <input
                                required={true}
                                type="text"
                                className="form-control"
                                defaultValue={userEmail}
                                readOnly
                                name="instructor_email"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Instructor Image</label>
                            <input required={true} type="text" defaultValue={userImage}
                                readOnly className="form-control" name="instructor_image" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Available Seats</label>
                            <input required={true} type="text" className="form-control" name="availableSeats" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <label className="form-label">Price</label>
                            <input required={true} type="text" className="form-control" name="price" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-primary mt-3' type="submit" value="add" />
                    </div>
                </form>
            </div>
        </Slide>
    );
};

export default AddClass;
