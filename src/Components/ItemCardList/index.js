import PropTypes from 'prop-types';
import './ItemCardList.scss';
import clsx from 'clsx';

function ItemCardList({ children, className }) {
  return (
    <div className={clsx('itemcard-list', className)}>{children}</div>
  );
}

ItemCardList.defaultProps = {
  className: '',
  children: '',
};

ItemCardList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ItemCardList;
