import PropTypes from 'prop-types';
import './InfoParagraph.scss';

function InfoParagraph({ children }) {
  return (
    <p className="infocard-paragraph">{children}</p>
  );
}

InfoParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoParagraph;
