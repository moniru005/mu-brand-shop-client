import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 p-10 text-base-content rounded font-worSans">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
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
