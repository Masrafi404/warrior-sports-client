import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Shared/Provider/AuthProvider';
import SingleClass from '../SingleClass/SingleClass';

const MyClass = () => {
    const [myClasses, setMyClasses] = useState([]);
    const { user } = useContext(AuthContext);

    const fetchClasses = () => {
        fetch(`http://localhost:5000/addClass?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClasses(data);
            })
            .catch(error => {
                console.log('Error fetching classes:', error);
            });
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    return (
        <div>
            <h3 className='text-center my-4'>My Class</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {myClasses.map(cls => (
                    <SingleClass key={cls.id} cls={cls} />
                ))}
            </div>
        </div>
    );
};

export default MyClass;
