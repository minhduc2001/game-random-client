import React, { useEffect, useMemo, useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./index.scss";
import useLogin from "@/hooks/useLogin";

interface MenuItem {
  label: string;
  key: string;
  icon: React.ReactNode;
  href?: string;
}

function Menu() {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const isLogin = useLogin();

  useEffect(() => {
    let pathName = location.pathname;
    if (location.pathname == "/") pathName = "/trang-chu";
    setSelected(pathName);
  }, [location.pathname]);

  const items: MenuItem[] = useMemo(() => {
    if (isLogin)
      return [
        {
          label: "Trang chủ",
          key: "/trang-chu",
          icon: <FaHome />,
          href: "/",
        },
        {
          label: "Con số may mắn",
          key: "/con-so-may-man",
          icon: <FaRegStar />,
        },
        {
          label: "Cá nhân",
          key: "/ca-nhan",
          icon: <FaUser />,
        },
        {
          label: "Biến động số dư",
          key: "/bien-dong-so-du",
          icon: <MdHistory />,
        },
        {
          label: "Lịch sử",
          key: "/lich-su",
          icon: <MdHistory />,
        },
      ];
    return [
      {
        label: "Trang chủ",
        key: "/trang-chu",
        icon: <FaHome />,
        href: "/",
      },
      {
        label: "Con số may mắn",
        key: "/con-so-may-man",
        icon: <FaRegStar />,
      },
      {
        label: "Đăng nhập",
        key: "/dang-nhap",
        icon: <MdLogin />,
      },
      {
        label: "Đăng ký",
        key: "/dang-ky",
        icon: <FaUserPlus />,
      },
      {
        label: "Lịch sử",
        key: "/lich-su",
        icon: <MdHistory />,
      },
    ];
  }, [isLogin]);

  return (
    <ul className="menu-nav">
      {items.map((item, index) => {
        return (
          <li
            key={`item_menu_${index}`}
            className={classNames("item-menu", {
              "item-menu-active": selected === item.key,
            })}
          >
            <NavLink to={item.href ?? item.key}>
              {item.icon}
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
