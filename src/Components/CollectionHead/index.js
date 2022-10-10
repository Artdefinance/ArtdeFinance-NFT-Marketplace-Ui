import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
import IconStyle from '../Icons/Icons';
import './CollectionHead.scss';

function CollectionHead({
  backgroundImageUrl,
  profileImageUrl,
  name,
  walletAddress,
  description,
  stats,
}) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="collection-head">
      <div className="collection-head__bg" style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : {}} />
      <div className="collection-head__inner">
        <div className="collection-head__profile-img">
          <img src={profileImageUrl} alt="" />
          <button type="button" className="collection-head__btn-config">
            <span className="a11y">config</span>
            <IconStyle shape="setting" />
          </button>
        </div>
        <h3 className="collection-head__profile-name">
          {name}
        </h3>
        <button type="button" className="collection-head__btn-wallet">
          {walletAddress}
          <IconStyle shape="copy-all" width={18} height={18} viewBox="0 0 18 18" />
        </button>
        <p className={clsx('collection-head__desc', toggle && 'collection-head__desc--folded')}>
          {description}
        </p>
        <button type="button" className="collection-head__btn-desc-more" onClick={() => setToggle(!toggle)}>See more</button>
        <ul className="collection-head__stats">
          {stats.map(({ id, name: statName, value }) => (
            <li key={id} className="collection-head__stat">
              <span className="collection-head__stat-value">{value}</span>
              <span className="collection-head__stat-name">{statName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CollectionHead.defaultProps = {
  backgroundImageUrl: undefined,
  stats: [],
};

CollectionHead.propTypes = {
  backgroundImageUrl: PropTypes.string,
  profileImageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  walletAddress: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.node,
    value: PropTypes.node,
  })),
};

export default CollectionHead;
