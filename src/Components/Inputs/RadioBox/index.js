import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import './RadioBox.scss';

function RadioBox({ options, defaultSelected }) {
  const radioName = useId();
  const [selected, setSelected] = useState(defaultSelected || options[0]);
  const onChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="radiobox">
      {options.map((option, index) => {
        const id = `${index.toString()}${option.substring(0, 1)}`;
        return (
          <label key={id} className="radiobox__item" htmlFor={id}>
            <input id={id} className="radiobox__radio" type="radio" name={radioName} value={option} checked={option === selected} onChange={onChange} />
            <span className="radiobox__content">{option}</span>
          </label>
        );
      })}
    </div>
  );
}

RadioBox.defaultProps = {
  defaultSelected: undefined,
};

RadioBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultSelected: PropTypes.string,
};

export default RadioBox;
