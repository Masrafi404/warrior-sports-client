import React, { useEffect, useState } from 'react';
import InsSl from '../../InsSl/InsSl';

const InstructorP = () => {
    const [ins, setIns] = useState([])
    const slice = ins.slice(0, 6)
    // console.log(slice)
    useEffect(() => {
        fetch('https://assaignment-12-backend-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setIns(data)
            })
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {
                slice.map(sl => <InsSl
                    key={sl._id}
                    sl={sl}
                ></InsSl>)
            }
        </div>
    );
};

export default InstructorP;