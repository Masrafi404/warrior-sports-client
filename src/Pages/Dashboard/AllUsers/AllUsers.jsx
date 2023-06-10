import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handlerDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `Your ${user.name} user has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })
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
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
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
                                user.role === 'admin' ? 'Admin' : <button className='btn bg-info' onClick={() => handlerMakeAdmin(user)} ><FaUserShield /></button>
                            }  </td>
                            <td><button onClick={() => handlerDelete(user)} className='btn btn-danger'><FaTrashAlt /></button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;