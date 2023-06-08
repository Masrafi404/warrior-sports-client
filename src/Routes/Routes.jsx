import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/User/LogIn/LogIn";
import SignUp from "../Pages/User/SignUp/SignUp";




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
                path: '/*',
                element: <Error></Error>
            }
        ]
    },
]);
