import { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InfoSpecList.scss';

function InfoSpecList({ className, specs, compact, wide }) {
  return (
    <dl
      className={clsx('infocard-spec-list', className, {
        'infocard-spec-list--compact': compact,
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
  wide: false,
};

InfoSpecList.propTypes = {
  className: PropTypes.string,
  specs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  compact: PropTypes.bool,
  wide: PropTypes.bool,
};

export default InfoSpecList;
