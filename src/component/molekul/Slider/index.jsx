import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListSlider } from "../../../component";

const Sliders = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="slider-container slide-section content-section">
      <h2 className="text-black text-xl text-left font-semibold pb-4">Mau konsultasi apa hari ini ?</h2>
      <Slider {...settings}>
        <ListSlider title={"Hukum Kontrak"} />
        <ListSlider title={"Hukum Bisnis"} />
        <ListSlider title={"Hukum Properti"} />
        <ListSlider title={"Hukum Kontra"} />
        <ListSlider title={"Hukum Pidana"} />
      </Slider>
    </div>
  )
}

export default Sliders