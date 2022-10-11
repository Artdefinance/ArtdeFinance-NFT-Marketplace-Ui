import PropTypes from 'prop-types';
import IconStyle from '../Icons/Icons';
import './WalletCopy.scss';

function WalletCopy({ isPopoverVisbile }) {
  return (
    <span className="wallet-copy__wrap">
      <IconStyle shape="copy-all" width={18} height={18} viewBox="0 0 18 18" />
      <em className="wallet-copy__popover" aria-hidden={!isPopoverVisbile}>Copy!</em>
    </span>
  );
}

WalletCopy.defaultProps = {
  isPopoverVisbile: false,
};

WalletCopy.propTypes = {
  isPopoverVisbile: PropTypes.bool,
};

export default WalletCopy;
