import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import ArtBanner from './ArtBanner';
import TagLabel from '../Components/TagLabel';
import ItemCardList from '../Components/ItemCardList';
import VoteItemCard from '../Components/ItemCard/VoteItemCard';
import ArtistItemCard from '../Components/ItemCard/ArtistItemCard';
import './Main.scss';

function Main() {
  const imageUrl = 'https://source.unsplash.com/random/666x786/?art';
  return (
    <div className="page-content main">
      <Slider
        className="main-slider"
        dots
        dotsClass="main-slider__progress"
        arrows={false}
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        edgeFriction={0.1}
      >
        <ArtBanner />
        <ArtBanner />
        <ArtBanner />
        <ArtBanner />
      </Slider>
      <div className="main-list">
        <div className="main-list__header">
          <h3 className="main-list__title">Now Curating</h3>
          <TagLabel type="live">Live</TagLabel>
          <Link className="main-list__link" href="/main">See more</Link>
        </div>
        <ItemCardList>
          <VoteItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
          />
          <VoteItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
            isVoted
          />
          <VoteItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
          />
          <VoteItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
            isVoted
          />
        </ItemCardList>
      </div>
      <div className="main-list">
        <div className="main-list__header">
          <h3 className="main-list__title">Most Popular Artist</h3>
          <Link className="main-list__link" href="/main">See more</Link>
        </div>
        <ItemCardList>
          <ArtistItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
            sellType="Last Sale"
            priceIconUrl={`${process.env.PUBLIC_URL}/assets/images/icons/coin/ico_price_eth.svg`}
            priceValue="15,000,000.00 ETH"
          />
          <ArtistItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
            sellType="List Sale"
            priceIconUrl={`${process.env.PUBLIC_URL}/assets/images/icons/coin/ico_price_matic.svg`}
            priceValue="15,000,000.00 MATIC"
          />
          <ArtistItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
            sellType="List Sale"
            priceIconUrl={`${process.env.PUBLIC_URL}/assets/images/icons/coin/ico_price_matic.svg`}
            priceValue="15,000,000.00 MATIC"
          />
          <ArtistItemCard
            imageUrl={imageUrl}
            title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
            description="Starry Night Over the Rhon Starry Night Over the Rhon"
            sellType="List Sale"
            priceIconUrl={`${process.env.PUBLIC_URL}/assets/images/icons/coin/ico_price_matic.svg`}
            priceValue="15,000,000.00 MATIC"
          />
        </ItemCardList>
      </div>
    </div>
  );
}

export default Main;
