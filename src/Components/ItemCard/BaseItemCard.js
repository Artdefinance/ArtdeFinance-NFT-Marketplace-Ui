import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './BaseItemCard.scss';

function BaseItemCard({ className, imageUrl, title, description, children }) {
  return (
    <Link to="/path" className={clsx('itemcard', className)}>
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
  children: '',
};

BaseItemCard.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default BaseItemCard;
