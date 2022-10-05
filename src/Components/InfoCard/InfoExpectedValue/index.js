import PropTypes from 'prop-types';
import './InfoExpectedValue.scss';

function InfoExpectedValue({ years }) {
  return (
    <div className="infocard-expected-value">
      Expexted value of this after
      <em>{years}</em>
      years
    </div>
  );
}

InfoExpectedValue.propTypes = {
  years: PropTypes.string.isRequired,
};

export default InfoExpectedValue;
