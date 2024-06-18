import "./index.scss";

import Menu from "./components/Menu";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <Menu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
