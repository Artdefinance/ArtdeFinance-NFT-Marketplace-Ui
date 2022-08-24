/* eslint-disable react/prop-types */
import React from 'react';
import Calendar from 'react-calendar';
import './DateDropdown.scss';

export default class DateDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      isToggleOn: false,
      selectedDate: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  onChange = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  render() {
    const { value, isToggleOn, selectedDate } = this.state;
    const { dropWidth } = this.props;
    const iconStyle = {
      backgroundImage: 'url(/assets/images/component/calendar.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    const arrowStyle = {
      backgroundImage: 'url(/assets/images/component/arrow_down.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div className="date-dropdown">
        <button type="button" className={isToggleOn ? 'date-dropdown__button active' : 'date-dropdown__button'} style={{ width: dropWidth }} onClick={this.handleClick}>
          <div style={iconStyle} className="date-dropdown__icon"><span className="a11y">달력 아이콘</span></div>
          <span className="date-dropdown__data">test</span>
          <div style={arrowStyle} className="date-dropdown__arrow"><span className="a11y">아래 화살표 아이콘</span></div>
        </button>
        {
          isToggleOn ? <Calendar onClickDay={this.onChange} value={value} locale="en-HU" showNeighboringMonth={false} /> : null
        }
      </div>
    );
  }
}
