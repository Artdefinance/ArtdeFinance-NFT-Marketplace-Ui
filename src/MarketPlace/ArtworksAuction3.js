import { Link } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import {
  InfoCard,
  InfoAccordion,
  InfoParagraph,
  InfoArtist,
  InfoHistory,
  InfoPreview,
  InfoSpecList,
  InfoTitle,
  BidInfoCard,
} from '../Components/InfoCard';
import {
  InfoTableContainer,
  InfoTableRow,
  InfoTableCell,
} from '../Components/InfoTable';
import InfoCardList from '../Components/InfoCardList';
import Button from '../Components/Button/Button';
import TagLabel from '../Components/TagLabel';
import IconStyle from '../Components/Icons/Icons';
import './MarketPlace.scss';

const artSpecs = [
  [
    'Artist',
    'Vincent van Gogh Tauba Auerbach Ryan Trecartin',
  ],
  [
    'Title',
    'Two Paintings (from the Paintings series) Spring Flowers',
  ],
  [
    'Creation Year',
    '2001',
  ],
  [
    'Edition',
    '#3547A',
  ],
  [
    'Medium',
    'Screenprint in colors on Saunders Waterford 425gsm pape',
  ],
  [
    'Artist Sign',
    'Include Signed',
  ],
  [
    'Dimensions',
    'W 203.2 x D 203.2 cm x H 203.2 cm (80 x 80 x 80 in.)',
  ],
  [
    'Condition',
    'Excellent',
  ],
];

const nftSpecs = [
  [
    'Contract Address',
    '0x495f...7b5e',
  ],
  [
    'Token ID',
    '2629546618532116...',
  ],
  [
    'Token Standard',
    'ERC-1155',
  ],
  [
    'Blockchain',
    'Ethereum',
  ],
  [
    'Metadata',
    'Centralized',
  ],
  [
    'Metadata',
    '5%',
  ],
  [
    'Metadata',
    '1%',
  ],
];

const gallerySpecs = [
  [
    'Gallery',
    '0x495f...7b5e',
  ],
  [
    'Contract Address',
    '2629546618532116...',
  ],
  [
    'Location',
    'ERC-1155',
  ],
  [
    'Contact',
    'Ethereum',
  ],
  [
    'e-Mail Address',
    'artwork@artdefinance.io',
  ],
];

const statusDetailArchiveSpecs = [
  [
    'Delivery Method',
    <em className="delivery-tag">
      <IconStyle shape="gallery-archive" width={20} height={20} viewBox="0 0 20 20" />
      Gallery Archive
    </em>,
  ],
  ['Gallery', 'Artdefinance gallery'],
  ['Location', '851 Boylstion Street Boston, MA 02116'],
  ['Contact', '82-2-3456-7890'],
  [
    'Purchase Price',
    <>
      7868.2394
      <span className="infocard-price__type">MATIC</span>
    </>,
  ],
  ['Purchase Date', '2022/04/04 03:23:51'],
];

const statusDetailDeliverySpecs = [
  [
    'Delivery Method',
    <em className="delivery-tag">
      <IconStyle shape="shipping" width={20} height={20} viewBox="0 0 20 20" />
      Delivery
    </em>,
  ],
  ['Gallery', 'Artdefinance gallery'],
  ['Location', '851 Boylstion Street Boston, MA 02116'],
  ['Contact', '82-2-3456-7890'],
  [
    'Purchase Price',
    <>
      7868.2394
      <span className="infocard-price__type">MATIC</span>
    </>,
  ],
  ['Purchase Date', '2022/04/04 03:23:51'],
];

const historyList = [
  ['2012', 'Park Avenue Armory, New York Cityaaqwe qrwsfdsffdasd', 'Los Angeles, California'],
  ['2012', 'Park Avenue Armory, New York City', 'Los Angeles'],
  ['2012', 'Park Avenue Armory, New York Cityasasdasddasdsdada', 'Los Angeles'],
  ['2012', 'Park Avenue Armory, New York Cityaa sdasdadqw wfsf sfqqweqweqwesaa sdasdadqw wfsf sfqqweqweqwes', 'Los Angeles, California'],
];

function ArtworksAuction3() {
  const linkIcon = <IconStyle shape="external-link" color="currentColor" width={18} height={18} viewBox="0 0 18 18" />;

  return (
    <div className="marketplace marketplace-artworks">
      <BreadCrumbs
        content1="Artworks"
        content2="Vincent van Gogh"
      />
      <InfoCardList>
        <InfoCard>
          <InfoPreview imageUrl="https://source.unsplash.com/random/479x270/?art" />
          <InfoSpecList specs={artSpecs} />
        </InfoCard>
        <InfoCard>
          <InfoAccordion title="About Artworks">
            <InfoParagraph>
              Born in 1979, Jisan Ahn studied plastic art at Korea National University
              of Arts and has a degree with paintings at Frank Mohr International in the
              Netherlands.
              He debuted in the Netherlands first while he was staying in Rijks akademie residency
              for 2 years from 2013. European Art Scene started paying attention to him after his
              solo exhibition at Galerie Bart/Amsterdam (2014, 2015). He has participated
              major group exhibition such as Arko Art Center/Seoul (2016), Gallery SKAPE/Seoul
              (2015), Arti ET Amicitiae/Amsterdam (2014) and got Buning Brongers Prize in 2014.
              Born in 1979, Jisan Ahn studied plastic art at Korea National University of Arts
              and has a degree with paintings at Frank Mohr International in the
            </InfoParagraph>
          </InfoAccordion>
          <InfoAccordion title="Exhibition History">
            <InfoHistory historyList={historyList} />
          </InfoAccordion>
          <InfoAccordion title="About Artist">
            <InfoArtist />
          </InfoAccordion>
          <InfoAccordion className="marketplace__spec-accordion" title="NFT Certification">
            <InfoSpecList specs={nftSpecs} compact wide />
          </InfoAccordion>
          <InfoAccordion className="marketplace__spec-accordion" title="Owner Gallery">
            <InfoSpecList specs={gallerySpecs} compact wide />
          </InfoAccordion>
        </InfoCard>
        <BidInfoCard type="artworks-3" />
        <InfoCard className="infocard__artwork-status" compact>
          <InfoAccordion className="marketplace__spec-accordion" title="Artwork Status Detail">
            <InfoSpecList specs={statusDetailArchiveSpecs} wide />
          </InfoAccordion>
        </InfoCard>
        <InfoCard className="infocard__artwork-status" compact>
          <InfoAccordion className="marketplace__spec-accordion" title="Artwork Status Detail">
            <InfoSpecList specs={statusDetailDeliverySpecs} wide />
          </InfoAccordion>
        </InfoCard>
        <InfoCard compact>
          <InfoTitle>Activity</InfoTitle>
          <InfoTableContainer height={350} cols={['166', '185', '152', '117']}>
            <InfoTableRow type="head">
              <InfoTableCell type="head">Form</InfoTableCell>
              <InfoTableCell type="head">To</InfoTableCell>
              <InfoTableCell type="head">Price</InfoTableCell>
              <InfoTableCell type="head">Date</InfoTableCell>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTableCell>
                <TagLabel type="compact">Canceled Offers</TagLabel>
                <br />
                <span className="text1">dC3BaB</span>
              </InfoTableCell>
              <InfoTableCell>
                <div className="text1 padded">
                  You
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded2">
                  <span className="text2">678.9879 ETH</span>
                  <br />
                  <span className="text3">($104.49)</span>
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded3">
                  <Link to="/" className="text5">
                    20 days ago
                    {linkIcon}
                  </Link>
                </div>
              </InfoTableCell>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTableCell>
                <TagLabel type="compact">Canceled Listing</TagLabel>
                <br />
                <span className="text1">dC3BaB114d23...</span>
              </InfoTableCell>
              <InfoTableCell>
                <div className="text1 padded">
                  You
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded2">
                  <span className="text2">678.9879 ETH</span>
                  <br />
                  <span className="text3">($104.49)</span>
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded">
                  <Link to="/" className="text5">
                    In 1 day
                    {linkIcon}
                  </Link>
                </div>
              </InfoTableCell>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTableCell>
                <TagLabel type="compact">Listings</TagLabel>
                <br />
                <span className="text1">You</span>
              </InfoTableCell>
              <InfoTableCell>
                <div className="text1 padded">
                  dc3BaB1edse134a...
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded2">
                  <span className="text2">678.9879 ETH</span>
                  <br />
                  <span className="text3">($104.49)</span>
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded3">
                  <Link to="/" className="text5">
                    13 day ago
                    {linkIcon}
                  </Link>
                </div>
              </InfoTableCell>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTableCell>
                <TagLabel type="compact">Sales</TagLabel>
                <br />
                <span className="text1">dC3BaB</span>
              </InfoTableCell>
              <InfoTableCell>
                <div className="text1 padded">
                  -
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded2">
                  <span className="text2">678.9879 ETH</span>
                  <br />
                  <span className="text3">($104.49)</span>
                </div>
              </InfoTableCell>
              <InfoTableCell>
                <div className="padded3">
                  <Link to="/" className="text5">
                    13 day ago
                    {linkIcon}
                  </Link>
                </div>
              </InfoTableCell>
            </InfoTableRow>
          </InfoTableContainer>
          <Button className="button button--black-line button--default marketplace__btn-readmore" content="Read more" />
        </InfoCard>
      </InfoCardList>
    </div>
  );
}

export default ArtworksAuction3;
