import PropTypes from 'prop-types';

function CollectionTableCell({ children }) {
  return (
    <td className="collection-table__cell">
      <span>{children}</span>
    </td>
  );
}

CollectionTableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CollectionTableCell;
