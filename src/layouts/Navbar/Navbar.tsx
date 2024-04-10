import { Menu, MenuProps } from "antd";

import { NavLink } from "react-router-dom";
import "./index.scss";
import { FaHome } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

function Navbar() {
  const items: MenuProps["items"] = [
    {
      label: <NavLink to="/">Trang chủ</NavLink>,
      key: "home",
      icon: <FaHome />,
    },
    {
      label: <NavLink to={"/con-so-may-man"}>Con số may mắn</NavLink>,
      key: "lucky",
      icon: <FaRegStar />,
    },
    {
      label: <NavLink to={"dang-nhap"}>Đăng nhập</NavLink>,
      key: "login",
      icon: <MdLogin />,
    },
    {
      label: <NavLink to={"dang-ky"}>Đăng ký</NavLink>,
      key: "register",
      icon: <FaUserPlus />,
    },
    {
      label: "Lịch sử",
      key: "history",
      icon: <MdHistory />,
    },
  ];

  return (
    <>
      <div className="navbar">
        <div className="container">
          <Menu
            mode="horizontal"
            items={items}
            defaultSelectedKeys={["home"]}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
