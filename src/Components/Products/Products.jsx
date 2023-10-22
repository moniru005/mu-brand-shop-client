import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({products}) => {
  const [isShowAll, setIsShowAll] = useState(false);
  



  
  return (
    <div>
      <div className=" 2xl:container 2xl:mx-auto font-worSans py-10">
        <div className=" lg:py-10 md:py-8 py-6">
          <p className="w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-slate-600  dark:text-white">
            Winter Collections
            <hr />
          </p>
        </div>

        <div className=" py-6 lg:px-20 md:px-6 px-4 font-worSans">
          <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600 dark:text-white">
            Showing {products.length} products
          </p>
        </div>

        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10 lg:px-20 md:px-6 px-4">
          { 
            isShowAll ? 
            products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            : 
            products?.slice(0, 6).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
          }
        </div>

        <div className=" flex justify-center items-center">
        {
            !isShowAll ?
            <button
            onClick={() => setIsShowAll(!isShowAll)}
            className={`mb-6 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-6 md:mt-6 mt-6 text-white font-medium text-base leading-4 `}
          >
            Load More
          </button>
          :
          ''
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
