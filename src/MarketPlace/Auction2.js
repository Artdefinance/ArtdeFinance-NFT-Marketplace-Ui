import { useId } from 'react';
import Modal from '@material-ui/core/Modal';
import {
  InfoArtSummary,
  InfoCard,
  InfoCurrencyInput,
  InfoSchedule,
  InfoSubtitle,
} from '../Components/InfoCard';
import IconStyle from '../Components/Icons/Icons';
import ConfirmCheckbox from '../Components/Inputs/ConfirmCheckbox';
import Auction1 from './Auction1';

function Auction2() {
  const labelId = useId();
  const describeId = useId();
  const backdropProps = {
    style: {
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
    },
  };

  return (
    <>
      <Auction1 />
      <Modal
        open
        className="marketplace-modal"
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
      >
        <div className="marketplace-modal__content">
          <InfoCard compact>
            <h3 className="marketplace-modal__title">Place a bid</h3>
            <InfoSubtitle>Current bid</InfoSubtitle>
            <InfoCurrencyInput
              icon={<IconStyle shape="data-small--gray" width={17} height={20} viewBox="0 0 17 20" />}
              value="7687.0986"
              type="value"
              currency="MATIC"
            />
            <div className="marketplace-modal__price-cv">$ 359.00</div>
            <InfoSubtitle>Offer Amount</InfoSubtitle>
            <InfoCurrencyInput
              icon={<IconStyle shape="data-small--gray" width={17} height={20} viewBox="0 0 17 20" />}
              value={1500000}
              type="input"
              currency="MATIC"
            />
            <div className="marketplace-modal__price-cv">$ 359.00</div>
            <div className="marketplace-modal__balance">
              <InfoSubtitle>Balance</InfoSubtitle>
              3455678909.0000
              <span className="infocard-currency-tag">MATIC</span>
            </div>
            <div className="marketplace-modal__total">
              You need
              {' '}
              <strong>8336.9136 MATIC</strong>
              {' '}
              + Gas fees
            </div>
            <div className="marketplace-modal__buttons">
              <button className="button button--black-line button--mid button--type1" type="button">Cancel</button>
              <button className="button button--black button--mid button--type1" type="button" disabled>Auction Ended</button>
            </div>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Place a bid</h3>
            <InfoSubtitle>Current bid</InfoSubtitle>
            <InfoCurrencyInput
              icon={<IconStyle shape="data-small--gray" width={17} height={20} viewBox="0 0 17 20" />}
              value="7687.0986"
              type="value"
              currency="MATIC"
            />
            <div className="marketplace-modal__price-cv">$ 359.00</div>
            <InfoSubtitle>Offer Amount</InfoSubtitle>
            <InfoCurrencyInput
              icon={<IconStyle shape="data-small--gray" width={17} height={20} viewBox="0 0 17 20" />}
              value={1500000}
              type="input"
              currency="MATIC"
            />
            <div className="marketplace-modal__price-cv">$ 359.00</div>
            <div className="marketplace-modal__balance">
              <InfoSubtitle>Balance</InfoSubtitle>
              3455678909.0000
              <span className="infocard-currency-tag">MATIC</span>
            </div>
            <div className="marketplace-modal__buttons">
              <button className="button button--black-line button--mid button--type1" type="button">Cancel</button>
              <button className="button button--black button--mid button--type1" type="button" disabled>Bid Now</button>
            </div>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Cancel Offer</h3>
            <ConfirmCheckbox
              defaultChecked={false}
              name="Confirm Cancelation"
              description="You’ll be asked to review and confirm this offer from your wallet."
            />
            <button className="button button--black-line button--mid button--type1 marketplace-modal__btn-cancel" type="button">Cancel</button>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Place your bid</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="YVONNE BAR |1 x 55| NFT PRIDE&XCARDS"
              listPrice="7865.0129"
              listPriceUSD="$ 359.00"
            />
            <InfoSchedule
              period="7 Days"
              date="2022/04/04  03:23 - 2022/04/04  03:23"
            />
            <ConfirmCheckbox
              defaultChecked={false}
              name="Confirm offer"
              description="You’ll be asked to review and confirm this offer from your wallet."
            />
            <button className="button button--black-line button--mid button--type1 marketplace-modal__btn-cancel" type="button">Cancel</button>
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default Auction2;
