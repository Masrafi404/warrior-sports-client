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
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
            },
            {
                path: 'manageUsers',
                element: <PrivateRoutes><AllUsers></AllUsers></PrivateRoutes>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
]);
