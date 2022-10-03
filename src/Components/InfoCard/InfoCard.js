import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InfoCard.scss';

function InfoCard({ className, children }) {
  return (
    <div className="infocard-container">
      <div className={clsx('infocard', className)}>
        {children}
      </div>
    </div>
  );
}

InfoCard.defaultProps = {
  className: '',
  children: '',
};

InfoCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default InfoCard;
