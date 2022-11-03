import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconStyle from '../Icons/Icons';

function CollectionTableDateCell({ date, linkUrl }) {
  return (
    <td className="collection-table__date-cell">
      <Link to={linkUrl}>
        {date}
        <IconStyle shape="external-link" color="currentColor" width={18} height={18} viewBox="0 0 18 18" />
      </Link>
    </td>
  );
}

CollectionTableDateCell.propTypes = {
  date: PropTypes.node.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default CollectionTableDateCell;
