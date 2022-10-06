import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './BaseItemCard.scss';

function BaseItemCard({ className, imageUrl, title, description, isSoldOut, children }) {
  return (
    <Link to="/path" className={clsx('itemcard', className, isSoldOut && 'itemcard--soldout')}>
      <div
        className="itemcard__img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <em className="itemcard__time-tag">
        <span>180d</span>
        <span>17h</span>
        <span>38m</span>
        <span>52s</span>
      </em>
      {isSoldOut && (
        <em className="itemcard__soldout-msg">SOLD OUT</em>
      )}
      <div className="itemcard__content">
        <p className="itemcard__title">{title}</p>
        <p className="itemcard__desc">{description}</p>
        {children}
      </div>
    </Link>
  );
}

BaseItemCard.defaultProps = {
  className: '',
  imageUrl: '',
  title: '',
  description: '',
  isSoldOut: false,
  children: '',
};

BaseItemCard.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isSoldOut: PropTypes.bool,
  children: PropTypes.node,
};

export default BaseItemCard;
