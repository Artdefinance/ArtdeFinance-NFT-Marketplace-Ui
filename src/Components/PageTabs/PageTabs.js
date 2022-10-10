import PropTypes from 'prop-types';
import clsx from 'clsx';
import './PageTabs.scss';

function PageTabs({ bordered, children }) {
  return (
    <div className={clsx('page-tabs', bordered && 'page-tabs--bordered')}>
      {children}
    </div>
  );
}

PageTabs.defaultProps = {
  bordered: false,
  children: '',
};

PageTabs.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node,
};

export default PageTabs;
