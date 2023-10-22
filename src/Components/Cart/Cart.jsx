
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = ({ cart, carts, setCarts }) => {
  // console.log(cart);
  const {_id, photo1, name, price} = cart || {};

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");

              const remaining = carts.filter(cart => cart._id !== _id);
              setCarts(remaining);
            }
            
          });
      }
    });

  };
  
  return (
    <div className="">
      <div className="my-6 flex flex-col gap-y-10 ">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 font-semibold items-center">
                  <img className="w-16 rounded" src={photo1} alt="" />
                  <h2>{name}</h2>
                </div>
                <div className="flex items-center gap-10 ">
                  <select className="select select-bordered ">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                  <p className="text-xl font-bold">$ {price}</p>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="pr-5 text-gray-400 hover:text-red-500"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Cart;
