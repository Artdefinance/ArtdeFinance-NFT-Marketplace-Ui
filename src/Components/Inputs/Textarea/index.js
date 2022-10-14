import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Textarea.scss';

function Textarea({ placeholder, maxLength, defaultValue }) {
  const textareaRef = useRef(null);
  const [byte, setByte] = useState(0);

  const checkByte = () => {
    const message = textareaRef.current.value;
    let currentBytes = 0;
    let totalBytes = 0;

    for (let i = 0; i < message.length; i += 1) {
      currentBytes = message.charCodeAt(i);
      if (currentBytes > 128) totalBytes += 2;
      else totalBytes += 1;
    }

    setByte(totalBytes);
  };

  useEffect(() => {
    checkByte();
  }, []);

  return (
    <div className="textarea_box">
      <textarea
        ref={textareaRef}
        placeholder={placeholder}
        maxLength={maxLength}
        onKeyUp={checkByte}
        defaultValue={defaultValue}
      />
      <div className="byte__check">
        <p>{byte}</p>
        <p>
          /
          {maxLength}
          {' '}
          byte
        </p>
      </div>
    </div>
  );
}

Textarea.defaultProps = {
  placeholder: 'Type your contents here.',
  maxLength: 2000,
  defaultValue: '',
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  defaultValue: PropTypes.string,
};

export default Textarea;
