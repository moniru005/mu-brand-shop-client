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
import ProductDetails from "../Components/Products/ProductDetails";
import ProductPage from "../Pages/ProductPage";
import AboutUs from "../Pages/AboutUs";

import UpdateProduct from "../Pages/updateProduct";




const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://mu-brand-shop-server-py07srdqc-md-monir-uddins-projects.vercel.app/products/`)
                                
            },
          
            {
                path: '/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch("https://mu-brand-shop-server-py07srdqc-md-monir-uddins-projects.vercel.app/carts")
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
                path: '/brandsProduct/:brand_name',
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch(`https://mu-brand-shop-server-py07srdqc-md-monir-uddins-projects.vercel.app/products/`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch(`https://mu-brand-shop-server-py07srdqc-md-monir-uddins-projects.vercel.app/products`)
            },
            {
                path: '/shop',
                element: <ProductPage></ProductPage>,
                loader: () => fetch(`https://mu-brand-shop-server-py07srdqc-md-monir-uddins-projects.vercel.app/products/`)
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader:({params}) => fetch(`https://mu-brand-shop-server-py07srdqc-md-monir-uddins-projects.vercel.app/products/${params.id}`)
            }
        ]
    }
])

export default Router;