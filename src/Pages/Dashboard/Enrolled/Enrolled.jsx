import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Enrolled = () => {
    const [enrolled, setEnrolled] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default Enrolled;