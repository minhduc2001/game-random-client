import "./index.scss";
import { Badge } from "antd";
import { FaBell } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar-header">
          <a className="#" href="/">
            <div className="div-image">
              <img
                src="https://nsocltx.com/assets/images/logo-nsocltx.com.png"
                alt="NSOCLTX.COM Logo"
              />
            </div>
          </a>
          <Badge count={5}>
            <FaBell size={25} color="white" />
          </Badge>
        </div>

        <ul>
          <li>
            <Link to="/dang-nhap">
              <IoIosLogIn color="white" size={16} />
              <span>Đăng nhập</span>
            </Link>
          </li>
          <li>
            <Link to="dang-ky">
              <FaUserPlus color="white" size={16} />
              <span>Đăng ký</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
