import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    return (
        <nav className="navbar navbar-expand-lg nav-color">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/fdStsQh/wsa-letter-technology-logo-design-on-white-background-wsa-creative-initials-letter-it-logo-concept-w.jpg" width={50} className='rounded-5' alt="" /></Link>
                <div className='my-auto'>
                    <h5 className='m-0'>Warrior</h5>
                    <p className='m-0'>Sports Academy</p>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="class">Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="instructors">Instructors</Link>
                        </li>
                        {
                            user && <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        }
                    </ul>

                    <form className="d-flex" role="search">


                        {
                            user ? <><img className='profile-image' title={user.email} src={user.photoURL} alt="" /> <Link onClick={handleLogOut} className='btn btn-outline-primary my-auto ms-3' to="/">LogOut</Link></> : <Link className='btn btn-outline-primary' to="/login">Login</Link>
                        }
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;