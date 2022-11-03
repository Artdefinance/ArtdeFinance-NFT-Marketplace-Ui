import { useState } from 'react';
import PropTypes from 'prop-types';
import IconStyle from '../Icons/Icons';

function FilterSelected({ selectedFilters }) {
  const [filters, setFilters] = useState(selectedFilters);

  const removeFilter = (name) => () => setFilters((f) => f.filter((item) => item !== name));
  const clearAll = () => setFilters([]);

  if (!filters.length) return null;

  return (
    <div className="itemcard-list-filter__selected">
      <ul className="itemcard-list-filter__selected-items">
        {filters.map((name, index) => (
          <div key={`${index.toString()}-${name}`} className="itemcard-list-filter__selected-item">
            {name}
            <button type="button" className="itemcard-list-filter__btn-remove-selected" onClick={removeFilter(name)}>
              <span className="a11y">Remove</span>
              <IconStyle shape="close_small" />
            </button>
          </div>
        ))}
      </ul>
      <button type="button" className="itemcard-list-filter__btn-clear-selected" onClick={clearAll}>
        Clear all
      </button>
    </div>
  );
}

FilterSelected.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSelected;
