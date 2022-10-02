import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import './TagLabel.scss';

function TagLabel({ children, type }) {
  return (
    <em className={clsx('tag-label', `tag-label--${type}`)}>{children}</em>
  );
}

TagLabel.defaultProps = {
  children: '',
  type: '',
};

TagLabel.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['live']),
};

export default TagLabel;
