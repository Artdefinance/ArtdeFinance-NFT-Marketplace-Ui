import PropTypes from 'prop-types';
import './InfoCardList.scss';

function InfoCardList({ children }) {
  return (
    <div className="infocard-list">
      {children}
    </div>
  );
}

InfoCardList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoCardList;
