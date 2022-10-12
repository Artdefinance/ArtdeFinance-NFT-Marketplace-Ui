import { useState } from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons/Icons';

function FilterSideKeywordInput({ placeholder, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="itemcard-list-filter__keyword">
      <label htmlFor="filter_keyword" className="itemcard-list-filter__keyword-label">
        <input id="filter_keyword" type="text" onChange={(event) => setValue(event.target.value)} placeholder={placeholder} className="itemcard-list-filter__keyword-input" value={value} />
        <Icons shape="search_small" />
      </label>
      <button type="button" className="itemcard-list-filter__keyword-delete" aria-hidden={!value}>
        <Icons shape="close-circle" />
      </button>
    </div>
  );
}

FilterSideKeywordInput.defaultProps = {
  placeholder: '',
  defaultValue: '',
};

FilterSideKeywordInput.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default FilterSideKeywordInput;
