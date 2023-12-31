import { useEffect } from "react";
import { useState } from "react";
import BrandCard from "./BrandCard";
import Title from "../../Title/Title";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div >
      <Title heading={"International Brands"} paragraph={"Experience the Excellence of Our International Brands"}></Title>
      {/* <div className=" text-center lg:py-10 md:py-8 py-6 font-worSans ">
        <p className="uppercase w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-slate-600 dark:text-white">
          International Brands
          <hr />
        </p>
      </div> */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6  gap-y-10 px-6 justify-items-center items-center my-10 font-worSans">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
