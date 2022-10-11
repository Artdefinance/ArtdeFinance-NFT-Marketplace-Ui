import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icons from '../../Icons/Icons';
import './InputTitle.scss';

function InputTitle({ required, help, children }) {
  return (
    <div className={clsx('input-title', required && 'input-title--required')}>
      <span className="input-title__txt">{children}</span>
      {help && (
        <button type="button" className="input-title__help">
          <Icons shape="question" color="#366dfc" width={20} height={20} viewBox="0 0 20 20" />
        </button>
      )}
    </div>
  );
}

InputTitle.defaultProps = {
  required: false,
  help: false,
};

InputTitle.propTypes = {
  required: PropTypes.bool,
  help: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default InputTitle;
