/* eslint-disable react/prop-types */
import React from 'react';
import '../Guide.scss';
import './Dropdown.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    const { dropWidth, dropHeight, dropTitle, dropClass } = this.props;
    const dropdownStyle = {
      width: dropWidth,
      height: dropHeight,
    };
    const { content } = this.props;
    return (
      <div className={`dropdown ${dropClass}`} style={dropdownStyle}>
        <button type="button" className={isToggleOn ? 'dropdown__title' : 'dropdown__title active'} onClick={this.handleClick}>
          <span>{dropTitle}</span>
        </button>
        <div className={isToggleOn ? 'dropdown__list' : 'dropdown__list active'} style={{ width: dropWidth }}>
          {
            content && content.map((items) => (
              <button type="button" className="dropdown__item" key={items.index}>
                <span>{items.title}</span>
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}
