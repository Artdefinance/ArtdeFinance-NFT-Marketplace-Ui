import PropTypes from 'prop-types';
import InfoCard from './InfoCard';
import InfoSubtitle from './InfoSubtitle';
import InfoCurrencyInput from './InfoCurrency';
import InfoPrice from './InfoPrice';
import InfoAccordion from './InfoAccordion';
import InfoParagraph from './InfoParagraph';
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
      {type === 'artworks-1' && (
        <div className="infocard-bid__artworks-price">
          <InfoPrice title="Start Bid" primaryValue="768.0986" secondaryValue="1,500,000.00" />
          <InfoPrice title="Current Bid" primaryValue="768.0986" secondaryValue="1,500,000.00" />
        </div>
      )}
      {type === 'artworks-2' && (
        <div className="infocard-bid__artworks-price">
          <InfoPrice title="Fixed Price" primaryValue="768.0986" secondaryValue="1,500,000.00" />
        </div>
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
      {['auction', 'fixed-price', 'artworks-1', 'artworks-2'].includes(type) && (
        <button className="button button--black button--mid button--type1 infocard-bid__btn-place-bid" type="button">Place Bid</button>
      )}
      {['auction-self', 'artworks-1'].includes(type) && (
        <button className="button button--black button--mid button--type1 infocard-bid__btn-place-bid" type="button" disabled>Place Bid</button>
      )}
      {['auction-end', 'artworks-1'].includes(type) && (
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
      {['artworks-1', 'artworks-2'].includes(type) && (
        <>
          <h4 className="infocard-bid__artworks-title">입찰 전 확인사항</h4>
          <InfoAccordion title="입찰 안내">
            <InfoParagraph>
              경매 참여 시 응찰 및 낙찰은 취소가 불가합니다.
              경매 참여 시 신중하게 작품을 선택하고 응찰해주시기 바랍니다.
              갤러리에서 작품 상태 및 컨디션 확인 후 진행되는 것을 전제로 하며, 작품에 대한 컨디션에 액자 상태는 포함되지 않습니다.
              작품 낙찰 시 낙찰금의 n%(부가세 별도)의 구매 수수료가 발생합니다.
            </InfoParagraph>
          </InfoAccordion>
          <InfoAccordion title="작품 보관/배송">
            <InfoParagraph>
              결제 시 작품을 배송 또는 갤러리 보관 중에서 선택할 수 있습니다.
              (작품 보관이 불가능한 갤러리일 경우 배송만 가능합니다.)
              작품 배송을 한 경우 다시 갤러리로 보관을 요청할 수는 없습니다.
              배송 요청 시 작품 배송은 작품을 판매한 갤러리에서 진행하며, 갤러리에서 직접 연락을 하여 배송 정보 및 일정을 확인 후 진행됩니다.
              작품 배송 시 안전하고 정확하게 배송하기 위해 지역에 따라 추가 배송비가 발생될 수 있습니다.
              작품 배송 방식은 갤러리마다 다르므로, 자세한 내용은 해당 갤러리에 문의 바랍니다.
            </InfoParagraph>
          </InfoAccordion>
        </>
      )}
    </InfoCard>
  );
}

BidInfoCard.propTypes = {
  type: PropTypes.oneOf(['auction', 'auction-end', 'auction-self', 'fixed-price', 'listing', 'listing-cancel', 'artworks-1', 'artworks-2', 'artworks-3']).isRequired,
};

export default BidInfoCard;
