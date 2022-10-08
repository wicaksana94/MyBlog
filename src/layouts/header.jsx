import logo from "../assets/aw_logo.png";

function Header() {
  return (
    <div className="fixed z-10 w-full h-14 bg-white shadow-lg">
      <img src={logo} alt="logo" className="h-full pb-1 pt-2" />
    </div>
  );
}

export default Header;
