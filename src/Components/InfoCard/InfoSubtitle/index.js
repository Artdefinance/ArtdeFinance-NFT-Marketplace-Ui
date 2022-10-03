import PropTypes from 'prop-types';
import './InfoSubtitle.scss';

function InfoSubtitle({ children }) {
  return (
    <strong className="infocard-subtitle">{children}</strong>
  );
}

InfoSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoSubtitle;
