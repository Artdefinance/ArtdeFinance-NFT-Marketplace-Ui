import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';
import './ItemCardList.scss';

function ItemCardList({ className, isEmpty, children }) {
  if (isEmpty) {
    return (
      <div className={clsx('itemcard-list', 'itemcard-list--empty', className)}>
        <div className="itemcard-list__empty-image">
          <img src="/assets/images/common/itemlist-empty.png" alt="" width="308" height="209" />
        </div>
        <span className="itemcard-list__empty-msg">
          No item found for this search...
        </span>
        <Button className="button button--black button--mid button--type1 itemcard-list__btn-empty-back" content="Back to all list" />
      </div>
    );
  }

  return (
    <div className={clsx('itemcard-list', className)}>{children}</div>
  );
}

ItemCardList.defaultProps = {
  className: '',
  isEmpty: false,
  children: '',
};

ItemCardList.propTypes = {
  className: PropTypes.string,
  isEmpty: PropTypes.bool,
  children: PropTypes.node,
};

export default ItemCardList;
