import PropTypes from 'prop-types';
import TagLabel from '../TagLabel';

function CollectionTableItemCell({ tagText, imageUrl, author, name }) {
  return (
    <td className="collection-table__item-cell">
      <div className="collection-table__item-cell-inner">
        <TagLabel type="compact">{tagText}</TagLabel>
        <div className="collection-table__item-cell-img" style={{ backgroundImage: `url(${imageUrl})` }} />
        <span className="collection-table__item-cell-author">{author}</span>
        <span className="collection-table__item-cell-name">{name}</span>
      </div>
    </td>
  );
}

CollectionTableItemCell.propTypes = {
  tagText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CollectionTableItemCell;
