import CollectionHead from '../Components/CollectionHead';
import { PageTabs, PageTab } from '../Components/PageTabs';
import Pagenation from '../Components/Pagenation/Pagenation';
import IconStyle from '../Components/Icons/Icons';
import CollectionItemCard from '../Components/CollectionItemCard';
import './PersonalCollected.scss';

const ethIcon = (
  <IconStyle shape="eth" width={12} height={20} viewBox="0 0 12 20" />
);
const stats = [
  {
    id: '1',
    name: 'Item',
    value: '10.4 K',
  },
  {
    id: '2',
    name: 'Owners',
    value: '3,000',
  },
  {
    id: '3',
    name: 'Floor Price',
    value: (
      <>
        {ethIcon}
        0000.0000
      </>
    ),
  },
  {
    id: '4',
    name: 'Latest Price',
    value: (
      <>
        {ethIcon}
        0000.0000
      </>
    ),
  },
];

function Collections() {
  const profileImageUrl = 'https://source.unsplash.com/random/146x146/?profile';
  // const imageUrl = 'https://source.unsplash.com/random/666x786/?art';

  return (
    <div className="personal-collected personal-collected-collections">
      <CollectionHead
        profileImageUrl={profileImageUrl}
        name="YVONNE BAR |1 ╳ 55| NFT PRID E& XCA"
        walletAddress="0x542...432d"
        description="CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour. CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour."
      />
      <div className="collection__wrap">
        <PageTabs bordered>
          <PageTab selected>Collections</PageTab>
          <PageTab>Owned</PageTab>
          <PageTab>Created</PageTab>
          <PageTab>Favorited</PageTab>
          <PageTab>Activity</PageTab>
        </PageTabs>
        <div className="personal-collected-collections__list">
          {Array.from(Array(10)).map((_, index) => (
            <CollectionItemCard
              key={`${index.toString()}`}
              name="Collections Name artdefinance NFT art collections"
              stats={stats}
            />
          ))}
        </div>
        <Pagenation isProgressVisible />
      </div>
    </div>
  );
}

export default Collections;
