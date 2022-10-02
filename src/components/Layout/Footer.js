import { useId } from 'react';
import { Link } from 'react-router-dom';
import CommuityLogoIcons from '../Icons/CommunityLogoIcons';
import './Footer.scss';

function Footer() {
  const emailId = useId();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-subscribe">
          <strong className="footer-subtitle">Stay in the loop</strong>
          <p className="footer-message">
            Get the latest updates of Art de Finance from the team and trends that
            shape the global art market with our newsletter.
          </p>
          <form onSubmit={(event) => event.preventDefault()} className="footer-subscribe__form">
            <label htmlFor={emailId} className="footer-subscribe__label">
              <span className="a11y">email</span>
              <input type="email" className="footer-subscribe__input" id={emailId} placeholder="Your email address" required />
            </label>
            <button type="submit" className="footer-subscribe__submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-channel">
          <strong className="footer-subtitle">Join the community</strong>
          <a href="/" className="footer-channel__link">
            <span className="a11y">instagram</span>
            <CommuityLogoIcons type="instagram" />
          </a>
          <a href="/" className="footer-channel__link">
            <span className="a11y">discord</span>
            <CommuityLogoIcons type="discord" />
          </a>
          <a href="/" className="footer-channel__link">
            <span className="a11y">twitter</span>
            <CommuityLogoIcons type="twitter" />
          </a>
          <a href="/" className="footer-channel__link">
            <span className="a11y">medium</span>
            <CommuityLogoIcons type="medium" />
          </a>
          <a href="/" className="footer-channel__link">
            <span className="a11y">reddit</span>
            <CommuityLogoIcons type="reddit" />
          </a>
        </div>
        <div className="footer-info">
          <div className="footer-company">
            <Link href="/" className="footer-company__logo">
              <span className="a11y">ARTDE FINANCE</span>
            </Link>
            <p className="footer-message">
              The world’s first and largest digital marketplace for
              crypto collectibles and non-fungible tokens(NFRs).
              Buy, sell, and discover exclusive digital items.
            </p>
          </div>
          <div className="footer-sitemap">
            <div className="footer-sitemap__group">
              <Link href="/" className="footer-sitemap__link-head">Marketplace</Link>
              <Link href="/" className="footer-sitemap__link">All NFTs</Link>
              <Link href="/" className="footer-sitemap__link">Solana NFTs</Link>
              <Link href="/" className="footer-sitemap__link">Art</Link>
              <Link href="/" className="footer-sitemap__link">collectibies</Link>
              <Link href="/" className="footer-sitemap__link">Domain Names</Link>
              <Link href="/" className="footer-sitemap__link">Music</Link>
              <Link href="/" className="footer-sitemap__link">Photography</Link>
              <Link href="/" className="footer-sitemap__link">Sports</Link>
              <Link href="/" className="footer-sitemap__link">Trading Cards</Link>
              <Link href="/" className="footer-sitemap__link">Utility</Link>
              <Link href="/" className="footer-sitemap__link">Virtual Worlds</Link>
            </div>
            <div className="footer-sitemap__group">
              <Link href="/" className="footer-sitemap__link-head">My Account</Link>
              <Link href="/" className="footer-sitemap__link">Profile</Link>
              <Link href="/" className="footer-sitemap__link">Favorites</Link>
              <Link href="/" className="footer-sitemap__link">Watchlist</Link>
              <Link href="/" className="footer-sitemap__link">My Collections</Link>
              <Link href="/" className="footer-sitemap__link">Settings</Link>
              <Link href="/" className="footer-sitemap__link-head">Stats</Link>
              <Link href="/" className="footer-sitemap__link">Rankings</Link>
              <Link href="/" className="footer-sitemap__link">Activity</Link>
            </div>
            <div className="footer-sitemap__group">
              <Link href="/" className="footer-sitemap__link-head">Resources</Link>
              <Link href="/" className="footer-sitemap__link">Help Center</Link>
              <Link href="/" className="footer-sitemap__link">Platform Status</Link>
              <Link href="/" className="footer-sitemap__link">Partners</Link>
              <Link href="/" className="footer-sitemap__link">Gas-Free Marketplace</Link>
              <Link href="/" className="footer-sitemap__link">Taxes</Link>
              <Link href="/" className="footer-sitemap__link">Blog</Link>
              <Link href="/" className="footer-sitemap__link">Docs</Link>
              <Link href="/" className="footer-sitemap__link">Newsletter</Link>
            </div>
            <div className="footer-sitemap__group">
              <Link href="/" className="footer-sitemap__link-head">Company</Link>
              <Link href="/" className="footer-sitemap__link">About</Link>
              <Link href="/" className="footer-sitemap__link">Careers</Link>
              <Link href="/" className="footer-sitemap__link">Ventures</Link>
              <Link href="/" className="footer-sitemap__link">Grants</Link>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="footer-copy">2022 ArtdeFinance Labs, Inc</div>
          <div className="footer-policy">
            <Link href="/" className="footer-policy__link">Privacy Policy</Link>
            <Link href="/" className="footer-policy__link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
