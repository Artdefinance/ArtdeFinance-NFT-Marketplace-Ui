import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false,
    };
  }

  handleHover = () => {
    this.setState({ showAboutMenu: true });
  };

  handleLeave = () => {
    this.setState({ showAboutMenu: false });
  };

  render() {
    const { showAboutMenu } = this.state;
    return (
      <nav className="navigation">
        <ul className="nav_menu">
          <li className="nav_item">
            <a>Art Dao</a>
          </li>
          <li className="nav_item" onMouseLeave={this.handleLeave}>
            <a onMouseEnter={this.handleHover}>Market Place</a>
            { showAboutMenu && <div /> }
          </li>
          <li className="nav_item">
            <a>Art Loan</a>
          </li>
          <li className="nav_item">
            <a>Community</a>
          </li>
          <li className="nav_item">
            <a>Partners</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
