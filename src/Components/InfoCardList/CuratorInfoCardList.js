import PropTypes from 'prop-types';
import clsx from 'clsx';
import './CuratorInfoCardList.scss';

function CuratorInfoCardList({ columnCount, children }) {
  return (
    <div className={clsx('curator-infocard-list', columnCount === 2 && 'curator-infocard-list--column2')}>
      {children}
    </div>
  );
}

CuratorInfoCardList.defaultProps = {
  columnCount: 3,
};

CuratorInfoCardList.propTypes = {
  columnCount: PropTypes.oneOf([2, 3]),
  children: PropTypes.node.isRequired,
};

export default CuratorInfoCardList;
