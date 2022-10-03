import PropTypes from 'prop-types';
import InfoCard from './InfoCard';
import InfoPrice from './InfoPrice';
import TagLabel from '../TagLabel';
import './CuratorInfoCard.scss';

function CuratorInfoCard({ selected, title, name, imageUrl, primaryValue, secondaryValue }) {
  return (
    <InfoCard className="infocard--curator">
      {selected && <TagLabel>Selected</TagLabel>}
      <div className="infocard-curator">
        <div className="infocard-curator__title">{title}</div>
        <div className="infocard-curator__profile">
          <img src={imageUrl} alt={name} className="infocard-curator__profile-img" width="35" height="35" />
          {name}
        </div>
        <InfoPrice
          title="Curation Price"
          primaryValue={primaryValue}
          secondaryValue={secondaryValue}
        />
      </div>
    </InfoCard>
  );
}

CuratorInfoCard.defaultProps = {
  selected: false,
  title: 'Curator',
  imageUrl: '',
  name: '',
};

CuratorInfoCard.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  primaryValue: PropTypes.string.isRequired,
  secondaryValue: PropTypes.string.isRequired,
};

export default CuratorInfoCard;
