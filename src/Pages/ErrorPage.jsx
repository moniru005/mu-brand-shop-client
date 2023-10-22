import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex items-center justify-center h-screen text-2xl font-semibold">
        <img
          className="lg:w-96"
          src="https://i.ibb.co/gZF6nY1/error-Image.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center">
        <Link to="/">
          <button className="btn pr-5 mb-6">
            <TiArrowBack className="text-2xl"></TiArrowBack>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
