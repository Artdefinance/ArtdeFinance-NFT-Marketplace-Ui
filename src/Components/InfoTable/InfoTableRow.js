import PropTypes from 'prop-types';
import clsx from 'clsx';

function InfoTableRow({ className, type, children }) {
  return (
    <tr className={clsx('infotable__row', type === 'head' ? 'infotable__row--head' : 'infotable__row--item', className)}>
      {children}
    </tr>
  );
}

InfoTableRow.defaultProps = {
  className: undefined,
  type: undefined,
};

InfoTableRow.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([undefined, 'head']),
  children: PropTypes.node.isRequired,
};

export default InfoTableRow;
