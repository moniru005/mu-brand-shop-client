import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Headers";
import Products from "../Components/Products/Products";
import Brands from "../Components/Sections/Brands/Brands";
import DiscoverCollections from "../Components/Sections/DiscoverCollections";
import About from "../Components/About/About";
import { useLoaderData } from "react-router-dom";
import Testimonials from "../Components/Testimonials/Testimonials";


const Home = () => {
    const products = useLoaderData();
    return (
        <div className=" dark:text-white">
            <Headers></Headers>
            <div className="dark:bg-slate-900">
            <Brands></Brands>
            <Products products={products}></Products>
            <DiscoverCollections></DiscoverCollections>
            <About></About>
            <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;