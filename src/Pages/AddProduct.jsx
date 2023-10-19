import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";

const AddProduct = () => {
  return (
    <>
    <div className="shadow-lg">
        <Navbar></Navbar>
    </div>
      <div className="bg-stone-100 p-20">
        <h2 className="text-3xl font-extrabold my-10 text-center">
          Add Product
        </h2>

        <form className="border-2 p-4">
          {/* row-1 (Name and Quantity)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-2 (Supplier Taste)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="category"
                  placeholder="Product Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <span>$</span>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-3 (category and Details)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="">
                <textarea
                  name="description"
                  id=""
                  cols="10"
                  rows="3"
                  className="w-full p-4"
                ></textarea>
              </label>
            </div>
          </div>
          {/* row-4 (Photo URL)*/}
          <div className=" mb-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
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
    </>
  );
};

export default AddProduct;
