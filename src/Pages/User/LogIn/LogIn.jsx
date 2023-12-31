import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Shared/Provider/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {
    const { logInUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = data => {
        const { email, password } = data;
        logInUser(email, password)
            .then(result => {
                const user = result.user;


                const saveUser = { name: user.displayName, email: user.email, image: user?.photoURL }

                fetch('https://assaignment-12-backend-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Login Successful.',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate(from, { replace: true });

                    })
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const googleSignin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;


                const saveUser = { name: user.displayName, email: user.email, image: user?.photoURL }

                fetch('https://assaignment-12-backend-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Login Successful.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });

                    })

            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className='my-5'>
            <div className='body signup-container'>
                <form onSubmit={handleSubmit(onSubmit)} className="signup-header pt-1">
                    <div className='d-flex justify-content-center align-content-center mt-5'>
                        <h4 className='mt-4'>Continue With</h4>
                        <img
                            onClick={googleSignin}
                            className='btn google-image mt-1'
                            src="https://i.ibb.co/cQTPVFh/download-1-removebg-preview.png"
                            alt=""
                        />
                    </div>
                    <div className="d-flex mx-3">
                        <hr className='w-50' />
                        Or
                        <hr className='w-50' />
                    </div>
                    <h4 className='mt-2 mb-3 text-black text-center'>Please Login</h4>
                    <div className="text-center">
                        <input
                            {...register('email', { required: true })}
                            className='input-field ps-3'
                            type="email"
                            placeholder='Email'
                        />
                    </div>
                    {errors.email && <p className='text-danger'>Email is required.</p>}
                    <br />
                    <div className="text-center mb-0">
                        <input
                            {...register('password', { required: true })}
                            className='input-field ps-3 mb-0'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                        />
                    </div>
                    {errors.password && <p className='text-danger'>Password is required.</p>}
                    <br />
                    <p className='mt-0 ms-5'>
                        <small className='text-black'>
                            <input
                                {...register('showPassword')}
                                type="checkbox"
                                onChange={() => setShowPassword(!showPassword)}
                            />{' '}
                            {showPassword ? 'Hide Password' : 'Show Password'}
                        </small>
                    </p>
                    {error && <p className='text-danger ms-5'>{error}</p>}
                    <br />
                    <div className="text-center">
                        <input className='btn bg-black text-white mb-2 mt-0' type="submit" value="Login" /> <br />
                        <div className="d-flex ms-4">
                            <p className='text-black md:ms-5 lg:ms-5 xl:ms-5 lg:ms-0 mb-5'>
                                New Here? <Link className='me-2' to="/signup">Create An Account</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
