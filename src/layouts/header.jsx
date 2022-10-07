import logo from "../assets/aw_logo.png";

function Header() {
  return (
    <div className="fixed z-10 w-full h-14 bg-white shadow-lg">
      <img src={logo} alt="logo" className="h-full p-1" />
    </div>
  );
}

export default Header;
