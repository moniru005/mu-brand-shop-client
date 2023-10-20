import banner from '../../assets/images/slider_1.jpg';
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className='font-worSans'>
            <div className='relative'>
            <img className='' src={banner} alt="" />
            </div>
            <div className='lg:px-20 md:px-20 px-16 mx-auto absolute top-[200px] lg:top-[300px] '>
                <h2 className='my-3 lg:text-6xl font-semibold'>Get up to 30% Off <br /> New Arrivals</h2>
                <Link to="/shop">
                <button className='btn lg:btn-md btn-sm'>Shop Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;