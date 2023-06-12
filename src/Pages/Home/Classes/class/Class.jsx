import React, { useContext } from 'react';
import { AuthContext } from '../../../Shared/Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Cls from './Cls';


const Class = ({ classData }) => {
    const {
        availableSeats,
        _id,
        image,
        course,
        instructor_name
    } = classData;
    // console.log(classData)



    return (
        <>
            {
                course.map(cr => <Cls
                    key={_id}
                    instructor_name={instructor_name}
                    cr={cr}
                ></Cls>)
            }
        </>

    );
};

export default Class;
