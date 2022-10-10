import { useState } from 'react';
import CollectionHead from '../Components/CollectionHead';
import { PageTabs, PageTab } from '../Components/PageTabs';
import {
  FilterListContainer,
} from '../Components/ItemCardListFilter';
import Pagenation from '../Components/Pagenation/Pagenation';
import {
  CollectionTable,
  CollectionTableCell,
  CollectionTableDateCell,
  CollectionTableItemCell,
  CollectionTablePriceCell,
  CollectionTableRow,
} from '../Components/CollectionTable';
import './PersonalCollected.scss';

function Activity() {
  const itemImageUrl = 'https://source.unsplash.com/random/120x120/?art';
  const profileImageUrl = 'https://source.unsplash.com/random/146x146/?profile';
  const [isFilterVisible, setFilterVisible] = useState(true);
  const onClickToggleButton = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className="personal-collected personal-collected-activity">
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
          <PageTab>Favorited</PageTab>
          <PageTab selected>Activity</PageTab>
        </PageTabs>
        <FilterListContainer
          isFilterVisible={isFilterVisible}
          onClickToggleButton={onClickToggleButton}
          resultCount="10,000"
          filterType="collection-activity"
        >
          <CollectionTable>
            {[
              'Sales',
              'Canceled Listings',
              'Canceled Offers',
              'Mints',
              'Listings',
              'Transfers',
              'Offers',
            ].map((tagText) => (
              <CollectionTableRow key={tagText}>
                <CollectionTableItemCell
                  tagText={tagText}
                  imageUrl={itemImageUrl}
                  author="Vincent van Gogh"
                  name="CARDS#1234565d4"
                />
                <CollectionTableCell>9a246888...</CollectionTableCell>
                <CollectionTableCell>ADF</CollectionTableCell>
                <CollectionTablePriceCell primaryValue="678.9878 ETH" secondaryValue="$ 104" />
                <CollectionTableDateCell date="20 days ago" />
              </CollectionTableRow>
            ))}
          </CollectionTable>
        </FilterListContainer>
        <Pagenation isProgressVisible />
      </div>
    </div>
  );
}

export default Activity;
