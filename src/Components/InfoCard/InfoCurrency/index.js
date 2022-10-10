import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import './InfoCurrency.scss';

function InfoCurrencyInput({ icon, value, type, currency }) {
  const inputId = useId();
  const [inputValue, setInputValue] = useState(parseFloat(value, 10));
  const onChange = (event) => {
    const val = parseFloat(event.target.value, 10);
    setInputValue(val);
  };

  return (
    <label htmlFor={inputId} className="infocard-currency">
      {!!icon && (
        <span className="infocard-currency__icon">
          {icon}
        </span>
      )}
      {type === 'input' && (
        <input
          id={inputId}
          type="number"
          className="infocard-currency__input"
          value={inputValue}
          min="0"
          step="0.01"
          placeholder="0.00"
          onChange={onChange}
        />
      )}
      {type === 'value' && (
        <span className="infocard-currency__value">{value}</span>
      )}
      <span className="infocard-currency-tag">{currency}</span>
    </label>
  );
}

InfoCurrencyInput.defaultProps = {
  icon: null,
  value: undefined,
  type: 'input',
};

InfoCurrencyInput.propTypes = {
  icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['input', 'value']),
  currency: PropTypes.string.isRequired,
};

export default InfoCurrencyInput;
