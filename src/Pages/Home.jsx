import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Headers";
import Products from "../Components/Products/Products";
import Brands from "../Components/Sections/Brands/Brands";
import DiscoverCollections from "../Components/Sections/DiscoverCollections";
import About from "../Components/About/About";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <Headers></Headers>
            <Brands></Brands>
            <Products products={products}></Products>
            <DiscoverCollections></DiscoverCollections>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;