import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import {
  InfoCard,
  InfoSubtitle,
  InfoCurrencyInput,
  InfoPreviewComplete,
} from '../Components/InfoCard';
import Button from '../Components/Button/Button';
import InputTitle from '../Components/Inputs/InputTitle';
import Input from '../Components/Inputs/Input';
import RadioBox from '../Components/Inputs/RadioBox';
import Dropdown from '../Components/Dropdown/Dropdown';
import Alert from '../Components/Alert';
import ConfirmCheckbox from '../Components/Inputs/ConfirmCheckbox';
import VerificationCode from '../Components/Inputs/VerificationCode';
import ArtworksAuction1 from './ArtworksAuction1';
import ContactInformation from './ContactInformation';

function ArtworksAuction2Modal() {
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
  const imageUrl = 'https://source.unsplash.com/random/210x200/?art';

  return (
    <>
      <ArtworksAuction1 />
      <Modal
        open={!hide}
        className="marketplace-modal marketplace-artworks-modal"
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
        onClose={() => hideModal(true)}
      >
        <div className="marketplace-artworks-modal__content">
          <InfoCard className="marketplace-artworks-modal__infocard">
            <div className="marketplace-artworks-modal__sub-content">
              <h3 className="marketplace-artworks-modal__title">Place bid</h3>

              <div className="marketplace-artworks-modal__info">
                <div className="marketplace-artworks-modal__info-img">
                  <div className="marketplace-artworks-modal__info-img-inner" style={{ backgroundImage: `url(${imageUrl})` }} />
                </div>
                <span className="marketplace-artworks-modal__info-author">
                  Vincent van Gogh Tauba Auerbach Ryan Trecartin
                </span>
                <span className="marketplace-artworks-modal__info-name">
                  YVONNE BAR |1 ╳ 55| NFT PRIDE&XCARDS #1234765d4
                </span>
              </div>

              <InfoSubtitle>Fixed Price</InfoSubtitle>
              <InfoCurrencyInput
                value="7865.0129"
                type="value"
                currency="MATIC"
                compact
              />
              <div className="marketplace-modal__fee">
                <div className="marketplace-modal__fee-item">
                  <InputTitle help>Royalty Fee</InputTitle>
                  <span className="marketplace-modal__fee-per">5%</span>
                </div>
                <div className="marketplace-modal__fee-item">
                  <InputTitle help>Platform Fee</InputTitle>
                  <span className="marketplace-modal__fee-per">1%</span>
                </div>
              </div>
              <div className="marketplace-artworks-modal__balance-total">
                <div className="marketplace-modal__balance">
                  <InfoSubtitle>Balance</InfoSubtitle>
                  3455678909.0000
                  <span className="infocard-currency-tag">MATIC</span>
                </div>
                <div>
                  <div className="marketplace-modal__total">
                    You need
                    {' '}
                    <strong>8336.9136 MATIC</strong>
                    {' '}
                    + Gas fees
                  </div>
                </div>
              </div>
            </div>

            <ContactInformation hideModal={hideModal} />
          </InfoCard>

          <hr />

          <InfoCard className="marketplace-artworks-modal__infocard">
            <div className="marketplace-artworks-modal__sub-content">
              <h3 className="marketplace-artworks-modal__title">Complete your purchase</h3>
              <div className="marketplace-artworks-modal__info">
                <div className="marketplace-artworks-modal__info-img">
                  <div className="marketplace-artworks-modal__info-img-inner" style={{ backgroundImage: `url(${imageUrl})` }} />
                </div>
                <span className="marketplace-artworks-modal__info-author">
                  Vincent van Gogh Tauba Auerbach Ryan Trecartin
                </span>
                <span className="marketplace-artworks-modal__info-name">
                  YVONNE BAR |1 ╳ 55| NFT PRIDE&XCARDS #1234765d4
                </span>
              </div>

              <InfoSubtitle>Fixed Price</InfoSubtitle>
              <InfoCurrencyInput
                value="7865.0129"
                type="value"
                currency="MATIC"
                compact
              />
              <ConfirmCheckbox
                defaultChecked={false}
                name="Confirm offer"
                description="You’ll be asked to review and confirm this offer from your wallet."
              />
              <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1 marketplace-modal__btn-cancel" content="Cancel" />
            </div>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Your purchase has been completed</h3>
            <InfoPreviewComplete
              imageUrl="https://source.unsplash.com/random/543x302/?art"
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
        </div>
      </Modal>
    </>
  );
}

export default ArtworksAuction2Modal;
