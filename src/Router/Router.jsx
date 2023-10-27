import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


const Router  = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path: '/book/:id',
          element:<BookService></BookService>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

export default Router;