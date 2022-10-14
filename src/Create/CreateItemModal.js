import { useState, useId } from 'react';
import Modal from '@material-ui/core/Modal';
import {
  InfoArtSummary,
  InfoCard,
  InfoPreviewComplete,
} from '../Components/InfoCard';
import ConfirmCheckbox from '../Components/Inputs/ConfirmCheckbox';
import Button from '../Components/Button/Button';
import CreateItem1 from './CreateItem1';

function CreateItemModal2() {
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

  return (
    <>
      <CreateItem1 />
      <Modal
        open={!hide}
        className="create-modal"
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
        onClose={() => hideModal(true)}
      >
        <div className="create-modal__content">
          <InfoCard compact>
            <h3 className="create-modal__title">Complete Checkout</h3>
            <InfoArtSummary
              imageUrl="https://source.unsplash.com/random/144x128/?art"
              author="Vincent van Gogh Tauba Auerbach Ryan Trecartin"
              title="Artworks minting collection #1234"
              summaries={[
                { name: 'Token Standard', value: 'ERC-721' },
                { name: 'Network', value: 'Polygon' },
              ]}
            />
            <ConfirmCheckbox
              defaultChecked={false}
              name="Confirm offer"
              description="You’ll be asked to review and confirm this offer from your wallet."
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1 create-modal__btn-cancel" content="Cancel" />
          </InfoCard>

          <hr />

          <InfoCard compact>
            <h3 className="create-modal__title">Your minted item</h3>
            <InfoPreviewComplete
              imageUrl="https://source.unsplash.com/random/234x297/?art"
              completeMessage="You just created artworks"
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1 create-modal__btn-confirm" content="Confirm" />
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default CreateItemModal2;
