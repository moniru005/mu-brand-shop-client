
import { Link } from "react-router-dom";
import image1 from '../../assets/images/about-1.png';


const About = () => {
    return (
        <div>
            <div className="px-12 font-workSans mt-6 lg:mt-0">
            {/* Welcome */}
            <div className="lg:flex flex-col lg:flex-row-reverse gap-14 justify-around items-center">
                <img className="lg:w-96 flex-1 mx-auto " src={image1} alt="" />
                <div className="flex-1  font-workSans p-4">
                    <h2 className="text-2xl font-semibold  text-[#fb544e]">Welcome </h2>
                    <h2 className="text-4xl font-bold my-3">To the Future of Fashion: Shop the Latest Trends Here!</h2>
                    <p className="mt-6 text-justify">Welcome to MU Brand Shop! We are an online fashion retailer dedicated to helping you stay ahead of the trends. Our mission is to make it easy for you to find and shop the latest fashion items from around the world. We bring together a carefully curated selection of clothing, accessories, shoes and more from some of today’s top designers and brands. With our vast selection, we make sure that no matter your style or budget, you can always find something perfect for any occasion or season. Our team works hard every day to ensure that our customers receive only the highest quality products at competitive prices. We also strive to provide fast shipping times and excellent customer service so that shopping with us is always a pleasant experience. Thank you for choosing Modern Fashion!
                    </p>
                    <Link to="/shop">
                        <button className="btn border-slate-800 border-2 bg-white text-slate-900 mt-6"> Shop Now </button>
                    </Link>
                </div>
            </div>

           
            
       
            

        </div>
        </div>
    );
};

export default About;