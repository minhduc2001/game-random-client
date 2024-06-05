import { Menu, MenuProps } from "antd";

import { NavLink, useLocation } from "react-router-dom";
import "./index.scss";
import { FaHome } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { useMemo } from "react";

function Navbar() {
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
    if (location.pathname == "/") return "/trang-chu";
    return location.pathname;
  }, [location.pathname]);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <Menu mode="horizontal" items={items} selectedKeys={[active]} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
