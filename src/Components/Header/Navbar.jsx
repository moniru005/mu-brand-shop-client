import { Link, NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.png";

const Navbar = () => {
  const navbar = (
    <>
      <div className="flex gap-2">
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/addProduct">Add Product</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/cart">My Cart</NavLink>{" "}
        </li>
      </div>
    </>
  );
  return (
    <div className="lg:max-w-6xl mx-auto font-worSans">
      <div className="navbar bg-base-100 lg:py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <div>
            <a className="btn btn-sm">Login</a>
          </div>
          <div>
            <Link>
              <img className="w-8" src={userPhoto} alt="User Photo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
