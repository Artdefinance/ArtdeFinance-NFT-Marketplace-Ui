import PropTypes from 'prop-types';
import './InfoTitle.scss';

function InfoTitle({ children }) {
  return (
    <h3 className="infocard-title">{children}</h3>
  );
}

InfoTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoTitle;
