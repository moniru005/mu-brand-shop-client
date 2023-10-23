import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import Navbar from "../Header/Navbar";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const products = useLoaderData();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const findProduct = products.find((item) => item._id === id);
    // console.log(findProduct);
    setProduct(findProduct);
  }, [id, products]);

  return <div>
    <div className="dark:bg-slate-900">
        <div className="shadow-lg">
        <Navbar></Navbar>
        </div>
        {
            <ProductDetailsCard product={product}></ProductDetailsCard>
        }
    </div>
  </div>;
};

export default ProductDetails;
