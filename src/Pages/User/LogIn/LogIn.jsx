import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Shared/Provider/AuthProvider';

const LogIn = () => {
    const { logInUser, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const loginHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password)
            .then((logIn) => {
                const user = logIn.user
                e.target.reset()
            })
            .catch((error) => {
                const errorMassage = error.message
                setError(errorMassage)
            })

    }
    const googleSignin = () => {
        googleSignIn()
            .then(result => {
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='mt-5'>
            <div className='body signup-container'>
                <form onSubmit={loginHandler} className="signup-header">
                    <div className='d-flex justify-content-center align-content-center mt-5'>
                        <h4 className='mt-4'>Continue With</h4>
                        <img onClick={googleSignin}
                            className='btn google-image' src="https://i.ibb.co/cQTPVFh/download-1-removebg-preview.png" alt="" />
                    </div>
                    <div className="d-flex mx-3">
                        <hr className='w-50' />Or<hr className='w-50' />
                    </div>
                    <h4 className=' mt-2 mb-3 text-black text-center'>Please Login</h4>
                    <div className="text-center">
                        <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /></div><br />
                    <div className="text-center mb-0">
                        <input name='password' className='input-field ps-3 mb-0' type={show ? "text" : "password"} placeholder='Password' required /></div><br />
                    <p className='mt-0 ms-5'>
                        <small className='text-black'>
                            {show ? <span className='ms-3'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Hide Password</span>
                                : <span className='ms-3'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Show password</span>}
                        </small>
                    </p>
                    {
                        error && <p className='ms-4 m-0'> <small className='text-danger ms-5'>{error}</small></p>
                    } <br />
                    <span>
                        <div className="text-center">
                            <input className='btn bg-black text-white mb-2 mt-0' type="submit" value="Login" /> <br />
                            <div className="d-flex ms-4">
                                <p className='text-black md:ms-5 lg:ms-5 xl:ms-5 lg:ms-0 mb-5'>New Hare? <Link className='me-2' to="/signup">Create An Account</Link></p>
                            </div>
                        </div>
                    </span>
                </form>
            </div >
        </div>
    );
};

export default LogIn;




