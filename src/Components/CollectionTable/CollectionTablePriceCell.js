import PropTypes from 'prop-types';

function CollectionTablePriceCell({ primaryValue, secondaryValue }) {
  return (
    <td className="collection-table__price-cell">
      <div className="collection-table__price-cell-inner">
        {primaryValue}
        <span>{` = ${secondaryValue}`}</span>
      </div>
    </td>
  );
}

CollectionTablePriceCell.propTypes = {
  primaryValue: PropTypes.string.isRequired,
  secondaryValue: PropTypes.string.isRequired,
};

export default CollectionTablePriceCell;
