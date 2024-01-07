import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";


const Testimonials = () => {
  const axiosPublic = useAxiosPublic();


   const {data: reviews = [], isLoading:loading} = useQuery({
    queryKey: ['reviews'],
    queryFn: async() =>{
      const res = await axiosPublic.get('/reviews');
      return res.data;
    }
   })

  if(loading){
    <Loading></Loading>
  }

  return (
    <section data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className="mt-20 hidden lg:flex flex-col mx-auto bg-[url('./assets/images/client-bg.jpg')] bg-fixed bg-cover">
      <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div>
      <h3 className="lg:text-4xl text-xl font-bold text-center  pt-12 text-white z-50">Testimonials</h3>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  lg:w-[80%] text-white">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="text-white">
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className=" text-4xl text-white mt-6" />
              <p className="py-8">{review.details}</p> 
              <img className="rounded-full w-32 h-32" src={review.image} alt="" />
              <h3 className="text-2xl ">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
