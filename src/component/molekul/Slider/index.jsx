import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = () => {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
      <Slider {...settings}>
      <div className="bg-slate-50">
        <h3 className="text-black">1</h3>
      </div>
      <div className="bg-slate-50">
        <h3 className="text-black">2</h3>
      </div>
      <div>
        <h3 className="text-black">3</h3>
      </div>
      <div>
        <h3 className="text-black">4</h3>
      </div>
      <div>
        <h3 className="text-black">5</h3>
      </div>
      <div>
        <h3 className="text-black">6</h3>
      </div>
    </Slider>
  )
}

export default Sliders