import "./index.scss";
import { Badge, Menu, MenuProps } from "antd";
import { FaBell, FaHome, FaRegStar } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdHistory, MdLogin } from "react-icons/md";
import { useMemo, useState } from "react";

function Header() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation();

  const items: MenuProps["items"] = [
    {
      label: <NavLink to="/">Trang chủ</NavLink>,
      key: "/trang-chu",
      icon: <FaHome />,
    },
    {
      label: <NavLink to={"/con-so-may-man"}>Con số may mắn</NavLink>,
      key: "/con-so-may-man",
      icon: <FaRegStar />,
    },
    {
      label: <NavLink to={"/dang-nhap"}>Đăng nhập</NavLink>,
      key: "/dang-nhap",
      icon: <MdLogin />,
    },
    {
      label: <NavLink to={"/dang-ky"}>Đăng ký</NavLink>,
      key: "/dang-ky",
      icon: <FaUserPlus />,
    },
    {
      label: "Lịch sử",
      key: "history",
      icon: <MdHistory />,
    },
  ];

  const active = useMemo(() => {
    setCollapsed(false);
    if (location.pathname == "/") return "/trang-chu";
    return location.pathname;
  }, [location.pathname]);

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

        <div
          className="header-menu"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <IoMdMenu />
        </div>
      </div>
      <Menu
        mode="vertical"
        items={items}
        className={`menu-mobile ${collapsed ? "collabsed" : ""}`}
        selectedKeys={[active]}
      />
    </header>
  );
}

export default Header;
