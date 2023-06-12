import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();
    const [errorSign, setErrorSign] = useState('');
    const [show, setShow] = useState(false);

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const { createUser, googleSignUp, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        const { name, email, password, photoURL } = data;

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photoURL);
                const saveUser = { name: name, email: email, image: photoURL }

                fetch('https://assaignment-12-backend-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User Created Successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })

            })
            .catch(error => {
                const errorMassage = error.message;
                setErrorSign(errorMassage);
            });
    };

    const googleSignup = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;

                const saveUser = { name: user.displayName, email: user.email, image: user.photoURL }

                fetch('https://assaignment-12-backend-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Login Successful.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    const passwordValidate = value => {
        const { password } = getValues();
        if (value === password) {
            return true;
        }
        return "Passwords do not match";
    };

    return (
        <div className="body mb-5">
            <div className='mt-5 signup-container'>
                <form onSubmit={handleSubmit(onSubmit)} className="signup-header">
                    <div className='d-flex justify-content-center align-content-center mt-5'>
                        <h4 className='mt-4'>Continue With</h4>
                        <img
                            onClick={googleSignup}
                            className='btn google-image'
                            src="https://i.ibb.co/cQTPVFh/download-1-removebg-preview.png"
                            alt=""
                        />
                    </div>

                    <div className="d-flex mx-3">
                        <hr className='w-50' />Or<hr className='w-50' />
                    </div>

                    <h4 className=' mt-5 mb-3 text-black text-center'>Please Register</h4>
                    <div className="text-center">
                        <input
                            {...register("name", { required: true })}
                            className='input-field ps-3'
                            type="text"
                            placeholder='User Name'
                        />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />

                    <div className="text-center">
                        <input
                            {...register("email", { required: true })}
                            className='input-field ps-3'
                            type="email"
                            placeholder='Email'
                        />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />

                    <div className="text-center">
                        <input
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                            })}
                            className='input-field-pass ps-3 mb-0'
                            type={show ? "text" : "password"}
                            placeholder='Password'
                        />
                        {errors.password?.type === 'required' && (
                            <p className='text-danger'>Password is required</p>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <p className='text-danger'>Password must be at least 6 characters long</p>
                        )}
                        {errors.password?.type === 'pattern' && (
                            <p className='text-danger'>
                                Password must have at least one uppercase letter and one special character
                            </p>
                        )}
                    </div>
                    <br />

                    <p className='mt-0 ms-5'>
                        <small className='text-white'>
                            {show ? (
                                <span className='ms-3 text-black'>
                                    <input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Hide Password
                                </span>
                            ) : (
                                <span className='ms-3 text-black'>
                                    <input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Show password
                                </span>
                            )}
                        </small>
                    </p>

                    <div className="text-center">
                        <input
                            {...register("confirmPassword", {
                                required: true,
                                validate: passwordValidate,
                            })}
                            className='input-field ps-3'
                            type={show ? "text" : "password"}
                            placeholder='Confirm Password'
                        />
                        {errors.confirmPassword && <p className='text-danger'>{errors.confirmPassword.message}</p>}
                    </div>
                    <br />

                    <div className="text-center">
                        <input
                            {...register("photoURL", { required: true })}
                            className='input-field ps-3'
                            type="text"
                            placeholder='Image URL'
                        />
                        {errors.image && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <br />

                    <div className="text-center">
                        <input className='btn bg-white text-black' type="submit" value="Register" />
                    </div>
                    <br />

                    <div className="d-flex ms-4">
                        <p className='text-black ms-5 me-3'>Already have an account? <Link to="/logIn">Login</Link></p>
                    </div>

                    <span className='ms-5 '>
                        {errorSign && <small className='text-danger m-3'>{errorSign}</small>}
                    </span>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
