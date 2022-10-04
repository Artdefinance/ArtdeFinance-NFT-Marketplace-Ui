import { useId } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './InfoSlider.scss';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  root: {
    height: 7,
    borderRadius: 4,
    color: 'rgba(221, 221, 221, 0.46)',
    '&.Mui-disabled': {
      color: 'rgba(221, 221, 221, 0.46)',
    },
    '& .MuiSlider-rail': {
      height: 7,
      borderRadius: 4,
      marginTop: -2,
    },
    '& .MuiSlider-track': {
      zIndex: 1,
      height: 7,
      borderRadius: 4,
      marginTop: -2,
      backgroundColor: '#5f44ff',
    },
    '& .MuiSlider-mark': {
      width: 5,
      height: 5,
      borderRadius: 3,
      marginTop: -1,
      backgroundColor: '#cecece',
    },
    '& .MuiSlider-thumb': {
      width: 16,
      height: 16,
      marginLeft: -5,
      marginTop: -7,
      background: 'linear-gradient(178.21deg, #5F44FF 50%, #9482FF 113.28%)',
      '&.MuiSlider-active': {
        boxShadow: 'none',
      },
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '& .MuiSlider-thumb.Mui-disabled': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      fontFamily:
        '"Rota", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontWeight: 700,
      fontSize: 14,
      color: '#cecece',
      marginLeft: 2,
      top: 24,
    },
  },
}));

// 마지막 선택된 슬라이드 텍스트만 활성화
const SliderContainer = styled.div`
  ${(props) => props.marks.reduce((result, { value }, index) => `${result}\ninput[value="${value}"] ~ .MuiSlider-markLabelActive[data-index="${index}"]{color:#000}`, '')}
`;

function InfoSlider({
  title,
  description,
  defaultValue,
  step,
  min,
  max,
  disabled,
}) {
  const labelId = useId();
  const marks = Array.from(Array(max - min + step)).map((_, index) => {
    const value = (index + 1) * step;
    return { value, label: value };
  });
  const classes = useStyles();
  return (
    <div className="infocard-slider">
      <strong className="infocard-slider__title">{title}</strong>
      <span className="infocard-slider__desc">{description}</span>
      <SliderContainer marks={marks}>
        <Slider
          className={classes.root}
          defaultValue={defaultValue}
          getAriaValueText={(value) => value}
          aria-labelledby={labelId}
          step={step}
          marks={marks}
          min={min}
          max={max}
          valueLabelDisplay="off"
          disabled={disabled}
        />
      </SliderContainer>
    </div>
  );
}

InfoSlider.defaultProps = {
  defaultValue: 1,
  step: 1,
  min: 1,
  max: 10,
  disabled: false,
};

InfoSlider.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
};

export default InfoSlider;
