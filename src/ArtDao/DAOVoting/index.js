import ItemCardList from '../../Components/ItemCardList';
import VoteItemCard from '../../Components/ItemCard/VoteItemCard';
import ArtItemCard from '../../Components/ItemCard/ArtItemCard';
import Pagenation from '../../Components/Pagenation/Pagenation';
import './DAOVoting.scss';

function DAOVoting() {
  const imageUrl = 'https://source.unsplash.com/random/666x786/?art';
  return (
    <div className="page-content dao-voting">
      <h2 className="dao-voting__title">DAO Voting</h2>
      <ItemCardList className="dao-voting__list">
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
        <ArtItemCard
          imageUrl={imageUrl}
          title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
          description="Starry Night Over the Rhon Starry Night Over the Rhon"
          sellType="Curation Price"
          priceValue="15,000,000.00 USD"
          coinPriceValue="23,543,230.80 BUSD"
        />
        <VoteItemCard
          imageUrl={imageUrl}
          title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
          description="Starry Night Over the Rhon Starry Night Over the Rhon"
          isExpired
        />
        <VoteItemCard
          imageUrl={imageUrl}
          title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
          description="Starry Night Over the Rhon Starry Night Over the Rhon"
          isVoted
        />
        <ArtItemCard
          imageUrl={imageUrl}
          title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
          description="Starry Night Over the Rhon Starry Night Over the Rhon"
          sellType="Curation Price"
          priceValue="15,000,000.00 USD"
          coinPriceValue="23,543,230.80 BUSD"
        />
        <ArtItemCard
          imageUrl={imageUrl}
          title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
          description="Starry Night Over the Rhon Starry Night Over the Rhon"
          sellType="Curation Price"
          priceValue="15,000,000.00 USD"
          coinPriceValue="23,543,230.80 BUSD"
        />
        <VoteItemCard
          imageUrl={imageUrl}
          title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
          description="Starry Night Over the Rhon Starry Night Over the Rhon"
          isExpired
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
        />
        <VoteItemCard
          imageUrl={imageUrl}
          title="Vincent van Gogh Vincent van Gogh Vincent van Gogh"
          description="Starry Night Over the Rhon Starry Night Over the Rhon"
          isVoted
        />
      </ItemCardList>
      <Pagenation isProgressVisible />
    </div>
  );
}

export default DAOVoting;
