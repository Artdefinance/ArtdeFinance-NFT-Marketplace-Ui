import PropTypes from 'prop-types';
import clsx from 'clsx';
import FilterHeader from './FilterHeader';
import FilterOptions from './FilterOptions';
import FilterSelected from './FilterSelected';
import './ItemCardListFilter.scss';

function FilterListContainer({
  isFilterVisible,
  onClickToggleButton,
  filterCount,
  resultCount,
  selectedFilters,
  defaultCheckedIds,
  children,
}) {
  return (
    <div className={clsx('itemcard-list-filter', isFilterVisible && 'itemcard-list-filter--visible')}>
      <FilterHeader
        onClickToggleButton={onClickToggleButton}
        filterCount={filterCount}
        resultCount={resultCount}
      />
      <div className={clsx('itemcard-list-filter__list', !isFilterVisible && 'itemcard-list-filter__list--filter-hidden')}>
        <FilterOptions defaultCheckedIds={defaultCheckedIds} />
        <div className="itemcard-list-filter__list-content">
          <FilterSelected selectedFilters={selectedFilters} />
          {children}
        </div>
      </div>
    </div>
  );
}

FilterListContainer.defaultProps = {
  isFilterVisible: true,
  filterCount: 0,
  selectedFilters: [],
  defaultCheckedIds: [],
  children: null,
};

FilterListContainer.propTypes = {
  isFilterVisible: PropTypes.bool,
  onClickToggleButton: PropTypes.func.isRequired,
  filterCount: PropTypes.number,
  resultCount: PropTypes.string.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  defaultCheckedIds: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

export default FilterListContainer;
