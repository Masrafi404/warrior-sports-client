import React from 'react';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
import { useLoaderData } from 'react-router-dom';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)
const Payment = () => {
    const [cart, refetch] = useCart()

    const data = useLoaderData()
    const price = data?.price
    // const price = parseFloat(amount?.toFixed(2))
    // console.log(data)

    // const total = cart.reduce((sum, item) => sum + item.price, 0)
    // const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-50 mx-auto'>
            <h4 className='text-center my-4'>Pay with card</h4>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={data} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;