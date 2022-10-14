import PropTypes from 'prop-types';
import './CollectionTable.scss';

function CollectionTable({ children }) {
  return (
    <table className="collection-table">
      <colgroup>
        <col style={{ width: 398 }} />
        <col style={{ width: 168 }} />
        <col style={{ width: 119 }} />
        <col style={{ width: 195 }} />
        <col style={{ width: 187 }} />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Price</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

CollectionTable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CollectionTable;
