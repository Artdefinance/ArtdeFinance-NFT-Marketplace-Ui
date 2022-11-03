import PropTypes from 'prop-types';
import clsx from 'clsx';
import './VerificationCode.scss';
import IconStyle from '../../Icons/Icons';

function VerificationCode({ error, onNumberInserted }) {
  const onChange = (event) => {
    const { value, nextElementSibling } = event.target;
    const hasValue = Array.from(event.target.parentElement.querySelectorAll('input')).some((el) => !!el.value);
    onNumberInserted(hasValue);
    if (value && nextElementSibling?.tagName?.toLowerCase?.() === 'input') {
      event.target.nextElementSibling?.focus?.();
    }
  };

  return (
    <div className={clsx('verify-code', error && 'verify-code--error')}>
      <div className="verify-code__inputs">
        {Array.from(Array(6)).map((_, index) => (
          <input key={`${index.toString()}`} type="tel" maxLength="1" pattern="[0-9]" className="verify-code__input" onChange={onChange} />
        ))}
        <button type="button" className="verify-code__btn-resend">Resend Code</button>
      </div>
      {error && (
        <em className="verify-code__error-msg">
          <IconStyle shape="warning_fill" color="#fd3d39" />
          Please request another SMS Code.
        </em>
      )}
    </div>
  );
}

VerificationCode.defaultProps = {
  error: false,
  onNumberInserted: () => {},
};

VerificationCode.propTypes = {
  error: PropTypes.bool,
  onNumberInserted: PropTypes.func,
};

export default VerificationCode;
