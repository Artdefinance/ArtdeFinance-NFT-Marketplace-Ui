import { useState, useId } from 'react';
import Modal from '@material-ui/core/Modal';
import {
  InfoArtSummary,
  InfoCard,
  InfoPreviewComplete,
  InfoSubtitle,
} from '../Components/InfoCard';
import ConfirmCheckbox from '../Components/Inputs/ConfirmCheckbox';
import FixedPrice1 from './FixedPrice1';
import Button from '../Components/Button/Button';
import IconStyle from '../Components/Icons/Icons';

function FixedPrice2() {
  const labelId = useId();
  const describeId = useId();
  const backdropProps = {
    style: {
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
    },
  };
  const [hide, hideModal] = useState(false);
  const questionIcon = (
    <IconStyle shape="question" width={20} height={20} viewBox="0 0 20 20" color="#366DFC" />
  );

  return (
    <>
      <FixedPrice1 />
      <Modal
        open={!hide}
        className="marketplace-modal"
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
        onClose={() => hideModal(true)}
      >
        <div className="marketplace-modal__content">
          <InfoCard compact>
            <h3 className="marketplace-modal__title">Complete Checkout</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="YVONNE BAR |1 x 55| NFT PRIDE&XCARDS"
              listPrice="7865.0129"
              listPriceUSD="$ 359.00"
            />
            <div className="marketplace-modal__fee">
              <div className="marketplace-modal__fee-item">
                <InfoSubtitle>
                  Royalty Fee
                  {questionIcon}
                </InfoSubtitle>
                <span className="marketplace-modal__fee-per">5%</span>
              </div>
              <div className="marketplace-modal__fee-item">
                <InfoSubtitle>
                  Platform Fee
                  {questionIcon}
                </InfoSubtitle>
                <span className="marketplace-modal__fee-per">1%</span>
              </div>
            </div>
            <div className="marketplace-modal__balance">
              <InfoSubtitle>Balance</InfoSubtitle>
              3455678909.0000
              <span className="infocard-currency-tag">MATIC</span>
            </div>
            <div className="marketplace-modal__buttons">
              <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1" content="Cancel" />
              <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1" content="Complete Purchase" />
            </div>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Complete Checkout</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="YVONNE BAR |1 x 55| NFT PRIDE&XCARDS"
              listPrice="7865.0129"
              listPriceUSD="$ 359.00"
            />
            <div className="marketplace-modal__fee">
              <div className="marketplace-modal__fee-item">
                <InfoSubtitle>
                  Royalty Fee
                  {questionIcon}
                </InfoSubtitle>
                <span className="marketplace-modal__fee-per">5%</span>
              </div>
              <div className="marketplace-modal__fee-item">
                <InfoSubtitle>
                  Platform Fee
                  {questionIcon}
                </InfoSubtitle>
                <span className="marketplace-modal__fee-per">1%</span>
              </div>
            </div>
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
              <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1" content="Cancel" />
              <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1" content="Complete Purchase" disabled />
            </div>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Your Purchase has been completed</h3>
            <InfoPreviewComplete
              imageUrl="https://source.unsplash.com/random/250x250/?art"
              completeMessage={(
                <>
                  You purchased artwork NFT #0001 from the
                  {' '}
                  <em>Collections Name artdefinance NFT art collections</em>
                  {' '}
                  collection.
                </>
              )}
              transactionId="0x4461....2d63"
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1 marketplace-modal__btn-confirm" content="Confirm" />
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Complete Checkout</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="YVONNE BAR |1 x 55| NFT PRIDE&XCARDS"
              listPrice="7865.0129"
              listPriceUSD="$ 359.00"
            />
            <ConfirmCheckbox
              defaultChecked={false}
              name="Confirm offer"
              description="You’ll be asked to review and confirm this offer from your wallet."
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1 marketplace-modal__btn-cancel" content="Cancel" />
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default FixedPrice2;
