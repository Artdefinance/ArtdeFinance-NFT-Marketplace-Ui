import PropTypes from 'prop-types';
import BaseItemCard from './BaseItemCard';
import './ArtistItemCard.scss';

function ArtistItemCard({
  imageUrl,
  title,
  description,
  sellType,
  priceIconUrl,
  priceValue,
}) {
  return (
    <BaseItemCard
      imageUrl={imageUrl}
      title={title}
      description={description}
    >
      <div className="itemcard__price">
        <span className="itemcard__price-sell">{sellType}</span>
        <span className="itemcard__price-icon">
          <img src={priceIconUrl} alt="" />
        </span>
        <span className="itemcard__price-value">{priceValue}</span>
      </div>
    </BaseItemCard>
  );
}

ArtistItemCard.defaultProps = {
  imageUrl: '',
  title: '',
  description: '',
  sellType: '',
  priceIconUrl: '',
  priceValue: '',
};

ArtistItemCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  sellType: PropTypes.string,
  priceIconUrl: PropTypes.string,
  priceValue: PropTypes.string,
};

export default ArtistItemCard;
