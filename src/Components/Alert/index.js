import PropTypes from 'prop-types';
import './Alert.scss';

const AlertIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7839 3C6.84467 3 2.82617 7.0374 2.82617 12C2.82617 16.9626 6.86357 21 11.8262 21C16.7888 21 20.8262 16.9626 20.8262 12C20.8262 7.0374 16.7699 3 11.7839 3ZM12.7262 16.5H10.9262V14.7H12.7262V16.5ZM12.7262 12.9H10.9262V7.5H12.7262V12.9Z" fill="currentColor" />
  </svg>
);

function Alert({ type, children }) {
  return (
    <p className={`alert alert--${type}`}>
      <span className="alert__icon">
        {AlertIcon}
      </span>
      {children}
    </p>
  );
}

Alert.defaultProps = {
  type: 'primary',
  children: '',
};

Alert.propTypes = {
  type: PropTypes.oneOf(['primary']),
  children: PropTypes.node,
};

export default Alert;
