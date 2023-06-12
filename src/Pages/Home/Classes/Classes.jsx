import React, { useEffect, useState } from 'react';
import Class from './class/Class';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setIsLoading(false); // Mark loading as false once data is fetched
            })
            .catch(error => {
                console.log('Error fetching classes:', error);
                setIsLoading(false); // Mark loading as false in case of an error
            });
    }, []);

    return (
        <div>
            <h3 className="mt-1 mb-3 text-center">All Training Class</h3>
            {isLoading ? (
                <div className="d-flex my-5 justify-content-center text-warning">
                    <div className="spinner-border mt-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {classes.map(classItem => (
                        <Class key={classItem.id} classData={classItem} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Classes;
