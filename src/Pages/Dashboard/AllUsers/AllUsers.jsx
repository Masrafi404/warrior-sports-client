import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Slide } from 'react-awesome-reveal';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handlerMakeInstructor = user => {
        fetch(`https://assaignment-12-backend-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is and Instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handlerMakeAdmin = user => {
        fetch(`https://assaignment-12-backend-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is and Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <Slide>
            <div className='w-full'>
                <h3 className='my-4'>Manage All User: {users.length}</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Role</th>
                            <th className='ps-5' scope="col"><span className='ps-3'>Set Role</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr
                                key={user._id}
                            >
                                <th scope="row" className='pt-3'><img className='profile-image' src={user.image} alt="" /></th>
                                <td className='pt-4'>{user.name}</td>
                                <td className='pt-4'>{user.email}</td>
                                <td className='pt-4'>
                                    {
                                        user.role === 'admin' && 'Admin'
                                    }
                                    {
                                        user.role === 'instructor' && 'Instructor'
                                    }
                                    {
                                        user?.role ? <></> : <>Student</>
                                    }
                                </td>



                                <td className='pt-3'>
                                    {
                                        user.role === 'admin' ? (
                                            <button className='btn bg-info me-3' disabled>Admin</button>
                                        ) : (
                                            <button className='btn bg-info me-3' onClick={() => handlerMakeAdmin(user)}>Admin</button>
                                        )
                                    }
                                    {
                                        user.role === 'instructor' ? (
                                            <button className='btn bg-info me-3' disabled>Instructor</button>
                                        ) : (
                                            <button className='btn bg-info me-3' onClick={() => handlerMakeInstructor(user)}>Instructor</button>
                                        )
                                    }
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </Slide>
    );
};

export default AllUsers;