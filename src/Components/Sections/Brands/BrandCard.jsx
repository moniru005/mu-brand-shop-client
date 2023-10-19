import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const BrandCard = ({brand}) => {
    

    const {brand_name, brand_image} = brand || {};
    return (
        <div>
            <Link to ={`/product/${brand_name}`}>
            <div className="flex flex-col justify-center items-center gap-4 font-worSans">
                <img className="w-48" src={brand_image} alt="" />
                <p className="text-2xl font-semibold">{brand_name}</p>
            </div>
            </Link>
        </div>
    );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.node,
}