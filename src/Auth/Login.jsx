import { Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          password,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        console.log(user);
        fetch("https://mu-brand-shop-server-py07srdqc-md-monir-uddins-projects.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (result.user.email || result.user.email) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged in Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Email or password not matched!",
          err,
          text: "Please check and try again!",
          icon: "warning",
        });
      });
  };

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <div className="shadow-lg mb-6">
        <Navbar></Navbar>
      </div>
      <div className="hero  font-worSans lg:w-3/5 md:w-3/5 mx-auto">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body dark:bg-slate-800 dark:text-white dark:border-white dark:border-2 dark:rounded-t-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>

                <div className="relative form-control">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                    required
                  />
                  <span
                    className="absolute top-4 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-slate-800 text-white hover:text-slate-800 hover:border-slate-900"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="pb-8">
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <p>
            If you new here! Please
            <Link to="/register">
              <button className="pl-1 hover:text-orange-600"> Register</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Login;
