import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Shared/Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";


const CheckOutForm = ({ cart, price, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                image: cart.map(item => item.image),
                status: 'service approved',
                itemNames: cart.map(item => item.name),
                instructor_Names: cart.map(item => item.instructor_name),
                instructor_image: cart.map(item => item.instructor_image)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {

                    }
                })
        }


    }

    return (
        <>
            <form className="w-75 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-4 ms-4" type="submit" disabled={!stripe || !clientSecret || processing}> Pay </button>
            </form>
            {cardError && <p className="text-danger ms-4 mt-3">{cardError}</p>}
            {transactionId && <p className="text-success ms-4 mt-3">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;