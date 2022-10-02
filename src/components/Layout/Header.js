import './Header.scss';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';

function Header() {
  const location = useLocation();
  const profileImg = 'https://source.unsplash.com/random/128x128/?profile';
  const [auth, setAuth] = useState(true);
  let headType = '';
  if (location.pathname === '/gallery/confirm') {
    headType = 'head_white';
  }
  return (
    <div className={`head_wrap ${headType}`}>
      <div className="inner">
        <h1 className="logo">
          <a href="/path">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/common/logo.png`}
              alt="ARTDE FINANCE"
            />
            <span className="a11y">ARTDE FINANCE</span>
          </a>
        </h1>
        <div className="head_util">
          <Navbar />
          <Link to="#" className="link_notice">
            <span className="cnt">32</span>
            <Icons shape="notice" />
          </Link>
          {auth ? (
            <>
              <button type="button" className="user">
                <p className="profile">
                  <img src={profileImg} alt="사용자프로필" />
                </p>
                <span>0x5423...432d......</span>
              </button>
              <button
                type="button"
                className="btn_logout"
                onClick={() => setAuth(false)}
              >
                <Icons shape="logout" />
              </button>
            </>
          ) : (
            <Button
              className="button button--black button--default"
              content="Connet to Wallet"
              type="type1"
              pressFucn={() => setAuth(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
