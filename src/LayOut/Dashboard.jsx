import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Shared/Provider/AuthProvider';
import { GiTeacher } from 'react-icons/gi';
import { FaHome, FaMoneyCheckAlt } from 'react-icons/fa';
import { BsWindowPlus } from 'react-icons/bs';
import { AiOutlineProfile } from 'react-icons/ai';
import { TbSelect } from 'react-icons/tb';
import { SiVisualstudiocode } from 'react-icons/si';
import { MdOutlineManageAccounts } from 'react-icons/md';

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
                                <Link className="nav-link active" aria-current="page" to="/"><FaHome className='mb-1' /> Home</Link>
                            </li>
                            {
                                isAdmin && <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/manageClass"><GiTeacher className='mb-1' /> Manage Class</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/manageUsers"><MdOutlineManageAccounts /> Manage Users</Link>
                                    </li>
                                </>
                            }
                            {
                                isInstructor && <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/addclass"><BsWindowPlus className='mb-1' /> Add Class</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/myclass"><AiOutlineProfile className='mb-1' /> My Class</Link>
                                    </li>
                                </>
                            }
                            {
                                !isAdmin && !isInstructor && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard/mycart"><TbSelect className='mb-1' /> Selected Class</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard/enrolledclass"><SiVisualstudiocode className='mb-1' /> Enrolled Class</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard/paymenthistory"><FaMoneyCheckAlt className='mb-1' /> Payment History</Link>
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