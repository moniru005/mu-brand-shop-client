import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { useTheme } from "../../Hooks/useTheme";
import {  BsMoonStarsFill, BsSun } from 'react-icons/bs';
const Navbar = () => {
 
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const { changeTheme, mode } = useTheme();

  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navbar = (
    <>
      <div className="flex lg:flex-row md:flex-col flex-col gap-2 text-md font-semibold  ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? (
          <li>
            <NavLink to="/addProduct">Add Product</NavLink>
          </li>
        ) : (
          ""
        )}
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">My Cart</NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div className="mx-auto font-worSans dark:bg-slate-800 dark:text-white">
      <div className="lg:max-w-6xl mx-auto navbar bg-base-100 dark:bg-slate-800 dark:text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navbar}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-1 dark:bg-white dark:text-black">
            <img
              className="w-20"
              src="https://i.ibb.co/DCMzbvh/logo.png
"
              alt=""
            />
            <p className="text-2xl font-extrabold font-worSans text-slate-800">
              MU Shop
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{navbar}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          
          <div className="flex items-center gap-2">
            {/* <div className="flex flex-row items-center">
            <input  onChange={changeTheme} type="checkbox" className="toggle"  />
          </div> */}

            <button onClick={changeTheme}>
              {
                mode === "dark" ? 
                <BsSun className="text-2xl font-medium"></BsSun>
                :
                <BsMoonStarsFill className="text-2xl font-medium"></BsMoonStarsFill> 
              }
            </button>

            <p className="lg:flex hidden font-medium">{user?.displayName}</p>

            {user ? (
              <div className="flex justify-center items-center">
                <button
                  onClick={handleLogOut}
                  className="btn bg-slate-800 text-white hover:bg-slate-700 font-workSans"
                >
                  Logout
                </button>
                <label
                  tabIndex={0}
                  className="lg:flex hidden   btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn bg-slate-800 text-white hover:bg-slate-700 font-workSans">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
