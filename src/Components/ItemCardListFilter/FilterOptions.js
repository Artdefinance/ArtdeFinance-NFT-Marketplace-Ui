import PropTypes from 'prop-types';
import FilterAccordion from './FilterAccordion';
import Checkbox from '../Inputs/Checkbox';
import FilterSideKeywordInput from './FilterSideKeywordInput';

function FilterOptions({ defaultCheckedIds, filterType }) {
  if (filterType === 'digital-art') {
    return (
      <div className="itemcard-list-filter__options">
        <FilterAccordion title="Status" defaultExpanded>
          <Checkbox chkId="status1" content="For Sale (10)" defaultChecked={defaultCheckedIds.includes('status1')} />
          <Checkbox chkId="status2" content="Sold Out (10)" defaultChecked={defaultCheckedIds.includes('status2')} />
        </FilterAccordion>
        <FilterAccordion title="Sale Types" defaultExpanded>
          <Checkbox chkId="sale1" content="List Price (10)" defaultChecked={defaultCheckedIds.includes('sale1')} />
          <Checkbox chkId="sale2" content="On Auction (10)" defaultChecked={defaultCheckedIds.includes('sale2')} />
        </FilterAccordion>
        <FilterAccordion title="Artist" defaultExpanded>
          <FilterSideKeywordInput placeholder="Find Artist" />
          <Checkbox chkId="artist1" content="Tai-Shan Schierenberg (10)" defaultChecked={defaultCheckedIds.includes('artist1')} />
          <Checkbox chkId="artist2" content="Gogh Van Gogh (10)" defaultChecked={defaultCheckedIds.includes('artist2')} />
          <Checkbox chkId="artist3" content="Kangsaea (10)" defaultChecked={defaultCheckedIds.includes('artist3')} />
          <Checkbox chkId="artist4" content="For Sale (10)" disabled defaultChecked={defaultCheckedIds.includes('artist4')} />
          <Checkbox chkId="artist5" content="For Sale (10)" defaultChecked={defaultCheckedIds.includes('artist5')} />
          <Checkbox chkId="artist6" content="For Sale (10)" defaultChecked={defaultCheckedIds.includes('artist6')} />
          <button type="button" className="itemcard-list-filter__btn-more">See more</button>
        </FilterAccordion>
      </div>
    );
  }

  if (filterType === 'artworks-1') {
    return (
      <div className="itemcard-list-filter__options">
        <FilterAccordion title="Status" defaultExpanded>
          <Checkbox chkId="status1" content="For Sale (10)" defaultChecked={defaultCheckedIds.includes('status1')} />
          <Checkbox chkId="status2" content="Sold Out (10)" defaultChecked={defaultCheckedIds.includes('status2')} />
        </FilterAccordion>
        <FilterAccordion title="Sale Types" defaultExpanded>
          <Checkbox chkId="sale1" content="List Price (10)" defaultChecked={defaultCheckedIds.includes('sale1')} />
          <Checkbox chkId="sale2" content="On Auction (10)" defaultChecked={defaultCheckedIds.includes('sale2')} />
        </FilterAccordion>
        <FilterAccordion title="Currencies" defaultExpanded>
          <Checkbox chkId="currency1" content="ETH" defaultChecked={defaultCheckedIds.includes('currency1')} />
          <Checkbox chkId="currency2" content="MATIC" defaultChecked={defaultCheckedIds.includes('currency2')} />
        </FilterAccordion>
        <FilterAccordion title="Artist" defaultExpanded>
          <FilterSideKeywordInput placeholder="Find Artist" defaultValue="Vicent van Gogh" />
          <Checkbox chkId="artist1" content="For Sale(10)" defaultChecked={defaultCheckedIds.includes('artist1')} />
          <Checkbox chkId="artist2" content="For Sale(10)" defaultChecked={defaultCheckedIds.includes('artist2')} />
          <Checkbox chkId="artist3" content="For Sale(10)" defaultChecked={defaultCheckedIds.includes('artist3')} />
          <Checkbox chkId="artist4" content="For Sale(10)" defaultChecked={defaultCheckedIds.includes('artist4')} disabled="true" />
          <Checkbox chkId="artist5" content="For Sale(10)" defaultChecked={defaultCheckedIds.includes('artist5')} />
          <Checkbox chkId="artist6" content="For Sale(10)" defaultChecked={defaultCheckedIds.includes('artist6')} />
          <button type="button" className="itemcard-list-filter__btn-more">See more</button>
        </FilterAccordion>
      </div>
    );
  }

  if (filterType === 'artworks-3') {
    return (
      <div className="itemcard-list-filter__options">
        <FilterAccordion title="Status" defaultExpanded>
          <Checkbox chkId="status1" content="For Sale (10)" defaultChecked={defaultCheckedIds.includes('status1')} />
          <Checkbox chkId="status2" content="Sold Out (10)" defaultChecked={defaultCheckedIds.includes('status2')} />
        </FilterAccordion>
        <FilterAccordion title="Sale Types" defaultExpanded>
          <Checkbox chkId="sale1" content="List Price (10)" defaultChecked={defaultCheckedIds.includes('sale1')} />
          <Checkbox chkId="sale2" content="On Auction (10)" defaultChecked={defaultCheckedIds.includes('sale2')} />
        </FilterAccordion>
        <FilterAccordion title="Currencies" defaultExpanded>
          <Checkbox chkId="currency1" content="ETH" defaultChecked={defaultCheckedIds.includes('currency1')} />
          <Checkbox chkId="currency2" content="MATIC" defaultChecked={defaultCheckedIds.includes('currency2')} />
        </FilterAccordion>
        <FilterAccordion title="Artist" defaultExpanded>
          <FilterSideKeywordInput placeholder="Find Artist" defaultValue="Vicent van Gogh" />
          <Checkbox chkId="artist1" content="Vincent van Gogh" defaultChecked={defaultCheckedIds.includes('artist1')} />
          <Checkbox chkId="artist2" content="Tai-Shan Schierenberg" defaultChecked={defaultCheckedIds.includes('artist2')} />
          <Checkbox chkId="artist3" content="Tai-Shan Schierenberg" defaultChecked={defaultCheckedIds.includes('artist3')} />
          <Checkbox chkId="artist4" content="Pablo Picasso" disabled="true" defaultChecked={defaultCheckedIds.includes('artist4')} />
          <Checkbox chkId="artist5" content="Tai-Shan Schierenberg" defaultChecked={defaultCheckedIds.includes('artist5')} />
          <Checkbox chkId="artist6" content="Elisabeth Vigee Le Brun" defaultChecked={defaultCheckedIds.includes('artist6')} />
          <Checkbox chkId="artist7" content="Vincent van Gogh" defaultChecked={defaultCheckedIds.includes('artist7')} />
          <Checkbox chkId="artist8" content="Tai-Shan Schierenberg" defaultChecked={defaultCheckedIds.includes('artist8')} />
          <Checkbox chkId="artist9" content="Tai-Shan Schierenberg" defaultChecked={defaultCheckedIds.includes('artist9')} />
          <Checkbox chkId="artist10" content="Pablo Picasso" disabled="true" defaultChecked={defaultCheckedIds.includes('artist10')} />
          <Checkbox chkId="artist11" content="Tai-Shan Schierenberg" defaultChecked={defaultCheckedIds.includes('artist11')} />
          <Checkbox chkId="artist12" content="Elisabeth Vigee Le Brun" defaultChecked={defaultCheckedIds.includes('artist12')} />
          <button type="button" className="itemcard-list-filter__btn-more">See more</button>
        </FilterAccordion>
      </div>
    );
  }

  if (filterType === 'collection-item') {
    return (
      <div className="itemcard-list-filter__options">
        <FilterAccordion title="Activity Type" defaultExpanded>
          <Checkbox chkId="status1" content="For Sale" defaultChecked={defaultCheckedIds.includes('status1')} />
          <Checkbox chkId="status2" content="Not For Sale" defaultChecked={defaultCheckedIds.includes('status2')} />
        </FilterAccordion>
        <FilterAccordion title="Activity Type" defaultExpanded>
          <Checkbox chkId="sale1" content="Fixed Price" defaultChecked={defaultCheckedIds.includes('sale1')} />
          <Checkbox chkId="sale2" content="On Auction" defaultChecked={defaultCheckedIds.includes('sale2')} />
        </FilterAccordion>
        <FilterAccordion title="Activity Type" defaultExpanded>
          <Checkbox chkId="artist1" content="ETH" defaultChecked={defaultCheckedIds.includes('artist1')} />
          <Checkbox chkId="artist2" content="MATIC" defaultChecked={defaultCheckedIds.includes('artist2')} />
        </FilterAccordion>
      </div>
    );
  }

  if (filterType === 'collection-activity') {
    return (
      <div className="itemcard-list-filter__options">
        <FilterAccordion title="Activity Type" defaultExpanded>
          <Checkbox chkId="type1" content="Transfers" defaultChecked={defaultCheckedIds.includes('type1')} />
          <Checkbox chkId="type2" content="Sales" defaultChecked={defaultCheckedIds.includes('type2')} />
          <Checkbox chkId="type3" content="Offers" defaultChecked={defaultCheckedIds.includes('type3')} />
          <Checkbox chkId="type4" content="Canceled Offers" defaultChecked={defaultCheckedIds.includes('type4')} />
          <Checkbox chkId="type5" content="Canceled Listings" defaultChecked={defaultCheckedIds.includes('type5')} />
          <Checkbox chkId="type6" content="Listings" defaultChecked={defaultCheckedIds.includes('type6')} />
          <Checkbox chkId="type7" content="Mints" defaultChecked={defaultCheckedIds.includes('type7')} />
        </FilterAccordion>
      </div>
    );
  }

  return null;
}

FilterOptions.defaultProps = {
  defaultCheckedIds: [],
  filterType: undefined,
};

FilterOptions.propTypes = {
  defaultCheckedIds: PropTypes.arrayOf(PropTypes.string),
  filterType: PropTypes.oneOf(['digital-art', 'collection-item', 'collection-activity', 'artworks-1', 'artworks-3']),
};

export default FilterOptions;
