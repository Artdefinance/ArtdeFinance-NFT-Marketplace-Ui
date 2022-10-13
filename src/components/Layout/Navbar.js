import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Icons from '../Icons/Icons';
import './Navbar.scss';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <ul className="nav_menu">
        <li className={clsx('nav_item', pathname.startsWith('/art-dao') && 'active')}>
          <Link to="/art-dao/token-swap">Art Dao</Link>
        </li>
        <li className={clsx('nav_item', pathname.startsWith('/marketplace') && 'active')}>
          <Link to="/marketplace/digital-art-1">Marketplace</Link>
        </li>
        <li className={clsx('nav_item', pathname.startsWith('/create') && 'active')}>
          <Link to="/create/create-item-1">Create</Link>

          <div className="subnav_menu">
            <ul className="subnav_items">
              <li>
                <Link
                  className={clsx('subnav_item', pathname.startsWith('/create/create-item') && 'active')}
                  to="/create/create-item-1"
                >
                  Create item
                  <Icons shape="arrow-show" />
                </Link>
              </li>
              <li>
                <Link
                  className={clsx('subnav_item', pathname.startsWith('/create/create-collection') && 'active')}
                  to="/create/create-collection-1"
                >
                  Create collection
                  <Icons shape="arrow-show" />
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
