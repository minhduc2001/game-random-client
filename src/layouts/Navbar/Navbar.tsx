import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import {
  Alert,
  Avatar,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Select,
  Spin,
} from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/hooks';
import { getMe, logout } from '../../redux/features/authSlice';
import './index.scss';
import { FaHome } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';

function Navbar() {
  const items: MenuProps['items'] = [
    {
      label: <NavLink to='/'>Trang chủ</NavLink>,
      key: 'home',
      icon: <FaHome />,
    },
    {
      label: <NavLink to={'/con-so-may-man'}>Con số may mắn</NavLink>,
      key: 'lucky',
      icon: <FaRegStar />,
    },
    {
      label: <NavLink to={'dang-nhap'}>Đăng nhập</NavLink>,
      key: 'login',
      icon: <MdLogin />,
    },
    {
      label: <NavLink to={'dang-ky'}>Đăng ký</NavLink>,
      key: 'register',
      icon: <FaUserPlus />,
    },
    {
      label: 'Lịch sử',
      key: 'history',
      icon: <MdHistory />,
    },
  ];

  return (
    <>
      <div className='navbar'>
        <div className='container'>
          <Menu
            mode='horizontal'
            items={items}
            defaultSelectedKeys={['home']}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
