import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoute from "./PrivateRouter";
import BrandProducts from "../Components/Sections/Brands/BrandProducts";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products/:brand_name',
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch(`http://localhost:5000/products/`)
            }
        ]
    }
])

export default Router;