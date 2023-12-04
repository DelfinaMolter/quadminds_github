import logo from '/img/logo.png';

function Header() {

  return (
    <header className="mx-auto py-10">
      <img src={logo}  alt="logo" />
    </header>

  );
}

export default Header;
