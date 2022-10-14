import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconStyle from '../Icons/Icons';
import WalletCopy from '../WalletCopy';
import './UserInfo.scss';

function UserInfo() {
  const profileImageUrl = 'https://source.unsplash.com/random/128x128/?profile';
  const walletAddress = '0x5412...432d3';
  const iconArrowRight = <IconStyle shape="arrow-right" width={18} height={18} viewBox="0 0 18 18" />;
  const [isWalletPopoverVisible, setWalletPopoverVisible] = useState(true);
  const onClickWallet = () => {
    setWalletPopoverVisible(!isWalletPopoverVisible);
  };

  return (
    <div className="userinfo">
      <button type="button" className="userinfo__btn-close">
        <span className="a11y">Close</span>
        <IconStyle shape="close" />
      </button>
      <div className="userinfo__profile-img">
        <img src={profileImageUrl} alt="" />
        <button type="button" className="userinfo__btn-config">
          <span className="a11y">Config</span>
          <IconStyle shape="setting" />
        </button>
      </div>
      <button type="button" className="userinfo__btn-wallet" onClick={onClickWallet}>
        {walletAddress}
        <WalletCopy isPopoverVisbile={isWalletPopoverVisible} />
      </button>
      <ul className="userinfo__links">
        <li>
          <Link to="/personal-collected/collections" className="userinfo__link">
            Collections
            {iconArrowRight}
          </Link>
        </li>
        <li>
          <Link to="/personal-collected/owned" className="userinfo__link userinfo__link--selected">
            Owned
            {iconArrowRight}
          </Link>
        </li>
        <li>
          <Link to="/personal-collected/ownedEmpty" className="userinfo__link">
            Created
            {iconArrowRight}
          </Link>
        </li>
        <li>
          <Link to="/personal-collected/activity" className="userinfo__link">
            Activity
            {iconArrowRight}
          </Link>
        </li>
      </ul>
      <div className="userinfo__accounts">
        <span className="userinfo__accounts-title">Your Account</span>
        <ul className="userinfo__accounts-list">
          <li className="userinfo__account">
            <span className="userinfo__account-eth">
              <IconStyle shape="user-eth" width={9} height={14} viewBox="0 0 9 14" />
            </span>
            <span className="userinfo__account-name">ETH</span>
            <span className="userinfo__account-value">8765.9875</span>
          </li>
          <li className="userinfo__account">
            <span className="userinfo__account-matic">
              <IconStyle shape="user-matic" width={12} height={12} viewBox="0 0 12 12" />
            </span>
            <span className="userinfo__account-name">MATIC</span>
            <span className="userinfo__account-value">8765.9875</span>
          </li>
          <li className="userinfo__account">
            <span className="userinfo__account-bnb">
              <IconStyle shape="user-bnb" width={14} height={14} viewBox="0 0 14 14" />
            </span>
            <span className="userinfo__account-name">BNB</span>
            <span className="userinfo__account-value">8765.9875</span>
          </li>
          <li className="userinfo__account">
            <span className="userinfo__account-busd">
              <IconStyle shape="user-busd" width={14} height={14} viewBox="0 0 14 14" />
            </span>
            <span className="userinfo__account-name">BUSD</span>
            <span className="userinfo__account-value">8765.9875</span>
          </li>
          <li className="userinfo__account">
            <span className="userinfo__account-adf">
              <IconStyle shape="user-adf" width={14} height={14} viewBox="0 0 14 14" />
            </span>
            <span className="userinfo__account-name">ADF</span>
            <span className="userinfo__account-value">8765.9875</span>
          </li>
          <li className="userinfo__account">
            <span className="userinfo__account-adf">
              <IconStyle shape="user-adf" width={14} height={14} viewBox="0 0 14 14" />
            </span>
            <span className="userinfo__account-name">vADF</span>
            <span className="userinfo__account-value">8765.9875</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
