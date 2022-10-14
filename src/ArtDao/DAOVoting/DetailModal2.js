import { useState, useId } from 'react';
import Modal from '@material-ui/core/Modal';
import Detail from './Detail';
import {
  InfoCard,
  InfoCurator,
  InfoSubtitle,
  InfoTitle,
} from '../../Components/InfoCard';
import Button from '../../Components/Button/Button';
import Icons from '../../Components/Icons/Icons';

function DaoVotingDetailModal2() {
  const curatorImageUrl = 'https://source.unsplash.com/random/128x128/?profile';
  const labelId = useId();
  const describeId = useId();
  const inputId = useId();
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
      <Detail />
      <Modal
        className="modal-dao-voting"
        open={!hide}
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
        onClose={() => hideModal(true)}
      >
        <div className="modal-dao-voting__content">
          <InfoCard>
            <strong className="modal-voting__title">Art Dao Voting</strong>
            <InfoCurator
              name="Artdefinance Reality sub labs gallery"
              imageUrl={curatorImageUrl}
              wide
            />
            <div className="modal-voting__body">
              <InfoSubtitle>Curation Price</InfoSubtitle>
              <div className="modal-voting__price">
                <div className="modal-voting__price-item">
                  <Icons shape="data-small" width={18} height={18} viewBox="0 0 18 18" />
                  <span className="modal-voting__price-primary">1,500,000.00</span>
                  <span className="modal-voting__price-type">USD</span>
                </div>
                <div className="modal-voting__price-item">
                  <Icons shape="busd" width={16} height={16} viewBox="0 0 16 16" />
                  <span className="modal-voting__price-secondary">1,500,000.00</span>
                  <span className="modal-voting__price-type">BUSD</span>
                </div>
              </div>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
              <InfoTitle>vADF Amount</InfoTitle>
              <div className="modal-voting__amount">
                <span className="modal-voting__amount-status">Available</span>
                <span className="modal-voting__amount-value">1,000,000,000.000 vADF</span>
                <label htmlFor={inputId} className="modal-voting__amount-label">
                  <input id={inputId} type="number" className="modal-voting__amount-input" min="0" step="0.01" placeholder="0.00" />
                  <span className="modal-voting__price-type">vADF</span>
                </label>
                <span className="modal-voting__amount-info">Minimum order amount 1,000 vADF</span>
              </div>
              <div className="modal-voting__info">
                <p>Once you vote, you cannot cancel it.</p>
                <p>
                  Voting power increases according to the number
                  of vADF tokens used for voting.
                </p>
                <p>
                  If you want to get high voter turnout for the
                  curators you choose, try using more vADF tokens.
                </p>
                <p>
                  If the curator who voted for the vADF token used for voting is selected,
                  the vADF token is not returned.
                </p>
                <p>
                  However, if the work is sold in the market,
                  it will be rewarded with ADF tokens.
                </p>
                <p>
                  If the curator you voted for is not selected,
                  the used vADF token is returned.
                </p>
                <p>Please try again on your next project.</p>
              </div>
              <div className="modal-dao-voting__footer">
                <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid modal-dao-voting__btn-cancel" content="Cancel" />
                <Button pressFucn={() => hideModal(true)} className="button button--black button--mid modal-dao-voting__btn-confirm" content="Voting" type="type1" />
              </div>
            </form>
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default DaoVotingDetailModal2;
