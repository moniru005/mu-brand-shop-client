import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 p-10 text-base-content rounded font-worSans dark:bg-slate-800 dark:text-white">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about">
        <button className="link link-hover">About us</button>
        </Link>
        <Link to="/shop">
        <button className="link link-hover">Shop</button>
        </Link>
        <Link to="/login">
        <button className="link link-hover">Sign In</button>
        </Link>
        <Link to="/register">
        <button className="link link-hover">Sign Up</button>
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a>
            <FaTwitter></FaTwitter>
          </a>
          <a>
            <FaYoutube></FaYoutube>
          </a>
          <a>
            <FaFacebook></FaFacebook>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by MU Brand Shop Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
