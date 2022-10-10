import PropTypes from 'prop-types';

function InfoTableCell({ className, type, children }) {
  if (type === 'head') return <th className={className} scope="col">{children}</th>;

  return (
    <td className={className}>{children}</td>
  );
}

InfoTableCell.defaultProps = {
  className: undefined,
  type: undefined,
};

InfoTableCell.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([undefined, 'head']),
  children: PropTypes.node.isRequired,
};

export default InfoTableCell;
