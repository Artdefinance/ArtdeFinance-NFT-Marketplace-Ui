import { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InfoSpecList.scss';

function InfoSpecList({ className, specs, compact, semiCompact, wide }) {
  return (
    <dl
      className={clsx('infocard-spec-list', className, {
        'infocard-spec-list--compact': compact,
        'infocard-spec-list--semi-compact': semiCompact,
        'infocard-spec-list--wide': wide,
      })}
    >
      {specs.map(([title, description], index) => (
        <Fragment key={`${index.toString()}-${title}`}>
          <dt>{title}</dt>
          <dd>{description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

InfoSpecList.defaultProps = {
  className: '',
  compact: false,
  semiCompact: false,
  wide: false,
};

InfoSpecList.propTypes = {
  className: PropTypes.string,
  specs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  compact: PropTypes.bool,
  semiCompact: PropTypes.bool,
  wide: PropTypes.bool,
};

export default InfoSpecList;
