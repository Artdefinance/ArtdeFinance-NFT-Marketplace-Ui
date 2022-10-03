import PropTypes from 'prop-types';
import './InfoPrice.scss';

function InfoPrice({ title, primaryType, secondaryType, primaryValue, secondaryValue }) {
  return (
    <div className="infocard-price">
      <span className="infocard-price__title">{title}</span>
      <div className="infocard-price__list">
        <div className="infocard-price__row">
          <span className="infocard-price__primary-value">
            {primaryValue}
          </span>
          <span className="infocard-price__type">{primaryType}</span>
        </div>
        <div className="infocard-price__row">
          <span className="infocard-price__secondary-value">
            {secondaryValue}
          </span>
          <span className="infocard-price__type">{secondaryType}</span>
        </div>
      </div>
    </div>
  );
}

InfoPrice.defaultProps = {
  title: '',
  primaryType: 'USD',
  secondaryType: 'BUSD',
};

InfoPrice.propTypes = {
  title: PropTypes.string,
  primaryType: PropTypes.string,
  secondaryType: PropTypes.string,
  primaryValue: PropTypes.string.isRequired,
  secondaryValue: PropTypes.string.isRequired,
};

export default InfoPrice;
