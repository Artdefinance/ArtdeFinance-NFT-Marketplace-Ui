import PropTypes from 'prop-types';
import BaseItemCard from './BaseItemCard';
import './VoteItemCard.scss';

function VoteItemCard({
  imageUrl,
  title,
  description,
  isVoted,
  isExpired,
}) {
  return (
    <BaseItemCard
      imageUrl={imageUrl}
      title={title}
      description={description}
    >
      {isExpired ? (
        <div className="itemcard__vote-expired">
          Voting period expired
        </div>
      ) : (
        <button type="button" className="itemcard__btn-vote" disabled={isVoted}>
          <span className="a11y">Vote</span>
        </button>
      )}
    </BaseItemCard>
  );
}

VoteItemCard.defaultProps = {
  imageUrl: '',
  title: '',
  description: '',
  isVoted: false,
  isExpired: false,
};

VoteItemCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isVoted: PropTypes.bool,
  isExpired: PropTypes.bool,
};

export default VoteItemCard;
