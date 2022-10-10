/* eslint-disable react/prop-types */
import React from 'react';
import './Dropdown.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      getDropTitle: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  componentDidMount() {
    const { content, defaultSelectedId } = this.props;

    if (!content || !defaultSelectedId) return;

    const defaultSelected = content.find(({ id }) => id === defaultSelectedId);

    if (defaultSelected) {
      this.setState((prevState) => ({
        ...prevState,
        getDropTitle: defaultSelected.title,
      }));
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  handleClick2(e) {
    const { content } = this.props;
    const selected = content.find(({ id }) => id === e.currentTarget.dataset.id);

    if (!selected) return;

    this.setState((prevState) => ({
      getDropTitle: selected.title,
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn, getDropTitle } = this.state;
    const {
      dropWidth,
      dropHeight,
      dropFontSize,
      dropFontColor,
      dropTitle,
      dropClass,
      content,
    } = this.props;
    const dropdownStyle = {
      width: dropWidth,
      height: dropHeight,
      fontSize: dropFontSize,
      color: dropFontColor,
    };
    return (
      <div className={`dropdown ${dropClass}`} style={dropdownStyle}>
        <button
          type="button"
          className={isToggleOn ? 'dropdown__title active' : 'dropdown__title '}
          onClick={this.handleClick}
          style={dropdownStyle}
        >
          <span>{getDropTitle === '' ? dropTitle : getDropTitle}</span>
        </button>
        <div
          className={isToggleOn ? 'dropdown__list active' : 'dropdown__list'}
          style={{ width: dropWidth }}
        >
          {content && content.map((items) => (
              <button
                type="button"
                className="dropdown__item"
                key={items.id}
                data-id={items.id}
                onClick={this.handleClick2}
              >
                <span>{items.title}</span>
              </button>
            ))}
        </div>
      </div>
    );
  }
}
