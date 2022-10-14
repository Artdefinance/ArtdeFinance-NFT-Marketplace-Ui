import PropTypes from 'prop-types';
import './InfoHistory.scss';

function InfoHistory({ historyList }) {
  return (
    <ul className="infocard-history">
      {historyList.map(([year, content, location], index) => (
        <li key={`${index.toString()}-${year}`} className="infocard-history__item">
          <span className="infocard-history__year">{year}</span>
          <span className="infocard-history__content">{content}</span>
          <span className="infocard-history__location">{location}</span>
        </li>
      ))}
    </ul>
  );
}

InfoHistory.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default InfoHistory;
