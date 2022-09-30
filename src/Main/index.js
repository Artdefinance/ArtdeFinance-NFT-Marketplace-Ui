import Slider from 'react-slick';
import ArtBanner from './ArtBanner';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Slider
        className="main-slider"
        dots
        dotsClass="main-slider__progress"
        arrows={false}
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <ArtBanner />
        <ArtBanner />
        <ArtBanner />
        <ArtBanner />
      </Slider>
    </div>
  );
}

export default Main;
