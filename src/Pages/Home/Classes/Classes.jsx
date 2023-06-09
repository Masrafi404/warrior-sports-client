import React, { useEffect, useState } from 'react';
import Class from './Class';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
            .catch(error => {
                console.log('Error fetching classes:', error);
            });
    }, []);

    return (
        <div>
            <h3 className='mt-5 mb-3 text-center'>All Training Class</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {classes.map(classItem => (
                    <Class key={classItem.id} classData={classItem} />
                ))}
            </div>
        </div>
    );
};

export default Classes;
