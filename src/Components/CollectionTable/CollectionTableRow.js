import PropTypes from 'prop-types';

function CollectionTableRow({ children }) {
  return (
    <tr className="collection-table__row">{children}</tr>
  );
}

CollectionTableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CollectionTableRow;
