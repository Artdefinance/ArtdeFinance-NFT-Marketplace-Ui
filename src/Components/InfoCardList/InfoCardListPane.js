import PropTypes from 'prop-types';
import './InfoCardList.scss';

function InfoCardListPane({ children }) {
  return (
    <div className="infocard-list-pane">
      {children}
    </div>
  );
}

InfoCardListPane.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoCardListPane;
