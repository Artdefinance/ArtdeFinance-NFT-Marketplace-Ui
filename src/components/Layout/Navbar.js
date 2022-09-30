import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navigation">
        <ul className="nav_menu">
          <li className="nav_item">
            <a>Art Dao</a>
          </li>
          <li className="nav_item">
            <a>Marketplace</a>
          </li>
          <li className="nav_item">
            <a>Create</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
