import CollectionHead from '../Components/CollectionHead';
import { PageTabs, PageTab } from '../Components/PageTabs';
import ItemCardList from '../Components/ItemCardList';
import ArtItemCard from '../Components/ItemCard/ArtItemCard';
import Pagenation from '../Components/Pagenation/Pagenation';
import './PersonalCollected.scss';

function Favorited() {
  const profileImageUrl = 'https://source.unsplash.com/random/146x146/?profile';
  const imageUrl = 'https://source.unsplash.com/random/666x786/?art';

  return (
    <div className="personal-collected personal-collected-favorited">
      <CollectionHead
        profileImageUrl={profileImageUrl}
        name="YVONNE BAR |1 ╳ 55| NFT PRID E& XCA"
        walletAddress="0x542...432d"
        description="CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour. CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour."
      />
      <div className="collection__wrap">
        <PageTabs bordered>
          <PageTab>Collections</PageTab>
          <PageTab>Owned</PageTab>
          <PageTab>Created</PageTab>
          <PageTab selected>Favorited</PageTab>
          <PageTab>Activity</PageTab>
        </PageTabs>
        <ItemCardList>
          {Array.from(Array(8)).map((_, index) => (
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
        <Pagenation isProgressVisible />
      </div>
    </div>
  );
}

export default Favorited;
