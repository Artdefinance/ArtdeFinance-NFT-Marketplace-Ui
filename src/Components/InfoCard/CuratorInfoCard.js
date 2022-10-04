import PropTypes from 'prop-types';
import InfoCard from './InfoCard';
import InfoPrice from './InfoPrice';
import TagLabel from '../TagLabel';
import InfoCurator from './InfoCurator';
import './CuratorInfoCard.scss';

function CuratorInfoCard({ selected, title, name, imageUrl, primaryValue, secondaryValue }) {
  return (
    <InfoCard className="infocard--curator">
      {selected && <TagLabel>Selected</TagLabel>}
      <InfoCurator
        title={title}
        imageUrl={imageUrl}
        name={name}
      />
      <InfoPrice
        title="Curation Price"
        primaryValue={primaryValue}
        secondaryValue={secondaryValue}
      />
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
