
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";


const AboutUs = () => {
  
  
 

  return (
    <div>
      <div className="shadow-md">
        <Navbar></Navbar>
      </div>
      <div className="my-10">
        <About></About>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
