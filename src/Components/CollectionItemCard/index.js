import PropTypes from 'prop-types';
import './CollectionItemCard.scss';

function CollectionItemCard({ imageUrl, name, stats }) {
  return (
    <div className="collection-itemcard">
      <div className="collection-itemcard__img" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}} />
      <span className="collection-itemcard__name">{name}</span>
      <ul className="collection-itemcard__stats">
        {stats.map(({ id, name: statName, value }) => (
          <li key={id} className="collection-itemcard__stat">
            <span className="collection-itemcard__stat-name">{statName}</span>
            <span className="collection-itemcard__stat-value">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

CollectionItemCard.defaultProps = {
  imageUrl: undefined,
  stats: [],
};

CollectionItemCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.node,
    value: PropTypes.node,
  })),
};

export default CollectionItemCard;
