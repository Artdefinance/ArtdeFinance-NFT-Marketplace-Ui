import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InfoTable.scss';

function InfoTableContainer({ className, cols, height, children }) {
  const hasHeight = height > 0;
  return (
    <table className={clsx('infotable', className, hasHeight && 'infotable--scroll')} style={hasHeight ? { height } : {}}>
      {cols.length > 0 && (
        <colgroup>
          {cols.map((col, index) => (
            <col key={`${index.toString()}-${col}`} style={{ width: `${col}px` }} />
          ))}
        </colgroup>
      )}
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

InfoTableContainer.defaultProps = {
  className: undefined,
  cols: [],
  height: 0,
};

InfoTableContainer.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default InfoTableContainer;
