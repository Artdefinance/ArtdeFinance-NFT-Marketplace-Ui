import PropTypes from 'prop-types';
import './InfoCurator.scss';

function InfoCurator({ title, name, imageUrl }) {
  return (
    <div className="infocard-curator">
      <div className="infocard-curator__title">{title}</div>
      <div className="infocard-curator__profile">
        <img src={imageUrl} alt={name} className="infocard-curator__profile-img" width="35" height="35" />
        {name}
      </div>
    </div>
  );
}

InfoCurator.defaultProps = {
  title: 'Curator',
  imageUrl: '',
  name: '',
};

InfoCurator.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};

export default InfoCurator;
