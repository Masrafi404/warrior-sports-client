import React from 'react';
import Manage from './Manage';

const ManageClass = ({ manageClass }) => {
    const {
        availableSeats,
        _id,
        image,
        course,
        instructor_name,
        instructor_email
    } = manageClass
    return (
        <>
            {
                course.map(manage => <Manage
                    key={_id}
                    manage={manage}
                    instructor_name={instructor_name}
                    instructor_email={instructor_email}
                ></Manage>)
            }
        </>
    );
};

export default ManageClass;