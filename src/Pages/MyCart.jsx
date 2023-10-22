import { useLoaderData } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Navbar from "../Components/Header/Navbar";
import { useState } from "react";


const MyCart = () => {
  const loadCarts = useLoaderData();
  const [carts, setCarts] = useState(loadCarts);
  
  const priceArray = [];
  for(let cart of carts){
    const price = cart.price;
    priceArray.push(parseInt(price))
  }

//   console.log(priceArray);
 
  const sum = price => price.reduce((acc, current) => acc + current, 0);
  const result = sum(priceArray);
 



  


  return (
    <div>
      <div className="shadow-lg">
      <Navbar></Navbar>
      </div>
      {/* Cart section */}
      <div className="flex lg:flex-row flex-col max-w-6xl mx-auto font-worSans lg:gap-10 p-4">
        {/* Left side */}
        <div className="my-10 lg:w-4/6">
          <h2 className="my-6 text-xl font-semibold">Your Cart</h2>

          <div className="">
            <hr />
            {
            carts.map(cart => <Cart 
                key={cart._id} 
                cart={cart}
                carts={carts}
                setCarts={setCarts}
                ></Cart>)
            }
          </div>
          <hr />
        </div>

        {/* Right side */}
        <div className="lg:w-2/6 mb-10 mt-20 bg-slate-100 rounded lg:px-10 lg:py-6 px-4">
            <div className="flex  justify-between items-center  text-xl font-medium text-gray-400 pt-6">
                <p>Stubtotal</p>
                <p>$ {result}</p>
            </div>
            <hr className="my-6" />
            <div className="flex  justify-between items-center  text-xl font-medium text-gray-400">
                <p>Tax</p>
                <p>$ 0</p>
            </div>
            <hr className="my-6" />
            <div className="flex  justify-between items-center  text-xl font-medium text-gray-400">
                <p>Shipping</p>
                <p>$ 0</p>
            </div>
            <hr className="my-6" />
            <div className="flex  justify-between items-center  text-xl font-semibold text-gray-600">
                <p>Total</p>
                <p>$ {result}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
