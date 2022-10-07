import PropTypes from 'prop-types';
import FilterAccordion from './FilterAccordion';
import Checkbox from '../Inputs/Checkbox';
import Icons from '../Icons/Icons';

function FilterOptions({ defaultCheckedIds }) {
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
        <label htmlFor="filter_keyword" className="itemcard-list-filter__keyword">
          <input id="filter_keyword" type="text" placeholder="Find Artist" className="itemcard-list-filter__keyword-input" />
          <Icons shape="search_small" />
        </label>
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

FilterOptions.defaultProps = {
  defaultCheckedIds: [],
};

FilterOptions.propTypes = {
  defaultCheckedIds: PropTypes.arrayOf(PropTypes.string),
};

export default FilterOptions;
