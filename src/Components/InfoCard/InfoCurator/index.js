import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InfoCurator.scss';

function InfoCurator({ title, name, imageUrl, percentage, selected, wide }) {
  return (
    <div className={clsx('infocard-curator', wide && 'infocard-curator--wide')}>
      <div className="infocard-curator__title">{title}</div>
      <div className="infocard-curator__profile">
        <img src={imageUrl} alt={name} className="infocard-curator__profile-img" width="35" height="35" />
        <span className="infocard-curator__profile-name">{name}</span>
        {percentage && (
          <div className={clsx('infocard-curator__percentage', selected && 'infocard-curator__percentage--selected')}>
            {percentage}
            <span className="infocard-curator__percentage-sign">%</span>
          </div>
        )}
      </div>
    </div>
  );
}

InfoCurator.defaultProps = {
  title: 'Curator',
  imageUrl: '',
  name: '',
  percentage: undefined,
  selected: false,
  wide: false,
};

InfoCurator.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  percentage: PropTypes.number,
  selected: PropTypes.bool,
  wide: PropTypes.bool,
};

export default InfoCurator;
