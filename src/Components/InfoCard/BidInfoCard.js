import PropTypes from 'prop-types';
import InfoCard from './InfoCard';
import InfoSubtitle from './InfoSubtitle';
import InfoCurrencyInput from './InfoCurrency';
import IconStyle from '../Icons/Icons';
import './BidInfoCard.scss';

function BidInfoCard({ type }) {
  return (
    <InfoCard compact className={`infocard-bid infocard-bid--${type}`}>
      <div className="infocard-bid__info">
        <span className="infocard-bid__author">Vincent van Gogh Tauba Auerbach Ryan Trecartin</span>
        <strong className="infocard-bid__title">YVONNE BAR |1 x 55| NFT PRIDE&amp;XCARDS</strong>
        <div className="infocard-bid__profile">
          <div className="infocard-bid__profile-img">
            <img src="https://source.unsplash.com/random/128x128/?profile" alt="user" />
          </div>
          <div className="infocard-bid__profile-info">
            <span className="infocard-bid__profile-owner">Owner</span>
            <span className="infocard-bid__profile-name">Art de finance gallery labs</span>
          </div>
          <div className="infocard-bid__stat">
            <span className="infocard-bid__stat-like">14.5k</span>
            <span className="infocard-bid__stat-view">14.5k</span>
          </div>
        </div>
      </div>
      {['auction', 'auction-end', 'fixed-price'].includes(type) && (
        <div className="infocard-bid__time">
          <InfoSubtitle>Auction end in</InfoSubtitle>
          <span className="infocard-bid__time-slot">
            <span className="infocard-bid__time-num">00</span>
            Days
          </span>
          <span className="infocard-bid__time-sep">:</span>
          <span className="infocard-bid__time-slot">
            <span className="infocard-bid__time-num">00</span>
            Hours
          </span>
          <span className="infocard-bid__time-sep">:</span>
          <span className="infocard-bid__time-slot">
            <span className="infocard-bid__time-num">00</span>
            Mins
          </span>
          <span className="infocard-bid__time-sep">:</span>
          <span className="infocard-bid__time-slot">
            <span className="infocard-bid__time-num">00</span>
            Secs
          </span>
        </div>
      )}
      {type.startsWith('auction') && (
        <>
          <InfoSubtitle>Start Bid</InfoSubtitle>
          <InfoCurrencyInput
            icon={<IconStyle shape="eth" width={12} height={20} viewBox="0 0 12 20" />}
            value="7687.0986"
            type="value"
            currency="ETH"
          />
          <InfoSubtitle>Current Bid</InfoSubtitle>
          <InfoCurrencyInput
            icon={<IconStyle shape="eth" width={12} height={20} viewBox="0 0 12 20" />}
            value="1,500,000.00"
            type="value"
            currency="ETH"
          />
        </>
      )}
      {type === 'fixed-price' && (
        <>
          <InfoSubtitle>Fixed Price</InfoSubtitle>
          <InfoCurrencyInput
            icon={<IconStyle shape="eth" width={12} height={20} viewBox="0 0 12 20" />}
            value="7687.0986"
            type="value"
            currency="ETH"
          />
        </>
      )}
      {['auction', 'fixed-price'].includes(type) && (
        <button className="button button--black button--mid button--type1 infocard-bid__btn-place-bid" type="button">Place Bid</button>
      )}
      {type === 'auction-self' && (
        <button className="button button--black button--mid button--type1 infocard-bid__btn-place-bid" type="button" disabled>Place Bid</button>
      )}
      {type === 'auction-end' && (
        <button className="button button--black button--mid button--type1 infocard-bid__btn-place-bid" type="button" disabled>Auction Ended</button>
      )}
      {type === 'listing' && (
        <div className="infocard-bid__listing">
          <button className="button button--black-line button--mid button--type1 infocard-bid__btn-edit" type="button">Edit</button>
          <button className="button button--black button--mid button--type1 infocard-bid__btn-sell" type="button">Sell</button>
        </div>
      )}
      {type === 'listing-cancel' && (
        <div className="infocard-bid__listing">
          <button className="button button--black-line button--mid button--type1 infocard-bid__btn-cancel-listing" type="button">Cancel Listing</button>
        </div>
      )}
    </InfoCard>
  );
}

BidInfoCard.propTypes = {
  type: PropTypes.oneOf(['auction', 'auction-end', 'auction-self', 'fixed-price', 'listing', 'listing-cancel']).isRequired,
};

export default BidInfoCard;
