import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import Products from "../Components/Products/Products";
import { useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const products = useLoaderData();
  return (
    <div className="dark:bg-slate-900">
      <div className="shadow-lg">
        <Navbar></Navbar>
      </div>
      <div>
        <Products products={products}></Products>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductPage;
