import PropTypes from 'prop-types';
import BaseItemCard from './BaseItemCard';
import './VoteItemCard.scss';

function VoteItemCard({
  imageUrl,
  title,
  description,
  isVoted,
}) {
  return (
    <BaseItemCard
      imageUrl={imageUrl}
      title={title}
      description={description}
    >
      <button type="button" className="itemcard__btn-vote" disabled={isVoted}>
        <span className="a11y">Vote</span>
      </button>
    </BaseItemCard>
  );
}

VoteItemCard.defaultProps = {
  imageUrl: '',
  title: '',
  description: '',
  isVoted: false,
};

VoteItemCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isVoted: PropTypes.bool,
};

export default VoteItemCard;
