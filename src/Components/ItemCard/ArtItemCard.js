import PropTypes from 'prop-types';
import BaseItemCard from './BaseItemCard';
import './ArtItemCard.scss';

function ArtItemCard({
  imageUrl,
  title,
  description,
  sellType,
  priceValue,
  coinPriceValue,
}) {
  return (
    <BaseItemCard
      className="itemcard--artist"
      imageUrl={imageUrl}
      title={title}
      description={description}
    >
      <div className="itemcard__price">
        <span className="itemcard__price-sell">{sellType}</span>
        <span className="itemcard__price-value">{priceValue}</span>
        <span className="itemcard__price-value-coin">{coinPriceValue}</span>
      </div>
    </BaseItemCard>
  );
}

ArtItemCard.defaultProps = {
  imageUrl: '',
  title: '',
  description: '',
  sellType: '',
  priceValue: '',
  coinPriceValue: '',
};

ArtItemCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  sellType: PropTypes.string,
  priceValue: PropTypes.string,
  coinPriceValue: PropTypes.string,
};

export default ArtItemCard;
