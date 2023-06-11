import React from 'react';
import useClass from '../../../hooks/useClass';
import ManageClass from './ManageClass';

const AllClass = () => {
    const [allClass] = useClass()
    return (
        <div>
            <h3 className='mt-5 mb-3 text-center'>Manage All Class</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {allClass.map(manageClass => (
                    <ManageClass key={manageClass.id} manageClass={manageClass} />
                ))}
            </div>
        </div>
    );
};

export default AllClass;