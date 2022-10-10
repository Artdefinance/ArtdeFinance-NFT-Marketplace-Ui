import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InfoCard.scss';

function InfoCard({ className, compact, transparent, children }) {
  return (
    <div className="infocard-container">
      <div className={clsx('infocard', compact && 'infocard--compact', transparent && 'infocard--transparent', className)}>
        {children}
      </div>
    </div>
  );
}

InfoCard.defaultProps = {
  className: '',
  compact: false,
  transparent: false,
  children: '',
};

InfoCard.propTypes = {
  className: PropTypes.string,
  compact: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
};

export default InfoCard;
