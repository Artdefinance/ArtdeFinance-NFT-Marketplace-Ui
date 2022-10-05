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
  CuratorInfoCard,
} from '../../Components/InfoCard';
import InfoCardList from '../../Components/InfoCardList';
import CuratorInfoCardList from '../../Components/InfoCardList/CuratorInfoCardList';
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

function DaoVotingCurationResults() {
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
        <PageTab selected>Curation Results</PageTab>
        <PageTab>DAO Voting Results</PageTab>
      </PageTabs>
      <CuratorInfoCardList>
        <CuratorInfoCard
          name="Artdefinance Reality sub labs gallery"
          imageUrl={curatorImageUrl}
          primaryValue="1,500,000.00"
          secondaryValue="1,500,000.00"
          selected
          selectedText="Winner Curator"
          percentage={78.56}
        />
        {Array.from(Array(14)).map((_, index) => (
          <CuratorInfoCard
            key={`${index.toString()}`}
            name="Artdefinance Reality sub labs gallery"
            imageUrl={curatorImageUrl}
            primaryValue="1,500,000.00"
            secondaryValue="1,500,000.00"
            percentage={78.56}
          />
        ))}
      </CuratorInfoCardList>
    </div>
  );
}

export default DaoVotingCurationResults;
