import React from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Slide } from 'react-awesome-reveal';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    // TODO: loading 
    // console.log(cart)

    const handlerDelete = c => {
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
                fetch(`https://assaignment-12-backend-server.vercel.app/carts/${c._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `Your ${c.name} class has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <Slide>
            <div className='bg-color mx-auto'>
                <div className="ms-4 pt-4 pb-3">
                    <h3 className='my-3 ms-4'>Total Class: {cart.length}</h3>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            <th scope="col">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((c, index) => <tr
                                key={c._id}
                            >
                                <td className='pt-3' scope="row">{index + 1}</td>
                                <td className='pt-3' colSpan="1">{c.name}</td>
                                <td className='pt-3'>{c.price}</td>
                                <td><button onClick={() => handlerDelete(c)} className='btn btn-danger'><FaTrashAlt /></button></td>
                                <td>
                                    <Link to={`/dashboard/payment/${c._id}`}><button className='btn btn-primary'>Pay</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div >
        </Slide>
    );
};

export default MyCart;