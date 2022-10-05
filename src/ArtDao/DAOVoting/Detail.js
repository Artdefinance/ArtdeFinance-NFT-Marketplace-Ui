import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import {
  InfoCard,
  InfoAccordion,
  InfoParagraph,
  InfoArtist,
  InfoHistory,
  InfoPreview,
  InfoSpecList,
  InfoPrice,
  CuratorInfoCard,
} from '../../Components/InfoCard';
import InfoCardList from '../../Components/InfoCardList';
import CuratorInfoCardList from '../../Components/InfoCardList/CuratorInfoCardList';
import Button from '../../Components/Button/Button';
import './Detail.scss';

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

const proposalSpecs = [
  [
    'Proposer',
    'Artdefinance Gallery',
  ],
  [
    'Contract Address',
    '0x495f...7b5e',
  ],
  [
    'Voting Start',
    '2022/06/08  13:20:39',
  ],
  [
    'Voting End',
    '2022/06/08  13:20:39',
  ],
];

const historyList = [
  ['2012', 'Park Avenue Armory, New York Cityaaqwe qrwsfdsffdasd', 'Los Angeles, California'],
  ['2012', 'Park Avenue Armory, New York City', 'Los Angeles'],
  ['2012', 'Park Avenue Armory, New York Cityasasdasddasdsdada', 'Los Angeles'],
  ['2012', 'Park Avenue Armory, New York Cityaa sdasdadqw wfsf sfqqweqweqwesaa sdasdadqw wfsf sfqqweqweqwes', 'Los Angeles, California'],
];

function DaoVotingDetail() {
  const curatorImageUrl = 'https://source.unsplash.com/random/128x128/?profile';

  return (
    <div className="page-content dao-voting-detail">
      <BreadCrumbs
        content1="Art Dao"
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
          <InfoAccordion className="dao-voting-detail__spec-accordion" title="NFT Certification">
            <InfoSpecList specs={nftSpecs} compact wide />
          </InfoAccordion>
          <InfoAccordion className="dao-voting-detail__spec-accordion" title="Owner Gallery">
            <InfoSpecList specs={gallerySpecs} compact wide />
          </InfoAccordion>
        </InfoCard>
        <InfoCard>
          <InfoAccordion className="dao-voting-detail__spec-accordion" title="Artwork Proposal">
            <InfoSpecList specs={proposalSpecs} wide />
            <InfoPrice title="Fixed Price" primaryValue="768.0986" secondaryValue="1,500,000.00" />
          </InfoAccordion>
        </InfoCard>
        <InfoCard>
          <InfoAccordion title="Art Dao">
            <InfoParagraph>
              For curated works, DAO voting determines the value of the artwork fairly.
              To participate in voting, you can participate with vADF Token,
              a governance token, and vADF Token
              <br />
              It can be obtained by swapping ADF Tokens at a ratio of 1:100.
              <br />
              <br />
              <strong>Don&apos;t have a vADF Token? Swap right now.</strong>
              <br />
              <br />
              Join Now!
              <br />
              If the participating curation price gets the highest voter turnout,
              a portion of the sale proceeds you can get it as revenue.
              <br />
              Voting is allowed only once per artwork, and voting power increases
              according to the number of vADF Tokens.
            </InfoParagraph>
            <div className="dao-voting-detail__button-container">
              <Button className="button button--black-line button--default" content="How to use" />
              <Button className="button button--black button--default" content="Go to vADF Swap" type="type1" />
            </div>
          </InfoAccordion>
        </InfoCard>
        <CuratorInfoCardList>
          <CuratorInfoCard
            name="Artdefinance Reality sub labs gallery"
            imageUrl={curatorImageUrl}
            primaryValue="1,500,000.00"
            secondaryValue="1,500,000.00"
            selected
          />
          {Array.from(Array(9)).map((_, index) => (
            <CuratorInfoCard
              key={`${index.toString()}`}
              name="Artdefinance Reality sub labs gallery"
              imageUrl={curatorImageUrl}
              primaryValue="1,500,000.00"
              secondaryValue="1,500,000.00"
            />
          ))}
        </CuratorInfoCardList>
      </InfoCardList>
    </div>
  );
}

export default DaoVotingDetail;
