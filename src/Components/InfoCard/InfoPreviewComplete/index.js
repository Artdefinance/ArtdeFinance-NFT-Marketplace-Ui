import PropTypes from 'prop-types';
import './InfoPreviewComplete.scss';

function InfoPreviewComplete({ imageUrl, completeMessage, transactionId }) {
  return (
    <div className="infocard-preview-complete">
      <div className="infocard-preview-complete__img">
        <img src={imageUrl} alt="" />
      </div>
      {!!completeMessage && (
        <p className="infocard-preview-complete__msg">
          {completeMessage}
        </p>
      )}
      {!!transactionId && (
        <div className="infocard-preview-complete__tran">
          Transaction ID
          <em>{transactionId}</em>
        </div>
      )}
    </div>
  );
}

InfoPreviewComplete.defaultProps = {
  completeMessage: null,
  transactionId: undefined,
};

InfoPreviewComplete.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  completeMessage: PropTypes.node,
  transactionId: PropTypes.string,
};

export default InfoPreviewComplete;
