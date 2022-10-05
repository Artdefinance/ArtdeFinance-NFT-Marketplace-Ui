import PropTypes from 'prop-types';
import './CuratorInfoCardList.scss';

function CuratorInfoCardList({ children }) {
  return (
    <div className="curator-infocard-list">
      {children}
    </div>
  );
}

CuratorInfoCardList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CuratorInfoCardList;
