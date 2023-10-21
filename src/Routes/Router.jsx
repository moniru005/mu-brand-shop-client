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




const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/products/`)
            },
            {
                path: '/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/carts")
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
                loader: () => fetch(`http://localhost:5000/products/`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch(`http://localhost:5000/products`)
            },
            {
                path: '/shop',
                element: <ProductPage></ProductPage>,
                loader: () => fetch(`http://localhost:5000/products/`)
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>

            }
        ]
    }
])

export default Router;