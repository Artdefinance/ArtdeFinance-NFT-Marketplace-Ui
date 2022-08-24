import './Header.scss';
import Navbar from './Navbar';

function Header() {
  const logoStyle = {
    backgroundImage: 'url(/assets/images/common/logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="head_wrap">
      <h1 style={logoStyle} className="logo"><a href="/"><span className="a11y">ARTDE FINANCE</span></a></h1>
      <div className="head_search">
        head search
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
