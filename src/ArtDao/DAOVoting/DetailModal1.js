import { useId } from 'react';
import Modal from '@material-ui/core/Modal';
import Detail from './Detail';
import {
  InfoCard,
  InfoCurator,
  InfoExpectedValue,
  InfoPrice,
  InfoSlider,
} from '../../Components/InfoCard';
import Button from '../../Components/Button/Button';

function DaoVotingDetailModal1() {
  const curatorImageUrl = 'https://source.unsplash.com/random/128x128/?profile';
  const labelId = useId();
  const describeId = useId();
  const backdropProps = {
    style: {
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
    },
  };

  return (
    <>
      <Detail />
      <Modal
        className="modal-dao-voting modal-price-status"
        open
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
      >
        <div className="modal-dao-voting__content">
          <InfoCard>
            <InfoCurator
              name="Artdefinance Reality sub labs gallery"
              imageUrl={curatorImageUrl}
              wide
            />
            <div className="modal-price-status__body">
              <div className="modal-price-status__body-price">
                <InfoPrice
                  compact
                  title="Curation Price"
                  primaryValue="1,500,000.00"
                  secondaryValue="1,500,000.00"
                />
                <InfoPrice
                  compact
                  title="Curation Price"
                  primaryValue="1,500,000.00"
                  secondaryValue="1,500,000.00"
                />
                <InfoExpectedValue years="3" />
              </div>
              <div className="modal-price-status__body-slider">
                <InfoSlider
                  title="Artist Status"
                  description="Overall analysis of artist from artist’s current position on market to future value."
                  defaultValue={3}
                />
                <InfoSlider
                  title="Orginality"
                  description="Distinguished feature of artwork which can be material, process or content"
                  defaultValue={4}
                />
                <InfoSlider
                  title="Artist Status"
                  description="Overall analysis of artist from artist’s current position on market to future value."
                  defaultValue={3}
                />
                <InfoSlider
                  title="Orginality"
                  description="Distinguished feature of artwork which can be material, process or content"
                  defaultValue={4}
                />
              </div>
            </div>
            <span className="modal-price-status__scrollbox-title">Artwork Curating</span>
            <p className="modal-price-status__scrollbox">
              Born in 1979, Jisan Ahn studied plastic art at Korea National University of Arts
              and has a degree with paintings at Frank Mohr International in the Netherlands.
              He debuted in the Netherlands first while he was staying in Rijks akademie residency
              for 2 years from 2013. European Art Scene started paying attention to him after
              his solo exhibition at Galerie Bart/Born in 1979, Jisan Ahn studied plastic art at
              Korea National University of Arts and has a degree with paintings at Frank Mohr
              International in the Netherlands. . He debuted in the Netherlands first while he was
              staying in Rijks akademie residency for 2 years from 2013. European Art Scene started
              paying attention to him after his solo exhibition at Galerie Bart.
              Born in 1979, Jisan Ahn studied plastic art at Korea National University of Arts
              and has a degree with paintings at Frank Mohr International in the Netherlands.
              He debuted in the Netherlands first while he was staying in Rijks akademie residency
              for 2 years from 2013. European Art Scene started paying attention to him after
              his solo exhibition at Galerie Bart/Born in 1979, Jisan Ahn studied plastic art at
              Korea National University of Arts and has a degree with paintings at Frank Mohr
              International in the Netherlands. . He debuted in the Netherlands first while he was
              staying in Rijks akademie residency for 2 years from 2013. European Art Scene started
              paying attention to him after his solo exhibition at Galerie Bart.
            </p>
            <div className="modal-dao-voting__footer">
              <Button className="button button--black-line button--mid modal-dao-voting__btn-cancel" content="Cancel" />
              <Button className="button button--black button--mid modal-dao-voting__btn-confirm" content="Bid Now" type="type1" />
            </div>
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default DaoVotingDetailModal1;
