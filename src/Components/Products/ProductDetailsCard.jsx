import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const ProductDetailsCard = ({ product }) => {
  const {  name, price, photo1, photo2, photo3, ratings, details } = product || {};

    const navigate = useNavigate();
    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    const handleCart = () =>{
      const cartInfo = {
        name, photo1, price
      }
      console.log(cartInfo);
  
      fetch("https://mu-brand-shop-server-l04p2omml-md-monir-uddins-projects.vercel.app/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added to Cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

      navigate('/cart');
  
    }




  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4 dark:text-white" >
              {name}
            </h2>

            <div className=" flex flex-row justify-between  mt-5">
            <div className="rating flex flex-row-reverse gap-1 justify-center items-center font-worSans">
             <p> <FaStar className="text-xl text-green-500"></FaStar> </p>
              <p className="text-2xl font-medium dark:text-green-500 ">{ratings}</p>
            </div>
            </div>

            <p className=" font-normal text-base leading-6 text-gray-600 mt-7 dark:text-white">
              {details}
            </p>
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">
              $ {price}
            </p>

            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600 dark:text-white">
                  Select quantity
                </p>
                <div className="flex">
                  <span
                    onClick={minusCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1 dark:text-white"
                  >
                    -
                  </span>
                  <input
                    id="counter"
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="text"
                    value={count}
                    onChange={(e) => e.target.value}
                  />
                  <span
                    onClick={addCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 dark:text-white"
                  >
                    +
                  </span>
                </div>
              </div>
              <hr className=" bg-gray-200 w-full my-2" />
            </div>

            <button onClick={handleCart} className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
              Add to shopping bag
            </button>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img
                src={photo1}
                alt="Wooden Chair Previw"
              />
            </div>
            <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
              <div className="w-20 bg-gray-100 flex justify-center items-center py-4">
                <img className="w-full"
                  src={photo1}
                />
              </div>
              <div className="w-20 bg-gray-100 flex justify-center items-center py-4">
                <img className="w-full"
                  src={photo2}
                />
              </div>
              <div className="w-20 bg-gray-100 flex justify-center items-center py-4">
                <img className=""
                  src={photo3}
                />
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default ProductDetailsCard;
ProductDetailsCard.propTypes = {
  product: PropTypes.node,
}