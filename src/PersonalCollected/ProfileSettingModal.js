import { useState, useId } from 'react';
import Modal from '@material-ui/core/Modal';
import { InfoSubtitle } from '../Components/InfoCard';
import OwnedEmpty from './OwnedEmpty';
import IconStyle from '../Components/Icons/Icons';
import WalletCopy from '../Components/WalletCopy';
import Button from '../Components/Button/Button';
import './ProfileSettingModal.scss';

function ProfileSettingModal() {
  const labelId = useId();
  const describeId = useId();
  const nameId = useId();
  const biographyId = useId();
  const backdropProps = {
    style: {
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
    },
  };
  const [hide, hideModal] = useState(false);
  const imageUrl = 'https://source.unsplash.com/random/90x90/?profile';
  const [isWalletPopoverVisible, setWalletPopoverVisible] = useState(false);
  const onClickWallet = () => {
    setWalletPopoverVisible(!isWalletPopoverVisible);
  };

  return (
    <>
      <OwnedEmpty />
      <Modal
        open={!hide}
        className="profile-setting-modal"
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
        onClose={() => hideModal(true)}
      >
        <div className="profile-setting-modal__content">
          <h3 className="profile-setting-modal__title">Profile Setting</h3>
          <div className="profile-setting-modal__img" style={{ backgroundImage: `url(${imageUrl})` }}>
            <button type="button" className="profile-setting-modal__btn-edit">
              <IconStyle shape="pencil" width={38} height={38} viewBox="0 0 38 38" />
            </button>
          </div>
          <div className="profile-setting-modal__body">
            <InfoSubtitle>Your username</InfoSubtitle>
            <label htmlFor={nameId} className="profile-setting-modal__name-label">
              <input id={nameId} className="profile-setting-modal__name-input" type="text" placeholder="Username" />
            </label>
            <InfoSubtitle>Biography</InfoSubtitle>
            <div className="profile-setting-modal__bio">
              <label htmlFor={biographyId} className="profile-setting-modal__bio-label">
                <textarea
                  id={biographyId}
                  className="profile-setting-modal__bio-textarea"
                  placeholder="Type your biography here."
                />
              </label>
              <span className="profile-setting-modal__bio-length">0/1000 byte</span>
            </div>
            <InfoSubtitle>Wallet Address</InfoSubtitle>
            <button type="button" className="profile-setting-modal__btn-wallet" onClick={onClickWallet}>
              <span className="profile-setting-modal__wallet-code">
                0x5423d6f1099f6616c7412e8c5360958c4b89432d
              </span>
              <WalletCopy isPopoverVisbile={isWalletPopoverVisible} />
            </button>
            <div className="profile-setting-modal__buttons">
              <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1 profile-setting-modal__btn-back" content="Back" />
              <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1 profile-setting-modal__btn-update" content="Update" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProfileSettingModal;
