import PropTypes from 'prop-types';
import InfoCardListPane from './InfoCardListPane';
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

InfoCardList.Pane = InfoCardListPane;

export default InfoCardList;
