import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';

function FilterHeader({ onClickToggleButton, sortingOptions, filterCount, resultCount }) {
  return (
    <div className="itemcard-list-filter__header">
      <button type="button" className="itemcard-list-filter__btn-toggle" onClick={onClickToggleButton}>
        <span>
          Filter
          {!!filterCount && <> &middot; </>}
          {!!filterCount && `${filterCount}`}
        </span>
      </button>
      <Dropdown dropWidth="216px" dropHeight="60px" dropTitle="Sort by" content={sortingOptions} dropFontSize="16px" dropFontColor="#000000" />
      {!!resultCount && (
        <span className="itemcard-list-filter__results">
          {`${resultCount} `}
          Results
        </span>
      )}
    </div>
  );
}

FilterHeader.defaultProps = {
  sortingOptions: [
    { id: '1', title: 'Lowest Price' },
    { id: '2', title: 'Highest Price' },
    { id: '3', title: 'Newest' },
    { id: '4', title: 'Oldest' },
  ],
  resultCount: '',
  filterCount: null,
};

FilterHeader.propTypes = {
  onClickToggleButton: PropTypes.func.isRequired,
  sortingOptions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, title: PropTypes.string }),
  ),
  resultCount: PropTypes.string,
  filterCount: PropTypes.number,
};

export default FilterHeader;
