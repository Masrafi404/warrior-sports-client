import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/Provider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    const [errorSign, setErrorSign] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const { createUser, googleSignUp, updateUserProfile } = useContext(AuthContext)
    const signUpSubmitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const photoURL = e.target.image.value
        if (password !== confirmPassword) {
            setError('Confirm Password does not match')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least on uppercase')
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Password should contain at least one special character')
            return
        }
        createUser(email, password)
            .then((result) => {
                updateUserProfile(name, photoURL)
                const user = result.user
                e.target.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorMassage = error.message;
                setErrorSign(errorMassage)
            })
    }

    const googleSignup = () => {
        googleSignUp()
            .then(result => {
                const user = result.user
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className="body mb-5">
            <div className='mt-5 signup-container'>
                <form onSubmit={signUpSubmitHandler} className="signup-header">
                    <div className='d-flex justify-content-center align-content-center mt-5'>
                        <h4 className='mt-4'>Continue With</h4>
                        <img onClick={googleSignup}
                            className='btn google-image' src="https://i.ibb.co/cQTPVFh/download-1-removebg-preview.png" alt="" />
                    </div>
                    <div className="d-flex mx-3">
                        <hr className='w-50' />Or<hr className='w-50' />
                    </div>
                    <h4 className=' mt-5 mb-3 text-black text-center'>Please Register</h4>
                    <div className="text-center">
                        <input name='name' className='input-field ps-3' type="text" placeholder='User Name' required /></div><br />
                    <div className="text-center">
                        <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /></div><br />
                    <div className="text-center">
                        <input name='password' className='input-field-pass ps-3 mb-0' type={show ? "text" : "password"} placeholder='Password' required /></div><br />
                    <p className='mt-0 ms-5'>
                        <small className='text-white'>
                            {show ?
                                <span className='ms-3 text-black'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Hide Password</span> :
                                <span className='ms-3 text-black'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Show password</span>}
                        </small>
                    </p>
                    <div className="text-center">
                        <input name='confirmPassword' className='input-field ps-3' type={show ? "text" : "password"} placeholder='Confirm Password' required /></div><br />
                    <div className="text-center">
                        <input name='image' className='input-field ps-3' type="text" placeholder='image Url'
                            required /></div> <br />
                    <span className='ms-5'>
                        {
                            error && <small className='text-danger ms-3'>{error}</small>
                        } </span><br />
                    <div className="text-center">
                        <input className='btn bg-white text-black mt-2' type="submit" value="Register" />

                    </div><br />
                    <div className="d-flex ms-4">
                        <p className='text-black ms-5 me-3'>Already Account <Link to="/logIn">Login</Link></p>
                    </div>
                    <span className='ms-5'>
                        {
                            errorSign && <small className='text-danger m-3'>{errorSign}</small>
                        }
                    </span>
                </form>
            </div >
        </div>

    );
};

export default SignUp;

