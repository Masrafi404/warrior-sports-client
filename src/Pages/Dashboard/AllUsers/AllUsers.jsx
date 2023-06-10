import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/Gi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handlerMakeInstructor = user => {

    }

    const handlerMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
        <div className='w-full'>
            <h3 className='my-4'>Manage All User: {users.length}</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Admin Role</th>
                        <th scope="col">Instructor Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr
                            key={user._id}
                        >
                            <th scope="row" className='pt-3'>{index + 1}</th>
                            <td className='pt-3'>{user.name}</td>
                            <td className='pt-3'>{user.email}</td>
                            <td className='pt-3'>{
                                user.role === 'admin' ? 'Admin' : <button className='btn bg-info me-3' onClick={() => handlerMakeAdmin(user)} ><FaUserShield title='Make Admin' /></button>
                            }  </td>
                            <td className='pt-3'>{
                                user.role === 'instructor' ? 'Instructor' : <button className='btn bg-info me-3' onClick={() => handlerMakeInstructor(user)} ><GiTeacher title='Make Instructor' /></button>
                            }  </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;