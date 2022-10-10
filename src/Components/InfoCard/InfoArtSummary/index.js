import PropTypes from 'prop-types';
import IconStyle from '../../Icons/Icons';
import './InfoArtSummary.scss';

function InfoArtSummary({ imageUrl, title, author, listPrice, listPriceUSD }) {
  return (
    <div className="infocard-art-summary">
      <span className="infocard-art-summary__preview">
        <img src={imageUrl} alt={title} />
      </span>
      <div className="infocard-art-summary__detail">
        <span className="infocard-art-summary__author">{author}</span>
        <strong className="infocard-art-summary__title">{title}</strong>
        {!!listPrice && (
          <>
            <div className="infocard-art-summary__list-price">
              <span className="infocard-art-summary__list-price-title">List price</span>
              <IconStyle shape="matic" width={15} height={14} viewBox="0 0 15 14" />
              <span className="infocard-art-summary__list-price-value">{listPrice}</span>
            </div>
            <div className="infocard-art-summary__list-price-cv">{listPriceUSD}</div>
          </>
        )}
      </div>
    </div>
  );
}

InfoArtSummary.defaultProps = {
  listPrice: '',
  listPriceUSD: '',
};

InfoArtSummary.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  listPrice: PropTypes.string,
  listPriceUSD: PropTypes.string,
};

export default InfoArtSummary;
