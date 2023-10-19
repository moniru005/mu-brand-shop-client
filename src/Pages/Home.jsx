import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Headers";
import Products from "../Components/Products/Products";
import Brands from "../Components/Sections/Brands/Brands";

import DiscoverCollections from "../Components/Sections/DiscoverCollections";


const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <DiscoverCollections></DiscoverCollections>
            <Brands></Brands>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;