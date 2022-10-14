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
  isSoldOut,
}) {
  return (
    <BaseItemCard
      className="itemcard--artist"
      imageUrl={imageUrl}
      title={title}
      description={description}
      isSoldOut={isSoldOut}
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
  isSoldOut: false,
};

ArtItemCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  sellType: PropTypes.string,
  priceValue: PropTypes.string,
  coinPriceValue: PropTypes.string,
  isSoldOut: PropTypes.bool,
};

export default ArtItemCard;
