import { useState } from 'react';
import CollectionHead from '../Components/CollectionHead';
import { PageTabs, PageTab } from '../Components/PageTabs';
import ItemCardList from '../Components/ItemCardList';
import {
  FilterListContainer,
} from '../Components/ItemCardListFilter';
import IconStyle from '../Components/Icons/Icons';
import './Collection.scss';

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

function ItemEmpty() {
  const backgroundImageUrl = 'https://source.unsplash.com/random/1920x203/?art';
  const profileImageUrl = 'https://source.unsplash.com/random/146x146/?profile';
  const [isFilterVisible, setFilterVisible] = useState(true);
  const onClickToggleButton = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className="collection marketplace-digital-art">
      <CollectionHead
        backgroundImageUrl={backgroundImageUrl}
        profileImageUrl={profileImageUrl}
        name="YVONNE BAR |1 ╳ 55| NFT PRID E& XCA"
        walletAddress="0x542...432d"
        description="CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour. CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour. CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour."
        stats={stats}
      />
      <div className="collection__wrap">
        <PageTabs bordered>
          <PageTab selected>Item</PageTab>
          <PageTab>Activity</PageTab>
        </PageTabs>
        <FilterListContainer
          isFilterVisible={isFilterVisible}
          onClickToggleButton={onClickToggleButton}
          resultCount="10,000"
          filterCount={3}
          filterType="collection-item"
        >
          <ItemCardList isEmpty />
        </FilterListContainer>
      </div>
    </div>
  );
}

export default ItemEmpty;
