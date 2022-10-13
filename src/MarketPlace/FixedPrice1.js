import { Link } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import InfoCardList from '../Components/InfoCardList';
import {
  InfoCard,
  InfoPreview,
  InfoAccordion,
  InfoParagraph,
  InfoTitle,
  InfoSpecList,
  BidInfoCard,
} from '../Components/InfoCard';
import {
  InfoTableContainer,
  InfoTableRow,
  InfoTableCell,
} from '../Components/InfoTable';
import Button from '../Components/Button/Button';
import TagLabel from '../Components/TagLabel';
import IconStyle from '../Components/Icons/Icons';

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
];

function FixedPrice1() {
  const linkIcon = <IconStyle shape="external-link" color="currentColor" width={18} height={18} viewBox="0 0 18 18" />;
  return (
    <div className="marketplace marketplace-auction">
      <div className="marketplace__wrap">
        <BreadCrumbs
          content1="Art Dao"
          content2="Vincent van Gogh"
        />
        <InfoCardList>
          <InfoCardList.Pane>
            <InfoCard transparent>
              <InfoPreview imageUrl="https://source.unsplash.com/random/441x578/?art" />
            </InfoCard>
          </InfoCardList.Pane>
          <InfoCardList.Pane>
            <BidInfoCard type="fixed-price" />
          </InfoCardList.Pane>
        </InfoCardList>
        <h3 className="marketplace-auction__subtitle">Lot Details</h3>
        <InfoCardList>
          <InfoCardList.Pane>
            <InfoCard compact>
              <InfoAccordion title="About Digital Art">
                <InfoParagraph>
                  It is not possible to cancel the auction after participating in the bidding.
                  Please carefully check the artist&apos;s photo and description before
                  participating in the auction. The authenticity certificate and information
                  about the work were provided by the gallery, and Art de finance.
                  No responsibility is assumed, and the responsibility for the work
                  rests with the gallery. It is not possible to cancel
                  the auction after participating in the bidding.Please carefully check the
                  artist&apos;s photo and description before participating in the auction.
                  The authenticity certificate and information about the work were provided
                  by the gallery, and Art de finance. No responsibility is assumed, and
                  the responsibility for the work rests with the gallery esponsibility
                  for the work rests with
                </InfoParagraph>
                <button type="button" className="marketplace__btn-seemore">See more</button>
              </InfoAccordion>
              <InfoAccordion className="marketplace__spec-accordion" title="NFT Certification">
                <InfoSpecList specs={nftSpecs} semiCompact wide />
              </InfoAccordion>
            </InfoCard>
          </InfoCardList.Pane>
          <InfoCardList.Pane>
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
          </InfoCardList.Pane>
        </InfoCardList>
      </div>
    </div>
  );
}

export default FixedPrice1;
