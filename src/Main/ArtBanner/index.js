import './ArtBanner.scss';

function ArtBanner() {
  const profileImg = 'https://source.unsplash.com/random/128x128/?profile';
  const imageUrl = 'https://source.unsplash.com/random/468x495/?art';
  return (
    <div className="art-banner">
      <div className="art-banner__figure">
        <img className="art-banner__figure-img" src={imageUrl} alt="" />
      </div>
      <div className="art-banner__info">
        <span className="art-banner__author">
          Vincent van Gogh Tauba Auerbach Ryan Trecartin
        </span>
        <strong className="art-banner__title">
          YVONNE BAR |1 x 55| NFT PRIDE&XCARDS
        </strong>
        <div className="art-banner__footer">
          <div className="art-banner__detail">
            <span className="art-banner__detail--type">Oil on canvas</span>
            <span className="art-banner__detail--size">
              W 203.2 x H 203.2 cm (80 x 80 x 80 in.)
            </span>
          </div>
          <div className="art-banner__profile">
            <div className="art-banner__profile-img">
              <img src={profileImg} alt="user" />
            </div>
            <div className="art-banner__profile-info">
              <span className="art-banner__profile-owner">Owner</span>
              <span className="art-banner__profile-name">
                Art de finance gallery labs
              </span>
            </div>
          </div>
          <div className="art-banner__stat">
            <span className="art-banner__stat-like">14.5k</span>
            <span className="art-banner__stat-view">14.5k</span>
          </div>
          <button type="button" className="art-banner__btn-collect">
            Start Collecting
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtBanner;
