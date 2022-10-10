import { useState } from 'react';
import ItemCardList from '../Components/ItemCardList';
import ArtItemCard from '../Components/ItemCard/ArtItemCard';
import {
  FilterListContainer,
} from '../Components/ItemCardListFilter';
import Pagenation from '../Components/Pagenation/Pagenation';

function DigitalArt2() {
  const imageUrl = 'https://source.unsplash.com/random/666x786/?art';
  const [isFilterVisible, setFilterVisible] = useState(true);
  const onClickToggleButton = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className="marketplace marketplace-digital-art">
      <div className="marketplace__wrap">
        <h2 className="marketplace__title">Digital Art</h2>
        <FilterListContainer
          isFilterVisible={isFilterVisible}
          onClickToggleButton={onClickToggleButton}
          filterCount={3}
          resultCount="10,000"
          defaultCheckedIds={['status1', 'sale2', 'artist1']}
          selectedFilters={['For Sale', 'On Auction', 'Tai-Shan Schierenberg']}
          filterType="digital-art"
        >
          <ItemCardList>
            {Array.from(Array(12)).map((_, index) => (
              <ArtItemCard
                key={`${index.toString()}`}
                imageUrl={imageUrl}
                title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
                description="Starry Night Over the Rhon Starry Night Over the Rhon"
                sellType="Curation Price"
                priceValue="15,000,000.00 USD"
                coinPriceValue="23,543,230.80 BUSD"
                isSoldOut={index === 5}
              />
            ))}
          </ItemCardList>
        </FilterListContainer>
        <Pagenation isProgressVisible />
      </div>
    </div>
  );
}

export default DigitalArt2;
