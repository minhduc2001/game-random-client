import "./index.scss";

import Menu from "./components/Menu";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Menu />
      </div>
    </nav>
  );
}

export default Navbar;
