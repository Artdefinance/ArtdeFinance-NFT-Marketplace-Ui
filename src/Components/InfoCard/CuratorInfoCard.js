import PropTypes from 'prop-types';
import InfoCard from './InfoCard';
import InfoPrice from './InfoPrice';
import TagLabel from '../TagLabel';
import InfoCurator from './InfoCurator';
import './CuratorInfoCard.scss';

function CuratorInfoCard({
  selected,
  selectedText,
  title,
  name,
  imageUrl,
  primaryValue,
  secondaryValue,
  percentage,
}) {
  return (
    <InfoCard className="infocard--curator">
      {selected && <TagLabel>{selectedText}</TagLabel>}
      <InfoCurator
        selected={selected}
        title={title}
        imageUrl={imageUrl}
        name={name}
        percentage={percentage}
      />
      <InfoPrice
        compact
        title="Curation Price"
        primaryValue={primaryValue}
        secondaryValue={secondaryValue}
      />
    </InfoCard>
  );
}

CuratorInfoCard.defaultProps = {
  selected: false,
  selectedText: 'Selected',
  title: 'Curator',
  imageUrl: '',
  name: '',
  percentage: undefined,
};

CuratorInfoCard.propTypes = {
  selected: PropTypes.bool,
  selectedText: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  primaryValue: PropTypes.string.isRequired,
  secondaryValue: PropTypes.string.isRequired,
  percentage: PropTypes.number,
};

export default CuratorInfoCard;
