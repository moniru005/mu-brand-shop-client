import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";
import Navbar from "../../Header/Navbar";

const BrandProducts = () => {
  const [product, setProduct] = useState([]);
  const products = useLoaderData();
  const { brand_name } = useParams();
  // console.log(brand_name);
  // console.log(products);

  useEffect(() => {
    const matchBrand = products.filter(
      (product) => product.brand === brand_name
    );
    // console.log(matchBrand);

    if (matchBrand) {
      setProduct(matchBrand);
    }
  }, [brand_name, products]);

  return (
    <div>
      <Navbar></Navbar>


      <div className=" 2xl:container 2xl:mx-auto font-worSans">
        <div className=" lg:py-10 md:py-8 py-6">
          <p className="w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-slate-600 ">
            Brand Name: {brand_name}
          </p>
        </div>

        <div className=" py-6 lg:px-20 md:px-6 px-4 font-worSans">
          <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
            Showing {product.length} products
          </p>
        </div>

        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10 py-6 lg:px-20 md:px-6 px-4 ">
          {product.map((item) => (
            <BrandProductsCard
              key={item._id}
              product={item}
            ></BrandProductsCard>
          ))}
        </div>

        <div className=" flex justify-center items-center">
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
