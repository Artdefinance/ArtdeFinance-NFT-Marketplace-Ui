import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import {
  InfoCard,
  InfoAccordion,
  InfoCurator,
  InfoPreview,
  InfoSpecList,
  InfoPrice,
  InfoExpectedValue,
  InfoTitle,
} from '../../Components/InfoCard';
import InfoCardList from '../../Components/InfoCardList';
import Pagenation from '../../Components/Pagenation/Pagenation';
import { PageTabs, PageTab } from '../../Components/PageTabs';
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

function DaoVotingDetail04() {
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
        <InfoCard className="dao-voting-detail__proposal-compact" compact>
          <InfoAccordion className="dao-voting-detail__spec-accordion" title="Artwork Proposal">
            <InfoSpecList specs={proposalSpecs} wide semiCompact />
            <InfoPrice title="Fixed Price" primaryValue="768.0986" secondaryValue="1,500,000.00" />
          </InfoAccordion>
        </InfoCard>
        <InfoCard className="infocard-winner" compact>
          <InfoTitle>Winner Curator</InfoTitle>
          <InfoCurator
            name="Artdefinance Reality sub labs gallery"
            imageUrl={curatorImageUrl}
            percentage={78.56}
            selected
          />
          <div className="infocard-winner__price">
            <InfoPrice compact title="Fixed Price" primaryValue="1,500,000.00" secondaryValue="1,500,000.00" />
            <InfoPrice compact title="Expected Value" primaryValue="1,500,000.00" secondaryValue="1,500,000.00" />
          </div>
          <InfoExpectedValue years="3" />
        </InfoCard>
      </InfoCardList>
      <PageTabs>
        <PageTab>Curation Results</PageTab>
        <PageTab selected>DAO Voting Results</PageTab>
      </PageTabs>
      <div className="dao-results" role="table">
        <div className="dao-results__row dao-results__row--head" role="row">
          <span role="columnheader">Voter</span>
          <span role="columnheader">TxHash</span>
          <span role="columnheader">Answer</span>
          <span role="columnheader">Voting Power</span>
          <span role="columnheader">Amount VADF</span>
          <span role="columnheader">Time</span>
        </div>
        <ul className="dao-results__list" role="rowgroup">
          <li className="dao-results__row dao-results__row--item" role="row">
            <span role="cell">0x5423...432d</span>
            <span role="cell">9a246...09907</span>
            <span role="cell">artdefinance labs gallery...</span>
            <span role="cell">12.45%</span>
            <span role="cell">1,654.763.836.123</span>
            <span role="cell">9m ago</span>
          </li>
          <li className="dao-results__row dao-results__row--item" role="row">
            <span role="cell">0x5423...432d</span>
            <span role="cell">9a246...09907</span>
            <span role="cell">artdefinance labs gallery...</span>
            <span role="cell">12.45%</span>
            <span role="cell">1,654.763.836.123</span>
            <span role="cell">12m ago</span>
          </li>
          <li className="dao-results__row dao-results__row--item" role="row">
            <span role="cell">0x5423...432d</span>
            <span role="cell">9a246...09907</span>
            <span role="cell">artdefinance labs gallery...</span>
            <span role="cell">12.45%</span>
            <span role="cell">1,654.763.836.123</span>
            <span role="cell">1 month ago</span>
          </li>
          {Array.from(Array(8)).map((_, index) => (
            <li key={`${index.toString()}`} className="dao-results__row dao-results__row--item" role="row">
              <span role="cell">0x5423...432d</span>
              <span role="cell">9a246...09907</span>
              <span role="cell">artdefinance labs gallery...</span>
              <span role="cell">12.45%</span>
              <span role="cell">1,654.763.836.123</span>
              <span role="cell">9m ago</span>
            </li>
          ))}
        </ul>
      </div>
      <Pagenation />
    </div>
  );
}

export default DaoVotingDetail04;
