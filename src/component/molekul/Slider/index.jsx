import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListSlider } from "../../../component";
import { useNavigate } from 'react-router-dom';

const Sliders = ({dataSpecials}) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  const lawyerCategory = (categoryId) => {
    navigate(`/lawyer/category/${categoryId}`);
  };


  return (
    <div className="slider-container slide-section content-section">
    <h2 className="text-black text-xl text-left font-semibold pb-4">See Lawyer Profile?</h2>
    <Slider {...settings}>
      {dataSpecials.map((special, index) => (
        <ListSlider key={index} title={special.name} onClick={() =>lawyerCategory(special.id)} />
      ))}
    </Slider>
  </div>
  )
}

export default Sliders