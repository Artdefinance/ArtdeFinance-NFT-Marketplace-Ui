import PropTypes from 'prop-types';
import InfoSubtitle from '../InfoSubtitle';
import './InfoSchedule.scss';

function InfoSchedule({ period, date }) {
  return (
    <div className="infocard-schedule">
      <InfoSubtitle>Scheduled for</InfoSubtitle>
      <span className="infocard-schedule__period">{period}</span>
      <span className="infocard-schedule__date">{date}</span>
    </div>
  );
}

InfoSchedule.propTypes = {
  period: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default InfoSchedule;
