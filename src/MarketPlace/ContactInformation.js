import { useState, useId } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';
import InputTitle from '../Components/Inputs/InputTitle';
import Input from '../Components/Inputs/Input';
import RadioBox from '../Components/Inputs/RadioBox';
import Dropdown from '../Components/Dropdown/Dropdown';
import Alert from '../Components/Alert';
import ConfirmCheckbox from '../Components/Inputs/ConfirmCheckbox';
import VerificationCode from '../Components/Inputs/VerificationCode';

function ContactInformation({ hideModal }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verification, setVerification] = useState(false);
  const [order, setOrder] = useState('');

  return (
    <div className="marketplace-artworks-modal__sub-content">
      <h3 className="marketplace-artworks-modal__title">Contact Information</h3>

      <div className="marketplace-artworks-modal__input-container">
        <InputTitle>Email Address</InputTitle>
        <Input name="email" placeholder="Email Address" />
        <span className="marketplace-artworks-modal__input-msg">Please enter a valid email address</span>
      </div>

      <div className="marketplace-artworks-modal__split">
        <div className="marketplace-artworks-modal__split-item">
          <InputTitle required={!firstName}>First Name</InputTitle>
          <Input name="firstname" placeholder="First Name" onChangeValue={setFirstName} />
        </div>
        <div className="marketplace-artworks-modal__split-item">
          <InputTitle required={!lastName}>Last Name</InputTitle>
          <Input name="lastname" placeholder="Last Name" onChangeValue={setLastName} />
        </div>
      </div>
      <div className="marketplace-artworks-modal__split">
        <div className="marketplace-artworks-modal__split-item">
          <InputTitle required={!country}>Country</InputTitle>
          <Dropdown dropClass="rota-24" dropWidth="368px" dropHeight="40px" dropTitle="Select a your Country" content={[{ id: '1', title: 'South Korea' }]} dropFontSize="24px" dropFontColor="#bbb" onSelected={setCountry} />
        </div>
        <div className="marketplace-artworks-modal__split-item">
          <InputTitle required={!postalCode}>Postal Code</InputTitle>
          <Input name="zipcode" placeholder="00000" onChangeValue={setPostalCode} />
        </div>
      </div>
      <div className="marketplace-artworks-modal__split">
        <div className="marketplace-artworks-modal__split-item">
          <InputTitle required={!province}>State, Province, or Region</InputTitle>
          <Dropdown dropClass="rota-24" dropWidth="368px" dropHeight="40px" dropTitle="Select a State, Province, or Region" content={[{ id: '1', title: 'Seoul' }]} dropFontSize="24px" dropFontColor="#bbb" onSelected={setProvince} />
        </div>
        <div className="marketplace-artworks-modal__split-item">
          <InputTitle required={!city}>City</InputTitle>
          <Input name="city" placeholder="Please enter a city" onChangeValue={setCity} />
        </div>
      </div>

      <div className="marketplace-artworks-modal__input-container">
        <InputTitle required={!street}>Street Address</InputTitle>
        <Input name="street" placeholder="Please enter a street address" onChangeValue={setStreet} />
      </div>

      <div className="marketplace-artworks-modal__input-container">
        <InputTitle>Detail Address</InputTitle>
        <Input name="detail" placeholder="Apartment, Suite, Etc. (Optional)" />
      </div>

      <InputTitle required={!phoneNumber}>Phone Number</InputTitle>
      <div className="marketplace-artworks-modal__phone">
        <Dropdown dropClass="rota-24" dropWidth="111px" dropHeight="40px" dropTitle="" defaultSelectedId="1" content={[{ id: '1', title: '🇰🇷 +82' }]} dropFontSize="20px" dropFontColor="#555" />
        <Input name="phone" placeholder="Please enter without hyphens." onChangeValue={setPhoneNumber} />
        <Button pressFucn={() => hideModal(true)} className="button button--black button--default button--type1" disabled={!phoneNumber && 'true'} content="Send Code" />
      </div>

      <div className="marketplace-artworks-modal__input-container">
        <Alert type="primary">
          The phone number you enter can’t be changed after you place your order,
          so please make sure it’s correct. Message and data rates may apply.
        </Alert>
      </div>

      <div className="marketplace-artworks-modal__input-container">
        <InputTitle required={!verification}>SMS Verification Code</InputTitle>
        <VerificationCode onNumberInserted={setVerification} />
        <VerificationCode error onNumberInserted={setVerification} />
      </div>

      <div className="marketplace-artworks-modal__input-container">
        <InputTitle required={!order}>How would you like to get your order?</InputTitle>
        <RadioBox options={['I’ll keep the artwork in the gallery.', 'I’d lke it delivered.']} onChangeValue={setOrder} />
        <Alert type="primary">
          Compensation for loss or damage to the artwork during storage is in accordance
          with the insurance purchased by the gallery.
        </Alert>
      </div>

      <div className="marketplace-artworks-modal__confirm">
        <ConfirmCheckbox
          defaultChecked={false}
          name={(
            <>
            I have read and agree to artdefinance’s
            {' '}
            <Link to="/">Terms of Use</Link>
            {' '}
            and
            {' '}
            <Link to="/">Privacy Policy.</Link>
            </>
          )}
        />
      </div>

      <div className="marketplace-artworks-modal__buttons">
        <Button pressFucn={() => hideModal(true)} className="button button--black-line button--mid button--type1" content="Cancel" />
        <Button pressFucn={() => hideModal(true)} className="button button--black button--mid button--type1" content="Bid Now" />
      </div>
    </div>
  );
}

ContactInformation.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default ContactInformation;
