import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Dropdown from '../Dropdown/Dropdown';
import FilterAccordion from './FilterAccordion';
import Checkbox from '../Inputs/Checkbox';
import Icons from '../Icons/Icons';
import './ItemCardListFilter.scss';

const sortingOptions = [
  { id: '1', title: 'Lowest Price' },
  { id: '2', title: 'Highest Price' },
  { id: '3', title: 'Newest' },
  { id: '4', title: 'Oldest' },
];

function ItemCardListFilter({ children }) {
  const [isFilterVisible, setFilterVisible] = useState(true);
  const onClickToggleButton = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className={clsx('itemcard-list-filter', isFilterVisible && 'itemcard-list-filter--visible')}>
      <div className="itemcard-list-filter__header">
        <button type="button" className="itemcard-list-filter__btn-toggle" onClick={onClickToggleButton}>
          <span>Filter &middot; 3</span>
        </button>
        <Dropdown dropWidth="216px" dropHeight="60px" dropTitle="Sort by" content={sortingOptions} dropFontSize="16px" dropFontColor="#000000" />
        <span className="itemcard-list-filter__results">
          10,000 Results
        </span>
      </div>
      <div className={clsx('itemcard-list-filter__list', !isFilterVisible && 'itemcard-list-filter__list--filter-hidden')}>
        <div className="itemcard-list-filter__options">
          <FilterAccordion title="Status" defaultExpanded>
            <Checkbox chkId="status1" content="For Sale (10)" />
            <Checkbox chkId="status2" content="Sold Out (10)" />
          </FilterAccordion>
          <FilterAccordion title="Sale Types" defaultExpanded>
            <Checkbox chkId="sale1" content="List Price (10)" />
            <Checkbox chkId="sale2" content="On Auction (10)" />
          </FilterAccordion>
          <FilterAccordion title="Artist" defaultExpanded>
            <label htmlFor="filter_keyword" className="itemcard-list-filter__keyword">
              <input id="filter_keyword" type="text" placeholder="Find Artist" className="itemcard-list-filter__keyword-input" />
              <Icons shape="search_small" />
            </label>
            <Checkbox chkId="artist1" content="Tai-Shan Schierenberg (10)" />
            <Checkbox chkId="artist2" content="Gogh Van Gogh (10)" />
            <Checkbox chkId="artist3" content="Kangsaea (10)" />
            <Checkbox chkId="artist4" content="For Sale (10)" disabled />
            <Checkbox chkId="artist5" content="For Sale (10)" />
            <Checkbox chkId="artist6" content="For Sale (10)" />
            <button type="button" className="itemcard-list-filter__btn-more">See more</button>
          </FilterAccordion>
        </div>
        {children}
      </div>
    </div>
  );
}

ItemCardListFilter.defaultProps = {
  children: null,
};

ItemCardListFilter.propTypes = {
  children: PropTypes.node,
};

export default ItemCardListFilter;
