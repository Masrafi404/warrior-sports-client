import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/User/LogIn/LogIn";
import SignUp from "../Pages/User/SignUp/SignUp";
import Instructors from "../Pages/Home/Instructors/Instructors";
import Classes from "../Pages/Home/Classes/Classes";
import Dashboard from "../LayOut/Dashboard";
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../Pages/AdminRoute/AdminRout";
// import InstructorRoute from "../Pages/InstructorRoute/InstructorRoute"
import AllClass from "../Pages/Dashboard/AllClass/AllClass";
import Payment from "../Pages/Dashboard/payment/Payment";
import Enrolled from "../Pages/Dashboard/Enrolled/Enrolled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/class',
                element: <Classes></Classes>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'enrolledclass',
                element: <Enrolled></Enrolled>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageclass',
                element: <AdminRoute><AllClass></AllClass></AdminRoute>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
]);
