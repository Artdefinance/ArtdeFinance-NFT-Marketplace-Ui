import { useState, useId } from 'react';
import Modal from '@material-ui/core/Modal';
import { InfoCard } from '../Components/InfoCard';
import ConfirmCheckbox from '../Components/Inputs/ConfirmCheckbox';
import Button from '../Components/Button/Button';
import Auction4 from './Auction4';

function Auction4Modal() {
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
      <Auction4 />
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
            <h3 className="marketplace-modal__title">Cancel listing</h3>
            <ConfirmCheckbox
              defaultChecked={false}
              name="Confirm Cancelation"
              description="You’ll be asked to review and confirm this offer from your wallet."
            />
            <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1 marketplace-modal__btn-cancel" content="Cancel" />
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default Auction4Modal;
