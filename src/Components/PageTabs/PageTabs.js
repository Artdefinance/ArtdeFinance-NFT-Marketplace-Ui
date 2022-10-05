import PropTypes from 'prop-types';
import './PageTabs.scss';

function PageTabs({ children }) {
  return (
    <div className="page-tabs">
      {children}
    </div>
  );
}

PageTabs.defaultProps = {
  children: '',
};

PageTabs.propTypes = {
  children: PropTypes.node,
};

export default PageTabs;
