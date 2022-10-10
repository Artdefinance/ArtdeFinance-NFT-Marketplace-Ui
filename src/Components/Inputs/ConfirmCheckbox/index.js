import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import './ConfirmCheckbox.scss';

const uncheckedIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.2606 14C26.2606 21.2184 20.6519 27 13.8178 27C6.98373 27 1.375 21.2184 1.375 14C1.375 6.78163 6.98373 1 13.8178 1C20.6519 1 26.2606 6.78163 26.2606 14Z" stroke="#BBBBBB" strokeWidth="2" />
    <path d="M7.48633 14.8235L11.7119 19.25L20.1137 10.5" stroke="#BBBBBB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const checkedIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="13.8178" cy="14" rx="13.4428" ry="14" fill="black" />
    <path d="M7.48633 14.8235L11.7119 19.25L20.1137 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

function ConfirmCheckbox({ name, description, defaultChecked }) {
  const checkboxId = useId();
  const [checked, setChecked] = useState(defaultChecked);
  const onChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="cofirm-checkbox">
      <label className="cofirm-checkbox__label" htmlFor={checkboxId}>
        {checked ? checkedIcon : uncheckedIcon}
        <input id={checkboxId} className="cofirm-checkbox__input" type="checkbox" checked={checked} onChange={onChange} />
        {!!name && <span className="cofirm-checkbox__name">{name}</span>}
      </label>
      {!!description && <p className="cofirm-checkbox__desc">{description}</p>}
    </div>
  );
}

ConfirmCheckbox.defaultProps = {
  name: undefined,
  description: undefined,
  defaultChecked: false,
};

ConfirmCheckbox.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

export default ConfirmCheckbox;
