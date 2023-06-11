import React, { useEffect, useState } from 'react';
import Instructor from '../instructor/Instructor';

const Instructors = () => {
    const [insTrs, setInsTrs] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setInsTrs(data)
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Error fetching classes:', error);
                setIsLoading(false);
            });
    }, [])
    return (
        <div>
            <h3 className='mt-5 mb-3 text-center'>All Instructors info</h3>
            {
                isLoading ? <div className="d-flex my-5 justify-content-center text-warning">
                    <div className="spinner-border mt-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        {
                            insTrs.map(inst => <Instructor
                                key={inst.id}
                                instructor={inst}
                            ></Instructor>)
                        }
                    </div>
            }
        </div>
    );
};

export default Instructors;