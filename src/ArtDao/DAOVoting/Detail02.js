import { useId } from 'react';
import Modal from '@material-ui/core/Modal';
import Detail01 from './Detail01';
import {
  InfoCard,
  InfoCurator,
  InfoPrice,
  InfoSlider,
} from '../../Components/InfoCard';
import Button from '../../Components/Button/Button';

function DaoVotingDetail02() {
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
      <Detail01 />
      <Modal
        className="modal-price-status"
        open
        aria-labelledby={labelId}
        aria-describedby={describeId}
        BackdropProps={backdropProps}
      >
        <div className="modal-price-status__content">
          <InfoCard>
            <InfoCurator
              name="Artdefinance Reality sub labs gallery"
              imageUrl={curatorImageUrl}
            />
            <div className="modal-price-status__body">
              <div className="modal-price-status__body-price">
                <InfoPrice
                  title="Curation Price"
                  primaryValue="1,500,000.00"
                  secondaryValue="1,500,000.00"
                />
                <InfoPrice
                  title="Curation Price"
                  primaryValue="1,500,000.00"
                  secondaryValue="1,500,000.00"
                />
                <div className="modal-price-status__expect">
                  Expexted value of this after
                  <em>3</em>
                  years
                </div>
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
            <div className="modal-price-status__footer">
              <Button className="button button--black-line button--default modal-price-status__btn-cancel" content="Cancel" />
              <Button className="button button--black button--default modal-price-status__btn-bid" content="Bid Now" type="type1" />
            </div>
          </InfoCard>
        </div>
      </Modal>
    </>
  );
}

export default DaoVotingDetail02;
