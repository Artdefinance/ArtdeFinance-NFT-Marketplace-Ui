import PropTypes from 'prop-types';
import IconStyle from '../Icons/Icons';

function CollectionTableDateCell({ date }) {
  return (
    <td className="collection-table__date-cell">
      {date}
      <IconStyle shape="external-link" color="currentColor" width={18} height={18} viewBox="0 0 18 18" />
    </td>
  );
}

CollectionTableDateCell.propTypes = {
  date: PropTypes.node.isRequired,
};

export default CollectionTableDateCell;
