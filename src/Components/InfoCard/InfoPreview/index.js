import PropTypes from 'prop-types';
import Icons from '../../Icons/Icons';
import './InfoPreview.scss';

function InfoPreview({ imageUrl }) {
  return (
    <div className="infocard-preview">
      <span className="infocard-preview__img">
        <img src={imageUrl} alt="" />
      </span>
      <button type="button" className="infocard-preview__btn-view">
        <Icons shape="expand" />
        <span>View Image</span>
      </button>
    </div>
  );
}

InfoPreview.defaultProps = {
  imageUrl: '',
};

InfoPreview.propTypes = {
  imageUrl: PropTypes.string,
};

export default InfoPreview;
