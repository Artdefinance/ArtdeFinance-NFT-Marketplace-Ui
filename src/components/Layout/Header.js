import './Header.css';

function Header() {
  const logoStyle = {
    backgroundImage: 'url(/assets/images/common/logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div>
      <h1 style={logoStyle} className="logo"><span className="a11y">ARTDE FINANCE</span></h1>
    </div>
  );
}

export default Header;
