import Swal from "sweetalert2";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import {  useNavigate } from "react-router-dom";



const AddProduct = () => {

  const navigate = useNavigate()
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const details = form.details.value;
    const ratings = form.ratings.value;
    const photo1 = form.photo1.value;
    const photo2 = form.photo2.value;
    const photo3 = form.photo3.value;

    const newProduct = {
      name,
      brand,
      category,
      price,
      description,
      details,
      ratings,
      photo1,
      photo2,
      photo3,
    };
    console.log(newProduct);

    fetch(
      "https://mu-brand-shop-server-l04p2omml-md-monir-uddins-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product successfully added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
        navigate('/');
      });
  };

  return (
    <>
      <div className="dark:bg-slate-900 ">
      <div className="shadow-lg">
        <Navbar></Navbar>
      </div>
      <div className=" p-20 ">
        <h2 className="text-3xl font-extrabold my-10 text-center dark:text-white">
          Add Product
        </h2>

        <form onSubmit={handleAddProduct} className=" p-4 border-pink-300 border rounded">
          {/* row-1 (Name and Brand)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-[70%]">
              <label className="label">
                <span className="label-text dark:text-white">Product Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full focus:outline-slate-600 focus:outline-1 focus:border-none"
                />
              </label>
            </div>
            <div className="form-control md:w-[30%]">
              <label className="label">
                <span className="label-text dark:text-white">Brand</span>
              </label>
              <label className=" ">
              <select name="brand" className="select select-bordered w-full max-w-xs focus:outline-slate-600 focus:outline-1 focus:border-none">
                  <option disabled selected>
                    Select Brand
                  </option>
                  <option>Gucci</option>
                  <option>Prada</option>
                  <option>Versace</option>
                  <option>Dior</option>
                  <option>Chanel</option>
                  <option>Burberry</option>
                </select>
              </label>
            </div>
          </div>
          {/* row-2 (Category and Price)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-[70%]">
              <label className="label">
                <span className="label-text dark:text-white">Category</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="category"
                  placeholder="Product Category"
                  className="input input-bordered w-full focus:outline-slate-600 focus:outline-1 focus:border-none"
                />
              </label>
            </div>
            <div className="form-control md:w-[30%]">
              <label className="label">
                <span className="label-text dark:text-white">Price</span>
              </label>
              <label className="input-group">
                <span>$</span>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full focus:outline-slate-600 focus:outline-1 focus:border-none"
                />
              </label>
            </div>
          </div>
          {/* row-3 (Description and Rating)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-[70%]">
              <label className="label">
                <span className="label-text dark:text-white">Description</span>
              </label>
              <label className="">
                <textarea
                  name="description"
                  id=""
                  cols="10"
                  rows="1"
                  placeholder="Short Description"
                  className="input input-bordered w-full px-4 py-3 rounded-lg focus:outline-slate-600 focus:outline-1 focus:border-none"
                ></textarea>
              </label>
            </div>

            <div className="form-control md:w-[30%]">
              <label className="label">
                <span className="label-text dark:text-white">Ratings</span>
              </label>
              <label className="">
                <select name="ratings" className="select select-bordered w-full max-w-xs focus:outline-slate-600 focus:outline-1 focus:border-none">
                  <option disabled selected>
                    Select Ratings
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </label>
            </div>
          </div>
          {/* row-3 (Description)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text dark:text-white">Long Description</span>
              </label>
              <label className="">
                <textarea
                  name="details"
                  id=""
                  cols="10"
                  rows="2"
                  placeholder="Long Description"
                  className="input input-bordered w-full px-4 py-3 rounded-lg focus:outline-slate-600 focus:outline-1 focus:border-none"
                ></textarea>
              </label>
            </div>
          </div>
          {/* row-5 (Photo URL)*/}
          <div className="md:flex mb-8 gap-4">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text dark:text-white">Photo 1</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="photo1"
                  placeholder="Photo URL"
                  className="input input-bordered w-full focus:outline-slate-600 focus:outline-1 focus:border-none"
                />
              </label>
            </div>
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text dark:text-white">Photo 2</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="photo2"
                  placeholder="Photo URL"
                  className="input input-bordered w-full focus:outline-slate-600 focus:outline-1 focus:border-none"
                />
              </label>
            </div>
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text dark:text-white">Photo 3</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="photo3"
                  placeholder="Photo URL"
                  className="input input-bordered w-full focus:outline-slate-600 focus:outline-1 focus:border-none"
                />
              </label>
            </div>
          </div>
          <input
            className="btn btn-block bg-slate-600 text-white"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>

      <div className="!bg-white">
        <Footer></Footer>
      </div>
      </div>
    </>
  );
};

export default AddProduct;
