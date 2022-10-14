import PropTypes from 'prop-types';
import clsx from 'clsx';
import './PageTab.scss';

function PageTab({ selected, ariaControls, children }) {
  return (
    <button
      type="button"
      className={clsx('page-tab', selected && 'page-tab--selected')}
      aria-current={selected}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
}

PageTab.defaultProps = {
  selected: false,
  ariaControls: undefined,
  children: '',
};

PageTab.propTypes = {
  selected: PropTypes.bool,
  ariaControls: PropTypes.string,
  children: PropTypes.node,
};

export default PageTab;
