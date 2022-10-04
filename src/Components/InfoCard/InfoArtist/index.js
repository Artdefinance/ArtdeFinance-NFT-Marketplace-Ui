import { Link } from 'react-router-dom';
import InfoSubtitle from '../InfoSubtitle';
import InfoParagraph from '../InfoParagraph';
import Icons from '../../Icons/Icons';
import './InfoArtist.scss';

function InfoArtist() {
  const imageUrl = 'https://source.unsplash.com/random/128x128/?profile';
  return (
    <div className="infocard-artist">
      <div className="infocard-artist__info">
        <div className="infocard-artist__profile">
          <img src={imageUrl} alt="" className="infocard-artist__img" width="68" height="68" />
          <div className="infocard-artist__profile-name">
            <span className="infocard-artist__text">Vincent van Gogh</span>
            <span className="infocard-artist__subtext">1999 - 2012</span>
          </div>
        </div>
        <InfoSubtitle>Country</InfoSubtitle>
        <span className="infocard-artist__text">United States of America</span>
        <Link to="/" className="infocard-artist__download">
          Artist CV Detail View
          <span className="infocard-artist__ico-download">
            <Icons shape="download" />
          </span>
        </Link>
      </div>
      <InfoSubtitle>Biography</InfoSubtitle>
      <InfoParagraph>
        Born in 1979, Jisan Ahn studied plastic art at Korea National University
        of Arts and has a degree with paintings at Frank Mohr International in the Netherlands.
        He debuted in the Netherlands first while he was staying in Rijks akademie residency
        for 2 years from 2013. European Art Scene started paying attention to him after his
        solo exhibition at Galerie Bart/Amsterdam (2014, 2015). He has participated major group
        exhibition such as Arko Art Center/Seoul (2016), Gallery SKAPE/Seoul (2015), Arti ET
        Amicitiae/Amsterdam (2014) and got Buning Brongers Prize in 2014. Born in 1979, Jisan Ahn
        studied plastic art at Korea National University of Arts and has a degree with paintings at
        Frank Mohr International in the
      </InfoParagraph>
    </div>
  );
}

export default InfoArtist;
