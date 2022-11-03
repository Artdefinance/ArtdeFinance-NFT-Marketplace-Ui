import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icons from '../Icons/Icons';
import './Input.scss';

function Input({ name, disabled, placeholder, getValue, onChangeValue }) {
  const [value, setValue] = useState(getValue || '');
  const inputRef = useRef(null);
  const onChangeInput = (event) => {
    const { value: targetValue } = event.target;
    onChangeValue(targetValue);
    setValue(targetValue);
  };
  const clearText = () => {
    setValue('');
    inputRef?.current?.focus?.();
  };

  return (
    <div className={clsx('input', disabled === 'true' && 'disabled')}>
      <div className="input__input-box">
        <input
          ref={inputRef}
          type="text"
          className="input__input"
          placeholder={placeholder}
          name={name}
          onChange={onChangeInput}
          value={value}
          disabled={disabled === 'true'}
        />
        {!!value && (
          <button type="button" onClick={clearText} name={name}>
            <Icons shape="close-circle" />
          </button>
        )}
      </div>
    </div>
  );
}

Input.defaultProps = {
  disabled: '',
  placeholder: '',
  getValue: '',
  onChangeValue: () => {},
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  placeholder: PropTypes.string,
  getValue: PropTypes.string,
  onChangeValue: PropTypes.func,
};

export default Input;
