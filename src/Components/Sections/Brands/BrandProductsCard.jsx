import PropTypes from 'prop-types';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Auth/AuthProvider';
import { Link } from 'react-router-dom';

const BrandProductsCard = ({ product }) => {

  console.log(product);
  const { _id, name, price, photo1, rating } = product || {};

  const {user} = useContext(AuthContext);
  // console.log(user);
  

  const handleCart = () =>{
    const cartInfo = {
      name, photo1, price
    }
    console.log(cartInfo);

    fetch("http://localhost:5000/carts", {
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

  }

  return (
    <div>
      <div className="  border-2 ">
        <div className="relative group">
          <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full "></div>
          <img
            className=" w-full"
            src={photo1}
            alt="Girl wearing pink suit posing"
          />
          <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
            <button onClick={handleCart} className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full hover:bg-black hover:text-white">
              Add to Cart
            </button>
            <Link to={`/productDetails/${_id}`}>
            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white hover:bg-black hover:text-white">
              Quick View
            </button>
            </Link>
            {
              user ?
              <Link to={`/updateProduct/${_id}`}>
              <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white hover:bg-black hover:text-white">
                Update Product
              </button>
            </Link>
            :
            ''
            }
          </div>
        </div>

        <p className="h-[50px] font-normal text-lg text-center leading-5 text-gray-800 md:mt-6 mt-4 dark:text-white">
          {name}
        </p>
        <div className="flex justify-between items-center gap-10 my-4 px-4 ">
          <p className=" font-semibold text-xl leading-5 text-gray-800 dark:text-white">
            ${price}
          </p>
          <p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500 dark:text-white"
                defaultValue={rating}
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandProductsCard;

BrandProductsCard.propTypes = {
    product: PropTypes.node,
}
