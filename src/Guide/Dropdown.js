import React from 'react';
import './Guide.scss';

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
    // const { dropboxWidth, dropboxHeight } = this.props;

    const dropdownStyles = {
      width: '216px',
      height: '100%',
    };

    return (
      <div className="dropdown" style={dropdownStyles}>
        <button type="button" className="dropdown__title" onClick={this.handleClick}>
          <span>Sort by</span>
        </button>
        <div className={isToggleOn ? 'dropdown__list' : 'dropdown__list active'}>
          <button type="button" className="dropdown__item">
            <span>Sort by ending soon</span>
          </button>
          <button type="button" className="dropdown__item">
            <span>Sort by recently active</span>
          </button>
          <button type="button" className="dropdown__item">
            <span>Sort by newest</span>
          </button>
          <button type="button" className="dropdown__item">
            <span>Sort by oldest</span>
          </button>
        </div>
      </div>
    );
  }
}
