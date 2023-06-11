import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Shared/Provider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    // TODO: load data from the server to have dynamic isAdmin
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand d-md-none" to="">Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                isAdmin && <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/manageClass">Manage Class</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/manageUsers">Manage Users</Link>
                                    </li>
                                </>
                            }
                            {
                                isInstructor === 'instructor' && <>
                                    <li>Hello Bro</li>
                                </>
                            }
                            {
                                !isAdmin && !isInstructor && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard/mycart">Selected Class</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard/enrolledclass">Enrolled Class</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard/paymenthistory">Payment History</Link>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;