import { useState, useId } from 'react';
import Modal from '@material-ui/core/Modal';
import {
  InfoArtSummary,
  InfoCard,
  InfoPreviewComplete,
  InfoSchedule,
  InfoSubtitle,
} from '../Components/InfoCard';
import ConfirmCheckbox from '../Components/Inputs/ConfirmCheckbox';
import RadioBox from '../Components/Inputs/RadioBox';
import Dropdown from '../Components/Dropdown/Dropdown';
import Button from '../Components/Button/Button';
import IconStyle from '../Components/Icons/Icons';
import Listing1 from './Listing1';

// TODO
function Listing1Modal() {
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
  const priceTypes = [
    {
      id: '1',
      title: (
        <>
          <IconStyle shape="eth" />
          ETH
        </>
      ),
    },
    {
      id: '2',
      title: (
        <>
          <IconStyle shape="matic" />
          MATIC
        </>
      ),
    },
  ];
  const durations = [
    {
      id: '1',
      title: '1 Day',
    },
    {
      id: '2',
      title: '3 Days',
    },
    {
      id: '3',
      title: '7 Days',
    },
  ];

  return (
    <>
      <Listing1 />
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
            <h3 className="marketplace-modal__title">Marketplace Listing</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="YVONNE BAR |1 x 55| NFT PRIDE&XCARDS"
              listPrice="7865.0129"
              listPriceUSD="$ 359.00"
            />
            <InfoSubtitle>Sale Types</InfoSubtitle>
            <RadioBox options={['Fixed Price', 'Auction']} />
            <InfoSubtitle>Bid Starting Price</InfoSubtitle>
            <div className="marketplace-modal__starting">
              <Dropdown dropWidth="196px" dropHeight="80px" dropTitle="Bid Starting Price" content={priceTypes} defaultSelectedId="1" dropFontSize="24px" dropFontColor="#000" />
              <input type="number" className="marketplace-modal__starting-input" min="0" step="0.01" placeholder="0.00" />
            </div>
            <InfoSubtitle>Duration</InfoSubtitle>
            <Dropdown dropWidth="100%" dropHeight="80px" dropTitle="Duration" content={durations} defaultSelectedId="1" dropFontSize="24px" dropFontColor="#bbb" />
            <div className="marketplace-modal__buttons">
              <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1" content="Cancel" />
              <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1" content="Complete Purchase" />
            </div>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Marketplace Listing</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="YVONNE BAR |1 x 55| NFT PRIDE&XCARDS"
              listPrice="7865.0129"
              listPriceUSD="$ 359.00"
            />
            <InfoSubtitle>Sale Types</InfoSubtitle>
            <RadioBox options={['Fixed Price', 'Auction']} />
            <InfoSubtitle>Bid Starting Price</InfoSubtitle>
            <div className="marketplace-modal__starting">
              <Dropdown dropWidth="196px" dropHeight="80px" dropTitle="Bid Starting Price" content={priceTypes} defaultSelectedId="1" dropFontSize="24px" dropFontColor="#000" />
              <input type="number" className="marketplace-modal__starting-input" min="0" step="0.01" placeholder="0.00" />
            </div>
            <div className="marketplace-modal__buttons">
              <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1" content="Cancel" />
              <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1" content="Complete Purchase" />
            </div>
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Complete yout listing</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="YVONNE BAR |1 x 55| NFT PRIDE&XCARDS"
              listPrice="7865.0129"
              listPriceUSD="$ 359.00"
            />
            <ConfirmCheckbox
              defaultChecked={false}
              name="Confirm listing"
              description="You’ll be asked to review and confirm this offer from your wallet."
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1 marketplace-modal__btn-cancel" content="Cancel" />
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Complete yout listing</h3>
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
              name="Confirm listing"
              description="You’ll be asked to review and confirm this offer from your wallet."
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1 marketplace-modal__btn-cancel" content="Cancel" />
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="marketplace-modal__title">Your item has been listed!</h3>
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
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1 marketplace-modal__btn-confirm" content="View Lisitng" />
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default Listing1Modal;
