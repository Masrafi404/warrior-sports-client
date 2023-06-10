import React from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    // TODO: loading 
    console.log(cart)
    // const priceTotal = cart.reduce((sum, item) => item.price + sum, 0)

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
                fetch(`http://localhost:5000/carts/${c._id}`, {
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
        <div className='bg-color mx-auto'>
            <div className="d-flex justify-content-evenly pt-4 pb-3">
                <h3 className=''>Total Class: {cart.length}</h3>
                <h3 className=''>Total Price:</h3>
                <Link className='btn btn-outline-primary'>Payment</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((c, index) => <tr
                            key={c._id}
                        >
                            <td scope="row">{index + 1}</td>
                            <td colSpan="1">{c.name}</td>
                            <td>{c.price}</td>
                            <td><button onClick={() => handlerDelete(c)} className='btn btn-danger'><FaTrashAlt /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyCart;